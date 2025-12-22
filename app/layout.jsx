import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMetadata, businessInfo, structuredData } from "./constants/index.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${businessInfo.name}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.join(", "),
  authors: [{ name: siteMetadata.author }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    type: siteMetadata.type,
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.image,
        width: 1200,
        height: 630,
        alt: `${businessInfo.name} - ${businessInfo.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMetadata.twitterHandle,
    creator: siteMetadata.twitterHandle,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.image],
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
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code-here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={siteMetadata.language}>
      <head>
        {/* Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Additional Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": businessInfo.name,
              "image": siteMetadata.image,
              "telephone": businessInfo.phone.primary,
              "email": businessInfo.email,
              "url": siteMetadata.siteUrl,
              "address": businessInfo.locations.map(location => ({
                "@type": "PostalAddress",
                "streetAddress": location.address.split(',')[0],
                "addressLocality": location.address.split(',').slice(-2)[0].trim(),
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              })),
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:30",
                "closes": "20:00"
              },
              "hasMap": "https://maps.google.com/?q=Darsh+Dental+Clinic+Karelibaug+Vadodara",
              "priceRange": "₹₹"
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
