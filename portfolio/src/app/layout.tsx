import type { Metadata } from "next";
import { The_Nautigal } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import LenisWrapper from "../components/LenisWrapper";


const theNautigal = The_Nautigal({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nautigal',
});

export const metadata: Metadata = {
  title: "Soumya",
  description: "Soumya Portfolio",
  keywords: ["portfolio", "project manager"],
  authors: [{ name: "Soumya", url: "https://soumyaya.vercel.app/" }],
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${theNautigal.variable} antialiased`}
        suppressHydrationWarning
      >
        <Nav />
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
