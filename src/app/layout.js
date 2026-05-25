import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SRI VELAN CONSTRUCTION - Quality Construction Services in Dharmapuri",
  description: "SRI VELAN CONSTRUCTION offers professional construction services including civil, flooring, roofing, plumbing, electrical, painting, and finishing in Dharmapuri.",
  keywords: "Construction, Dharmapuri, Civil Work, Flooring, Roofing, Plumbing, Electrical, Painting, Building Contractor",
  authors: [{ name: "SRI VELAN CONSTRUCTION", url: "https://www.srivelanconstruction.com/" }],
  icons: {
    icon: "/fav.png", // <- Favicon image path
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "SRI VELAN CONSTRUCTION - Quality Construction Services in Dharmapuri",
    description: "Professional construction services in Dharmapuri including civil work, flooring, roofing, plumbing, electrical, and painting.",
    url: "https://www.srivelanconstruction.com/",
    siteName: "SRI VELAN CONSTRUCTION",
    images: [
      {
        url: "https://www.srivelanconstruction.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SRI VELAN CONSTRUCTION",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRI VELAN CONSTRUCTION - Quality Construction Services in Dharmapuri",
    description: "Professional construction services including civil, flooring, roofing, plumbing, electrical, and painting.",
    site: "@SRI_VELAN_CONSTRUCTION",
    creator: "@SRI_VELAN_CONSTRUCTION",
    images: ["https://www.srivelanconstruction.com/og-image.jpg"],
  },
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
