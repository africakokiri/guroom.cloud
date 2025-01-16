"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const Darkmode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Sun strokeWidth={1} />
      ) : (
        <Moon strokeWidth={1} />
      )}
    </button>
  );
};
