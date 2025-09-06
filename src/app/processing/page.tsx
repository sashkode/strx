"use client";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { useViewTransitionRouter } from "~/lib/hooks/useViewTransitionRouter";
import {
  LuCog,
  LuSearch,
  LuGitMerge,
  LuGauge,
  LuFileText,
  LuScrollText,
  LuSparkles,
  LuCheck,
  LuLoader,
} from "react-icons/lu";
import Footer from "~/components/Footer";

type Step = {
  id: number;
  title: string;
  loading: string;
  done: string;
  icon: ReactNode;
};

const getRandomMs = () => (Math.floor(Math.random() * 3) + 5) * 1000; // 5-8s

export default function ProcessingPage() {
  const { push } = useViewTransitionRouter();
  const [current, setCurrent] = useState(-1);
  const [completed, setCompleted] = useState<boolean[]>(Array(7).fill(false));
  const timers = useRef<number[]>([]);

  const steps: Step[] = useMemo(
    () => [
      {
        id: 1,
        title: "Set context",
        loading: "Initializing Ottawa context and selecting target building…",
        done: "Target acquired: Claridge Plaza (200 Rideau St)",
        icon: <LuCog className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 2,
        title: "Discover listings",
        loading: "Discovering public STR listings within 1.2 km geofence…",
        done: "42 listings discovered",
        icon: <LuSearch className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 3,
        title: "Match to building",
        loading: "Matching via polygon containment, proximity, and alias signals…",
        done: "7 listings matched to Claridge Plaza",
        icon: <LuGitMerge className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 4,
        title: "Score likelihood",
        loading:
          "Applying explainable heuristics (entire place, short-stay language, host portfolio, registration)…",
        done: "2 high / 3 medium / 2 low confidence; median score 74",
        icon: <LuGauge className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 5,
        title: "Compile evidence",
        loading: "Extracting text snippets, amenity signatures, and map links…",
        done: "Evidence compiled for 5 suspected listings; signals consistent",
        icon: <LuFileText className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 6,
        title: "Add policy context",
        loading: "Attaching Ottawa STR bylaw context and recommended actions…",
        done: "Policy added with 1 citation",
        icon: <LuScrollText className="h-5 w-5" aria-hidden="true" />,
      },
      {
        id: 7,
        title: "Generate brief",
        loading: "Generating one-page Building Risk Brief…",
        done: "Brief ready for Claridge Plaza; includes 5 examples and a dispute link",
        icon: <LuSparkles className="h-5 w-5" aria-hidden="true" />,
      },
    ],
    []
  );

  useEffect(() => {
    // Run steps in sequence, each 3-5s
    const run = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrent(i);
        await new Promise<void>((resolve) => {
          const t = window.setTimeout(() => resolve(), getRandomMs());
          timers.current.push(t);
        });
        setCompleted((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }
    };
    run();
    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, [steps]);

  const allDone = completed.every(Boolean);

  return (
    <div className="relative min-h-dvh bg-[--background] text-[--foreground]">
      <main className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center p-6">
  <div className="vt-panel w-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 via-white/8 to-white/5 backdrop-blur-sm p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-lg font-bold opacity-90">Processing building risk</h1>
            {allDone ? (
              <Button asChild>
                <Link href="/" prefetch>
                  View results
                </Link>
              </Button>
            ) : (
              <div className="flex items-center gap-2 text-sm opacity-80">
                <LuLoader className="h-4 w-4 animate-spin" aria-hidden="true" />
                <span>Working…</span>
              </div>
            )}
          </div>
          <ul className="space-y-4">
            {steps.map((s, i) => {
              if (i > current) return null;
              const isActive = i === current && !completed[i];
              const isDone = completed[i];
              return (
                <li key={s.id} className="step-item rounded-xl border border-white/20 bg-black/30 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-white/80">
                      {isDone ? (
                        <LuCheck className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                      ) : (
                        s.icon
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-sm font-bold opacity-90">{s.title}</span>
                        <span className="text-xs opacity-60">
                          Step {i + 1} of {steps.length}
                        </span>
                      </div>
                      <p
                        className={
                          "text-sm " +
                          (isActive
                            ? "relative overflow-hidden text-white/90"
                            : isDone
                              ? "text-white/80"
                              : "text-white/70")
                        }
                      >
                        <span className={isActive ? "shine" : undefined}>{isDone ? s.done : s.loading}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          {!allDone ? (
            <p className="mt-6 text-center text-xs opacity-60">This may take a minute. You can keep this tab open.</p>
          ) : (
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button onClick={() => push("/")}>Back home</Button>
              <Button variant="ghost" asChild>
                <Link href="/" prefetch>
                  Run again
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer mode="absolute" />

      {/* Local CSS: view transitions, step grow + delayed fade, and text shine */}
      <style jsx>{`
        .vt-panel { view-transition-name: processing-panel; }

        /* Smooth cross-route panel morph */
        :global(:root::view-transition-old(processing-panel)),
        :global(:root::view-transition-new(processing-panel)) {
          animation-duration: 820ms;
          animation-timing-function: cubic-bezier(.2,.9,.2,1);
          transform-origin: top center;
        }

  /* Step appears: grow first, then fade-in + lift content */
  .step-item { overflow: hidden; max-height: 160px; opacity: 1; transform: translateY(0); transition: max-height 560ms ease, opacity 380ms ease 260ms, transform 420ms ease 260ms; }
  @starting-style { .step-item { max-height: 0; opacity: 0; transform: translateY(10px); } }

        /* Reliable text shine using animated background-position */
        .shine {
          background-image: linear-gradient(90deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.45) 100%);
          background-size: 200% 100%;
          background-position: 200% 0;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine-sweep 2s linear infinite;
        }
        @keyframes shine-sweep { to { background-position: -200% 0; } }
      `}</style>
    </div>
  );
}
