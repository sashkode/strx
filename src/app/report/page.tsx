export default function Report() {
  return (
    <div className="min-h-dvh bg-[--background] text-[--foreground]">
      <main className="mx-auto max-w-4xl p-6">
        <div className="w-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-white/5 backdrop-blur-sm p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] shadow-lg">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/20 pb-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                STRX Compliance Assessment
              </h1>
              <p className="text-lg font-semibold text-white/90">
                Claridge 200 Rideau - Short-Term Rental Risk Assessment
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-right text-sm text-white/80">
              <div>
                <strong>Building ID:</strong> OTT-001
              </div>
              <div>
                <strong>Analysis Date:</strong> Sept 6, 2025
              </div>
              <div>
                <strong>Report Generated:</strong> 19:33 UTC
              </div>
            </div>
          </div>

          {/* Reviewer Box */}
          {/* <div className="float-right border border-white/20 p-4 ml-6 mb-6 rounded-2xl bg-white/5">
            <div className="text-sm">
              <strong className="text-white">Human Review Required</strong>
              <br />
              <span className="text-white/70">
                <em>Reviewer:</em> _______________
              </span>
              <br />
              <span className="text-white/70">
                <em>Date:</em> _______________
              </span>
              <br />
              <span className="text-white/70">
                <em>Status:</em> _______________
              </span>
            </div>
          </div> */}

          {/* Risk Score */}
          <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] mb-6 gap-8">
            <img
              src="/building.jpg"
              alt="Building"
              className="w-full h-auto rounded-lg object-cover"
            />

            <div className="text-left">
              <h2 className="text-2xl font-bold">65/100 Risk Score</h2>
              <p className="mb-3">Medium confidence | High priority</p>

              <div className="flex justify-start gap-2">
                <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  ⚠️ Medium Risk
                </span>
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  🚨 Compliance Concern
                </span>
              </div>
            </div>
          </div>

          {/* Violation Box */}
          <div className="mt-12 mb-6">
            <h3 className="text-xl font-semibold mb-4">
              🚨 Potential STR Violations Detected
            </h3>
            <div className="space-y-4">
              {/* First Violation Card */}
              <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 flex">
                    <img
                      src="https://placehold.co/200x150/374151/ffffff"
                      alt="Listing preview"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm space-y-1">
                      <div>
                        <strong>Listing ID:</strong> AB-52847391 |{" "}
                        <strong>Platform:</strong> Airbnb
                      </div>
                      <div>
                        <strong>Property:</strong> "Modern Downtown Condo -
                        Steps from ByWard Market"
                      </div>
                      <div>
                        <strong>Address:</strong> 185 Rideau Street (120m from
                        building)
                      </div>
                      <div>
                        <strong>Price:</strong> $165 CAD/night
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://airbnb.com/rooms/AB-52847391"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        View on Airbnb →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Violation Card */}
              <div className="border border-white/20 rounded-lg p-4 bg-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1 flex">
                    <img
                      src="https://placehold.co/200x150/374151/ffffff"
                      alt="Listing preview"
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm space-y-1">
                      <div>
                        <strong>Listing ID:</strong> VR-78452901 |{" "}
                        <strong>Platform:</strong> Vrbo
                      </div>
                      <div>
                        <strong>Property:</strong> "Luxury Downtown Apartment -
                        Parliament Hill Views"
                      </div>
                      <div>
                        <strong>Address:</strong> 195 Rideau Street (80m from
                        building)
                      </div>
                      <div>
                        <strong>Price:</strong> $195 CAD/night
                      </div>
                    </div>
                    <div className="mt-3">
                      <a
                        href="https://vrbo.com/VR-78452901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-white/20 hover:border-white/40 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        View on Vrbo →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                Evidence Summary
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Proximity:</strong> 120m on same street (Rideau)
                </li>
                <li>
                  <strong>High Activity:</strong> 127 reviews indicating active
                  operation
                </li>
                <li>
                  <strong>Tourist Marketing:</strong> "Steps from ByWard Market"
                </li>
                <li>
                  <strong>Non-Compliance:</strong> No registration number
                  displayed
                </li>
                <li>
                  <strong>Listing Type:</strong> Entire apartment rental
                </li>
                <li>
                  <strong>Pricing:</strong> $165 CAD base (luxury tier)
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                Building STR Policy
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Status:</strong> STRs PROHIBITED by building
                  corporation
                </li>
                <li>
                  <strong>Authority:</strong> Ottawa Bylaw 2021-104 permits
                  condo prohibition
                </li>
                <li>
                  <strong>Documentation:</strong> 200 Rideau Rental Rules (Jan
                  2017)
                </li>
                <li>
                  <strong>Notification:</strong> Tenancy restrictions enforced
                </li>
              </ul>
            </div>
          </div>

          {/* Confidence Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-blue-400 font-semibold text-sm">
                Match Confidence
              </div>
              <div className="text-white mt-1">Very High</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-blue-400 font-semibold text-sm">
                Investigation Priority
              </div>
              <div className="text-white mt-1">High</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-blue-400 font-semibold text-sm">
                Compliance Risk
              </div>
              <div className="text-white mt-1">Medium-High</div>
            </div>
          </div>

          {/* Key Findings */}
          <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Key Findings & Risk Factors
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Policy Violation:</strong> Building explicitly prohibits
                short-term rentals
              </li>
              <li>
                <strong>Address Ambiguity:</strong> Different street number (185
                vs 200) creates uncertainty
              </li>
              <li>
                <strong>Missing Compliance:</strong> No Ottawa STR registration
                displayed
              </li>
              <li>
                <strong>High Activity Level:</strong> 127 reviews suggest
                sustained operation
              </li>
              <li>
                <strong>Tourist Focus:</strong> Marketing targets short-stay
                visitors
              </li>
            </ul>
          </div>

          {/* Dispute Section */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6 text-center">
            <h3 className="text-lg font-semibold text-blue-300 mb-4">
              Dispute Resolution & Next Steps
            </h3>
            <p className="text-white/80 mb-4">
              If you believe this assessment is incorrect or need to report
              additional information:
            </p>
            <a
              href="mailto:compliance@strx-platform.com?subject=Dispute%20-%20OTT-001%20Risk%20Brief&body=Building:%20Claridge%20200%20Rideau%0AListing:%20AB-52847391%0AReason:"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              🔗 Submit Dispute or Additional Evidence
            </a>
            <p className="text-xs text-white/60 mt-3">
              Include: Building ID (OTT-001), Listing ID (AB-52847391), and
              supporting documentation
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-white/20 pt-6 text-xs text-white/60">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div>
                <strong>Recommendations:</strong> 1) Verify building identity
                through property management 2) Request compliance documentation
                from host 3) Monitor for additional listings 4) Consider
                enforcement action if confirmed
              </div>
              <div className="text-right">
                Generated by STRX Compliance Platform | For Property Management
                Use Only
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
