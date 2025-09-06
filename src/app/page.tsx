"use client";
import Image from "next/image";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";

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
            className="select-none -my-40"
          />
          <div className="w-full rounded-2xl border border-white/10 bg-black/20 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
            <label htmlFor="address" className="mb-2 block text-sm tracking-wide opacity-80">
              Your Building Address
            </label>
            <div className="flex w-full items-center gap-3">
              <Input
                id="address"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button className="shrink-0">Check for STRs</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 opacity-90">
          <span className="text-sm">Powered by the <strong>Solace Agent Mesh</strong></span>
          <Image src="/solace-logo.png" alt="Solace logo" width={44} height={44} />
        </div>
      </main>
    </div>
  );
}
