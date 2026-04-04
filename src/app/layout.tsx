import type { Metadata } from "next";
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
    default: "Peel Car Sales — Used Cars Mississauga & Oakville | Bad Credit Car Loans GTA",
    template: "%s | Peel Car Sales — Used Cars Mississauga & Oakville",
  },
  description:
    "150+ quality used cars for sale in Mississauga & Oakville. Bad credit, no credit, new to Canada — get approved in 5 minutes. AutoTrader Best Priced Dealer 2024 & 2025. Affordable used SUVs, trucks, sedans near Toronto, Brampton, Burlington. Trade-in & financing available. Call 905-678-0048.",
  keywords: [
    // Primary high-volume keywords
    "used cars Mississauga",
    "used cars Oakville",
    "used car dealership Mississauga",
    "used car dealer Oakville",
    "used cars near me",
    "used cars for sale GTA",
    "used cars Toronto",
    "used cars Brampton",
    // Bad credit / financing keywords (high commercial intent)
    "bad credit car loans Mississauga",
    "bad credit car dealership",
    "bad credit auto financing Ontario",
    "no credit car loans",
    "car financing bad credit GTA",
    "bad credit car loans Toronto",
    "bad credit car loans Oakville",
    "no credit car loans Mississauga",
    "car loan approval bad credit",
    "subprime auto loans Ontario",
    // New to Canada / niche financing
    "new to Canada car loan",
    "newcomer car financing Ontario",
    "first time car buyer Mississauga",
    "student car loan Ontario",
    "self-employed car financing",
    "bankruptcy car loan GTA",
    // Vehicle type keywords
    "cheap used SUVs Mississauga",
    "affordable used trucks Oakville",
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
    title: "Peel Car Sales — Used Cars Mississauga & Oakville | Bad Credit Car Loans GTA",
    description:
      "150+ quality used cars in Mississauga & Oakville. Bad credit, no credit, new to Canada — approved in 5 minutes. AutoTrader Best Priced Dealer. Trade-in & financing. Call 905-678-0048.",
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
    title: "Peel Car Sales — Used Cars Mississauga & Oakville | Any Credit Welcome",
    description:
      "150+ used cars. Bad credit OK. Approved in 5 minutes. Two GTA locations. AutoTrader Best Priced Dealer 2024 & 2025.",
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
      <body>{children}</body>
    </html>
  );
}
