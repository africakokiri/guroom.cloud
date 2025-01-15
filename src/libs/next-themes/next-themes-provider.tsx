"use client";

import useMounted from "@/hooks/useMounted";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export default function NextThemesProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const isMounted = useMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
}
