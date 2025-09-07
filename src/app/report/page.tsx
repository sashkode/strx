"use client";

import { LuCircleAlert, LuCircleCheck, LuFileWarning } from "react-icons/lu";

export default function Report() {
  return (
    <div className="min-h-dvh bg-[--background] text-[--foreground]">
      <main className="mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center p-6">
        <div className="vt-panel w-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-white/5 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          <div className="bg-red-200"></div>

          {/* Header */}
          <div className="px-6 pt-6 pb-8 grid grid-cols-[auto_1fr] gap-4 border-b border-white/20">
            <div className="bg-red-200 aspect-square bg-[url('/building.jpg')] bg-cover bg-center rounded-md" />

            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">STRX Risk Assessment</h1>
                  <p className="text-white/60">200 Rideau Street</p>
                </div>

                <div className="text-right opacity-90">
                  <div>Building ID: OTT-001</div>
                  <div>Sept 6, 2025</div>
                </div>
              </div>

              <div className="border border-red-500/50 rounded-md p-4 bg-red-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <LuFileWarning className="size-5 text-red-500" />
                  <div className="flex-1 text-xl font-semibold flex items-center justify-between gap-2">
                    <div>Risk Score</div>
                    <div>65%</div>
                  </div>
                </div>

                <div>
                  <span className="font-semibold">Confidence:</span> Medium
                </div>
                <div>
                  <span className="font-semibold">Status:</span> Investigation
                  Required
                </div>
              </div>
            </div>
          </div>

          {/* Potential STR Violations Detected */}
          <div className="px-6 py-8 border-b border-white/20">
            <div>
              <h3 className="text-xl font-semibold">
                Potential STR Violations Detected
              </h3>
              <p className="text-white/60 mb-4">
                These listings are potential STR violations detected by STRX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Violation Card */}
              <div className="border border-white/20 rounded-md p-4 bg-white/5">
                <div className="flex gap-3">
                  <div className="size-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#0e214b]">
                    <img
                      src="/vrbo.svg"
                      alt="Listing preview"
                      className="object-cover size-full"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm space-y-1">
                      <div>
                        <strong>Listing ID:</strong> AB-52847391
                      </div>
                      <div>
                        <strong>Platform:</strong> Airbnb
                      </div>
                      <div>
                        <strong>Property:</strong> "Modern Downtown Condo"
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Violation Card */}
              <div className="border border-white/20 rounded-md p-4 bg-white/5">
                <div className="flex gap-3">
                  <div className="size-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src="/airbnb.jpg"
                      alt="Listing preview"
                      className="object-cover size-full scale-200"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm space-y-1">
                      <div>
                        <strong>Listing ID:</strong> VR-78452901
                      </div>
                      <div>
                        <strong>Platform:</strong> Vrbo
                      </div>
                      <div>
                        <strong>Property:</strong> "Luxury Downtown Apartment"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 border border-white/20 rounded-md bg-white/5">
                <div className="font-semibold text-sm">Match Confidence</div>
                <div className="text-red-500 mt-1">Very High</div>
              </div>

              <div className="text-center p-4 border border-white/20 rounded-md bg-white/5">
                <div className="font-semibold text-sm">
                  Investigation Priority
                </div>
                <div className="text-orange-500 mt-1">High</div>
              </div>

              <div className="text-center p-4 border border-white/20 rounded-md bg-white/5">
                <div className="font-semibold text-sm">Compliance Risk</div>
                <div className="text-yellow-500 mt-1">Medium-High</div>
              </div>
            </div>
          </div>

          {/* Evidence Summary */}
          <div className="px-6 py-8 border-b border-white/20">
            <div>
              <h3 className="text-xl font-semibold">
                Local Policies and Bylaws
              </h3>
              <p className="text-white/60 mb-4">
                These policies dictate the rules and regulations applicable to
                the building.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-white/20 rounded-md bg-white/5">
                <div className="font-semibold flex items-center justify-between">
                  Local Policies
                  <div className="bg-emerald-500/20 p-1 rounded-full">
                    <LuCircleCheck className="text-emerald-400 size-5" />
                  </div>
                </div>

                <div className="text-white text-sm mt-2 grid grid-cols-[auto_1fr] gap-2">
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Status:</strong> Ottawa Bylaw permits short-term
                      rentals
                    </li>

                    <li>
                      <strong>Documentation:</strong> Ottawa Bylaw 2021-104 (Jan
                      2017)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 border border-white/20 rounded-md bg-white/5">
                <div className="font-semibold flex items-center justify-between">
                  Building Bylaws
                  <div className="bg-red-500/20 p-1 rounded-full">
                    <LuCircleAlert className="text-red-400 size-5" />
                  </div>
                </div>

                <div className="text-white text-sm mt-2 grid grid-cols-[auto_1fr] gap-2">
                  <ul className="space-y-1 text-sm">
                    <li>
                      <strong>Status:</strong> Prohibited by building
                      corporation
                    </li>
                    <li>
                      <strong>Documentation:</strong> 200 Rideau Rental Rules
                      (Jan 2017)
                    </li>
                    <li>
                      <strong>Notification:</strong> Tenancy restrictions
                      enforced
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics & Findings */}
          <div className="px-6 py-8">
            <div>
              <h3 className="text-xl font-semibold">Key Metrics & Findings</h3>
              <p className="text-white/60 mb-4">
                Summary of STRX findings and relevant risk factors.
              </p>
            </div>

            <div className="p-4 text-white text-sm border border-white/20 rounded-md bg-white/5">
              <ul className="space-y-1 text-sm">
                <li>
                  <strong>Buildings Evaluated:</strong> 10 total
                </li>

                <li>
                  <strong>Listings Processed:</strong> 7 with high confidence in
                  building associations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
