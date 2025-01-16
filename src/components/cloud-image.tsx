"use client";

import { cn } from "@/libs/shadcn/utils";

import { useTheme } from "next-themes";
import Image from "next/image";

export const CloudImage = () => {
  const { theme } = useTheme();

  return (
    <Image
      src="/images/cloud.jpg"
      alt=""
      layout="intrinsic"
      width={1024}
      height={1024}
      className={cn("rounded-lg", theme === "dark" && "grayscale")}
    />
  );
};
