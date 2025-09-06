"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { Input } from "~/components/ui/input";
import { usePlacesAutocomplete } from "./usePlacesAutocomplete";

type Props = {
  id?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  countries?: readonly string[];
  types?: readonly string[];
  fields?: readonly string[];
  onPlaceSelected?: (place: any) => void;
  inputProps?: Omit<React.ComponentProps<typeof Input>, "value" | "onChange" | "id" | "placeholder" | "className">;
};

export const GooglePlacesAutocomplete = ({
  id,
  value,
  onChange,
  placeholder = "Enter address",
  className,
  countries = ["ca"],
  types = ["address"],
  fields,
  onPlaceSelected,
  inputProps,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  usePlacesAutocomplete(inputRef, isLoaded, {
    types,
    countries,
    fields,
    onPlace: (place) => {
      const formatted = (place as any)?.formatted_address as string | undefined;
      if (formatted) onChange(formatted);
      onPlaceSelected?.(place);
    },
  });

  return (
    <>
      <Script
        id="google-maps"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&v=weekly`}
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
      />
      <Input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        ref={inputRef}
        className={className}
        {...inputProps}
      />
    </>
  );
};

export default GooglePlacesAutocomplete;
