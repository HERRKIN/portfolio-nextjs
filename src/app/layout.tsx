import Blobs from "../components/blobs";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "José Andradez - Developer Portfolio",
  description:
    "Developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground min-h-screen`}
      >
        <Blobs />
        <Header />
        {children}
      </body>
    </html>
  );
}
