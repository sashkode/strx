"use client";

import { RefObject, useEffect } from "react";

export type UsePlacesAutocompleteOptions = {
  types?: readonly string[];
  countries?: readonly string[];
  fields?: readonly string[];
  onPlace?: (place: any) => void;
};

/**
 * Wire up Google Places Autocomplete to a given input element once the Maps JS API is loaded.
 */
export const usePlacesAutocomplete = (
  inputRef: RefObject<HTMLInputElement | null>,
  isLoaded: boolean,
  opts: UsePlacesAutocompleteOptions = {},
) => {
  useEffect(() => {
    const w = window as unknown as { google?: any };
    if (!isLoaded || !inputRef.current || !w.google?.maps?.places) return;

    const google = w.google as any;
    const options = {
      types: opts.types ?? ["address"],
      componentRestrictions: opts.countries
        ? { country: [...opts.countries] }
        : undefined,
      fields:
        opts.fields ?? (['formatted_address', 'address_components', 'geometry', 'place_id'] as const),
    } as const;

    const autocomplete = new google.maps.places.Autocomplete(
      inputRef.current,
      options,
    );

    const listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace?.();
      opts.onPlace?.(place);
    });

    return () => {
      try {
        if (listener?.remove) listener.remove();
        else if (google?.maps?.event?.clearInstanceListeners)
          google.maps.event.clearInstanceListeners(autocomplete);
      } catch {
        // no-op
      }
    };
    // We only want to re-init when the script loads or the input ref changes; options changes are rare
    // and should be handled by remounting the component using the hook if needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, inputRef]);
};
