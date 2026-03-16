import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";

const blairITC = localFont({
  src: [
    {
      path: "../../public/fonts/blair/BlairITC-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/blair/BlairITC-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/blair/BlairITC-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const halenoir = localFont({
  src: [
    {
      path: "../../public/fonts/halenoir/Halenoir-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/halenoir/Halenoir-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/halenoir/Halenoir-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/halenoir/Halenoir-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TOLEM | Horlogerie Française",
  description:
    "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${blairITC.variable} ${halenoir.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
