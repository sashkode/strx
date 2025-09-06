"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useViewTransitionRouter() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const push = (to: string) => {
    const dt = document as unknown as { startViewTransition?: (cb: () => void) => void };
    if (typeof dt.startViewTransition === "function") {
      dt.startViewTransition(() => {
        router.push(to);
      });
    } else {
      startTransition(() => {
        router.push(to);
      });
    }
  };

  return { push, isPending };
}
