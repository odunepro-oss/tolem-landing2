import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import EarlyAccessButton from "@/components/EarlyAccessButton";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://tolem.fr"),
  title: {
    default: "TOLEM | Horlogerie Française",
    template: "%s | TOLEM",
  },
  description:
    "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
  keywords: ["horlogerie française", "montre", "TOLEM"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tolem.fr",
    siteName: "TOLEM",
    title: "TOLEM | Horlogerie Française",
    description:
      "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
    images: [
      {
        url: "/montre2.png",
        width: 1200,
        height: 630,
        alt: "TOLEM — Horlogerie Française",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOLEM | Horlogerie Française",
    description:
      "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
    images: ["/montre2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tolem.fr/#organization",
      name: "TOLEM",
      url: "https://tolem.fr",
      description:
        "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
      logo: "https://tolem.fr/favicon.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://tolem.fr/#website",
      name: "TOLEM",
      url: "https://tolem.fr",
      description:
        "Maison d'horlogerie française. Double héritage : excellence joaillière et ingénierie industrielle.",
      publisher: {
        "@id": "https://tolem.fr/#organization",
      },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <SmoothScroll />
          <Navigation />
          {children}
          <EarlyAccessButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
