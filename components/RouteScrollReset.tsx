"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Preserve section links, but start newly opened pages at the top.
    if (!window.location.hash) {
      const frame = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [pathname]);

  return null;
}
