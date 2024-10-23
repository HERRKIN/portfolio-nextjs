import Blobs from "../components/blobs";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Andradez - Developer Portfolio",
  description:
    "Developer portfolio",
  openGraph: {
    title: "José Andradez - Developer Portfolio",
    description:
      "Developer portfolio",
    url: "https://herrkin.github.io/portfolio-nextjs/",
    siteName: "José Andradez Portfolio",
    images: [
      {
        url: "https://herrkin.github.io/portfolio-nextjs/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Andradez - Developer Portfolio",
    description:
      "Developer portfolio",
    images: ["https://herrkin.github.io/portfolio-nextjs/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground h-[100dvh]`}
      >
        <Blobs />
        <Header />
        {children}
      </body>
    </html>
  );
}
