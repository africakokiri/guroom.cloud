import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import { Noto_Sans_KR } from "next/font/google";

export { metadata } from "@/metadata/layout";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} h-dvh w-dvw`}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}