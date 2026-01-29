import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: {
    default: "Callixte | Danseuse & Chorégraphe Contemporaine",
    template: "%s | Callixte",
  },
  description:
    "Portfolio de Callixte, danseuse et chorégraphe contemporaine basée à Paris. Découvrez ses créations, performances et collaborations artistiques.",
  keywords: [
    "danse contemporaine",
    "chorégraphe",
    "danseuse",
    "Paris",
    "performance",
    "art",
    "contemporary dance",
    "choreographer",
  ],
  authors: [{ name: "Callixte" }],
  creator: "Callixte",
  metadataBase: new URL("https://callixte.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    siteName: "Callixte",
    title: "Callixte | Danseuse & Chorégraphe Contemporaine",
    description:
      "Portfolio de Callixte, danseuse et chorégraphe contemporaine basée à Paris.",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Callixte - Danseuse Contemporaine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Callixte | Danseuse & Chorégraphe Contemporaine",
    description:
      "Portfolio de Callixte, danseuse et chorégraphe contemporaine basée à Paris.",
    images: ["/images/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth overscroll-none`}>
      <body className="min-h-screen w-full overflow-x-hidden bg-white text-black antialiased leading-relaxed">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
