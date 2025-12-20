export const metadata = {
  title: "Darsh Dental Clinic Locations in Vadodara - 3 Convenient Centers",
  description: "Visit Darsh Dental Clinic at 3 convenient locations in Vadodara - Karelibaug, VIP Road, and Ajwa Road. Expert dental care by Dr. Dhiraj Nayak.",
  keywords: "darsh dental clinic locations, karelibaug dental clinic, vip road dentist, ajwa road dental center, vadodara dental clinic",
  canonicalUrl: "https://darshdentalclinic.com/locations",
  robots: "index, follow",
  openGraph: {
    title: "Our Locations - Darsh Dental Clinic | 3 Centers in Vadodara",
    description: "Find us at 3 convenient locations across Vadodara. Expert dental care by Dr. Dhiraj Nayak at each center.",
    url: "https://darshdentalclinic.com/locations",
    type: "website",
    siteName: "Darsh Dental Clinic",
    images: [
      {
        url: "/og-locations-darsh-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Darsh Dental Clinic Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darsh Dental Clinic - 3 Locations",
    description: "Visit us at Karelibaug, VIP Road, or Ajwa Road. Expert dental care by Dr. Dhiraj Nayak.",
    images: ["/og-locations-darsh-clinic.jpg"],
  },
};

export default function LocationsLayout({ children }) {
  return <>{children}</>;
}
