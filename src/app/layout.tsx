import type { Metadata } from "next";
import Script from "next/script";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peelcarsales.com"),
  title: {
    default: "Peel Car Sales — Car Dealership Near Me | Used Cars for Sale Toronto, Mississauga & Oakville",
    template: "%s | Peel Car Sales — Car Dealership Near Me | Used Cars Toronto",
  },
  description:
    "Car dealership near me — 150+ quality used cars for sale in Toronto, Mississauga & Oakville. Used car dealerships serving GTA, Brampton, Burlington. AutoTrader Best Priced Dealer 2025. Visit our Mississauga or Oakville showroom. Call 905-678-0048.",
  keywords: [
    // Top 5 highest search volume keywords (Toronto GTA)
    "car dealerships near me",
    "used cars Toronto",
    "used cars for sale Toronto",
    "used car dealerships near me",
    "cars for sale Toronto",
    "cars for sale near me",
    // Primary high-volume keywords
    "used cars Mississauga",
    "used cars Oakville",
    "used car dealership Mississauga",
    "used car dealer Oakville",
    "used cars near me",
    "used cars for sale GTA",
    "used cars Brampton",
    // Vehicle type keywords
    "used SUVs Mississauga",
    "used trucks Oakville",
    "used sedans for sale GTA",
    "used Honda Mississauga",
    "used Toyota Oakville",
    "used cars under 15000 Mississauga",
    "used cars under 10000 GTA",
    // Trade-in keywords
    "sell my car Mississauga",
    "trade in my car Oakville",
    "car trade in value GTA",
    "sell used car Toronto",
    "we buy cars Mississauga",
    // Dealership & trust keywords
    "best used car dealer Mississauga",
    "AutoTrader best priced dealer",
    "CarGurus top rated dealer Ontario",
    "Peel Car Sales",
    "Peel Car Sales Mississauga",
    "Peel Car Sales Oakville",
    // Location-based long-tail
    "used cars Derry Road Mississauga",
    "car dealership Wyecroft Road Oakville",
    "used car dealers near Brampton",
    "used cars Etobicoke",
    "used cars North York",
    "used cars Burlington",
    "car dealership GTA Ontario",
  ],
  authors: [{ name: "Peel Car Sales" }],
  creator: "Peel Car Sales",
  publisher: "Peel Car Sales",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.peelcarsales.com",
    siteName: "Peel Car Sales",
    title: "Peel Car Sales — Used Cars Mississauga & Oakville | Trusted GTA Dealership",
    description:
      "150+ quality used cars in Mississauga & Oakville. AutoTrader Best Priced Dealer 2024 & 2025. Trade-ins welcome. Call 905-678-0048.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peel Car Sales — 150+ Used Cars in Mississauga & Oakville, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peel Car Sales — Used Cars Mississauga & Oakville | Trusted GTA Dealership",
    description:
      "150+ quality used cars. Two GTA locations — Mississauga & Oakville. AutoTrader Best Priced Dealer 2024 & 2025.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.peelcarsales.com",
  },
  category: "Automotive",
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Mississauga, Ontario",
    "geo.position": "43.6939;-79.6441",
    ICBM: "43.6939, -79.6441",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        {/* Google tag (gtag.js) — Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-946920610"
          strategy="afterInteractive"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-946920610');
          `}
        </Script>
        {/* Page-view conversion (Website traffic) */}
        <Script id="google-ads-pageview-conversion" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('event', 'conversion', {'send_to': 'AW-946920610/F23cCIKlm-wYEKK5w8MD'});
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
