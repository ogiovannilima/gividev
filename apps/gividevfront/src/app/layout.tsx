import type { Metadata } from "next";
// import { Major_Mono_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Givi Dev",
  description: "Where is my mind ?",
  openGraph: {
    title: "Givi Dev",
    description: "Where is my mind ?",
    images: [
      {
        url: "/profile1.png",
        width: 800,
        height: 600,
      },
    ],
  },
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
