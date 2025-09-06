"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function useViewTransitionRouter() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const push = (to: string) => {
    startTransition(() => {
      router.push(to);
    });
  };

  return { push, isPending };
}
