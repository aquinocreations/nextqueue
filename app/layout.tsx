import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "NextQueue | Custom Personalized Travel Itineraries",
  description:
    "Get a detailed, personalized travel itinerary crafted by world-traveled experts. Custom day-by-day plans, local tips, budget estimates, and authentic recommendations. Starting at $297.",
  keywords: [
    "custom travel itinerary",
    "personalized travel plan",
    "travel consulting",
    "travel curator",
  ],
  openGraph: {
    title: "NextQueue | Custom Personalized Travel Itineraries",
    description:
      "Authentic, personalized travel plans crafted by global explorers. Starting at $297.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
