"use client";

import { RefObject, useEffect, useRef } from "react";

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
  // Keep latest onPlace callback without forcing re-subscription of the Google listener
  const onPlaceRef = useRef<UsePlacesAutocompleteOptions["onPlace"]>(opts.onPlace);
  useEffect(() => {
    onPlaceRef.current = opts.onPlace;
  }, [opts.onPlace]);

  // Track the current Autocomplete instance and the element it is bound to
  const autocompleteRef = useRef<any | null>(null);
  const boundElementRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const w = window as unknown as { google?: any };
    const el = inputRef.current;
    if (!isLoaded || !el || !w.google?.maps?.places) return;

    // If the element changed since last bind, clear old listeners/instance
    if (autocompleteRef.current && boundElementRef.current !== el) {
      try {
        if (w.google?.maps?.event?.clearInstanceListeners)
          w.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      } catch {
        // no-op
      }
      autocompleteRef.current = null;
    }

    // Initialize if not already bound
    if (!autocompleteRef.current) {
      const google = w.google as any;
      const options = {
        types: opts.types ?? ["address"],
        componentRestrictions: opts.countries ? { country: [...opts.countries] } : undefined,
        fields: opts.fields ?? ["formatted_address", "address_components", "geometry", "place_id"],
      } as const;

      const instance = new google.maps.places.Autocomplete(el, options);
      instance.addListener("place_changed", () => {
        const place = instance.getPlace?.();
        onPlaceRef.current?.(place);
      });

      autocompleteRef.current = instance;
      boundElementRef.current = el;
    }

    // Cleanup when this specific element unmounts/changes
    return () => {
      // Only clean up if we're still bound to the same element
      if (boundElementRef.current !== el) return;
      try {
        if (w.google?.maps?.event?.clearInstanceListeners)
          w.google.maps.event.clearInstanceListeners(autocompleteRef.current);
      } catch {
        // no-op
      }
      autocompleteRef.current = null;
      boundElementRef.current = null;
    };
    // We want to re-init when the script loads or the actual input element node changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, inputRef.current]);
};
