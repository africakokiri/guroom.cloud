"use client";

import { cn } from "@/libs/shadcn/utils";

import { useTheme } from "next-themes";
import Image from "next/image";

export const StackImage = ({ slug }: { slug: string }) => {
  const { theme } = useTheme();

  return (
    <Image
      src={`/icons/${slug.split("/")[1].toLowerCase()}.svg`}
      alt=""
      width={20}
      height={20}
      className={cn("rounded-sm", theme === "dark" && "grayscale")}
    />
  );
};
