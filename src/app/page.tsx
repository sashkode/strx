"use client";
import Image from "next/image";
import { useState, unstable_ViewTransition as ViewTransition } from "react";
import { LuMapPin } from "react-icons/lu";
import { Button } from "~/components/ui/button";
import { GooglePlacesAutocomplete } from "~/lib/google-places-autocomplete";
import { useViewTransitionRouter } from "~/lib/hooks/useViewTransitionRouter";
import Footer from "~/components/Footer";

const generateGuid = () =>
  typeof crypto !== "undefined" && typeof (crypto as any).randomUUID === "function"
    ? (crypto as any).randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });

export default function Home() {
  const [address, setAddress] = useState("");
  const { push } = useViewTransitionRouter();
  return (
    <div className="min-h-dvh bg-[--background] text-[--foreground]">
      <ViewTransition />
      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center gap-10 p-6">
        <div className="flex w-full flex-col items-center gap-8">
          <Image
            src="/logo.png"
            width={540}
            height={540}
            alt="STRX"
            priority
            className="-my-20 select-none sm:-my-40"
          />
          <div style={{ viewTransitionName: "processing-panel" }} className="w-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-white/5 backdrop-blur-sm p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
            <label
              htmlFor="address"
              className="mb-2 block text-sm tracking-wide opacity-80"
            >
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
              <Button
                className="shrink-0"
                onClick={() => {
                  const taskId = generateGuid();
                  const to = `/processing?taskId=${taskId}`;
                  push(to);
                }}
              >
                Check for STRs
              </Button>
            </div>
          </div>
        </div>
        <Footer mode="inline" />
      </main>
    </div>
  );
}
