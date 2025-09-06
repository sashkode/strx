"use client";
import Image from "next/image";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { GooglePlacesAutocomplete } from "~/lib/google-places-autocomplete";

export default function Home() {
  const [address, setAddress] = useState("");
  return (
    <div className="min-h-dvh bg-[--background] text-[--foreground]">
      <main className="mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center gap-10 p-6">
        <div className="flex flex-col items-center gap-8 w-full">
          <Image
            src="/logo.png"
            width={540}
            height={540}
            alt="STRX"
            priority
            className="select-none -my-20 sm:-my-40"
          />
          <div className="w-full rounded-2xl border border-white/10 bg-black/20 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <label htmlFor="address" className="mb-2 block text-sm tracking-wide opacity-80">
              Your Building Address
            </label>
            <div className="flex w-full items-center gap-3">
              <div className="relative w-full">
                <LuMapPin
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/70"
                  aria-hidden="true"
                />
                <GooglePlacesAutocomplete
                  id="address"
                  value={address}
                  onChange={setAddress}
                  countries={["ca"]}
                  types={["address"]}
                  className="w-full pl-10"
                />
              </div>
              <Button className="shrink-0">Check for STRs</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 opacity-90 flex-col sm:flex-row">
          <span className="text-sm">Built for the <strong>Ottawa Hackathon 3.0</strong></span>
          <span className="hidden sm:block">|</span>
          <span className="text-sm">Powered by the <strong>Solace Agent Mesh</strong></span>
          <Image src="/solace-logo.png" alt="Solace logo" width={256} height={256} className="mt-6 sm:mt-0 size-[96px] sm:size-[44px]" />
        </div>
      </main>
    </div>
  );
}
