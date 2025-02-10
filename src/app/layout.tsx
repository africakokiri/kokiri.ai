import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kokiri",
  description: "multiple AI",
  icons: {
    icon: "/icons/elephant.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="h-screen w-screen antialiased">
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
