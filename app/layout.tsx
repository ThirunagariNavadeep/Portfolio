import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-VERCEL-URL.vercel.app"),

  title: {
    default: "Navadeep Thirunagari | Data Analyst & AI Developer",
    template: "%s | Navadeep Thirunagari",
  },

  description:
    "Portfolio of Navadeep Thirunagari showcasing Power BI dashboards, SQL analytics, machine learning projects, and AI-powered applications.",

  keywords: [
    "Navadeep Thirunagari",
    "Data Analyst",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Machine Learning",
    "AI Developer",
    "Data Analytics",
    "Portfolio",
    "Hyderabad",
  ],

  authors: [
    {
      name: "Navadeep Thirunagari",
    },
  ],

  creator: "Navadeep Thirunagari",

  openGraph: {
    title: "Navadeep Thirunagari | Data Analyst & AI Developer",
    description:
      "Explore my portfolio featuring analytics dashboards, machine learning projects, and AI applications.",
    url: "https://YOUR-VERCEL-URL.vercel.app",
    siteName: "Navadeep Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Navadeep Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Navadeep Thirunagari | Portfolio",
    description:
      "Data Analytics • Power BI • Machine Learning • AI",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}