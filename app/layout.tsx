import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MouseSpotlight } from "@/components/effects/mouse-spotlight";
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
  metadataBase: new URL("navadeep-portfolio-bcjyjehcv-thirunagarinavadeeps-projects.vercel.app"),

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
    url: "https://navadeep-portfolio-bcjyjehcv-thirunagarinavadeeps-projects.vercel.app",
    siteName: "Navadeep Portfolio",
    locale: "en_US",
    type: "website",
   },

  twitter: {
    card: "summary_large_image",
    title: "Navadeep Thirunagari | Portfolio",
    description:
      "Data Analytics • Power BI • Machine Learning • AI",
   
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
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden bg-black text-white antialiased`}
      >
        <MouseSpotlight />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}