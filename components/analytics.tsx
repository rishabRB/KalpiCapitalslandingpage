"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // This is where you would normally send analytics data
      // For example: sendPageView(pathname + searchParams.toString())
      console.log(`Page view: ${pathname}${searchParams.toString()}`);
    }
  }, [pathname, searchParams]);

  return null;
}