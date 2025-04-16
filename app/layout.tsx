import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";
// import { auth } from "@/auth";
// import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400"], // or any weights you need
  variable: "--font-roboto", // optional custom CSS variable
  display: "swap", // controls how the font is displayed
});

export const metadata: Metadata = {
  title: "Caneck Leyva | Portfolio",
  description: "Welcome to my portfolio website | Caneck Leyva.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await auth();
  return (
    // <SessionProvider session={session}>
    <html lang="en">
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    // </SessionProvider>
  );
}
