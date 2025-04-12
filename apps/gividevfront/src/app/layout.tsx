import type { Metadata } from "next";
// import { Major_Mono_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Givi Dev",
  description: "Where is my mind ?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
