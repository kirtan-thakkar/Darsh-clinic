export const metadata = {
  title: "About Darsh Dental Clinic - Meet Dr. Dhiraj Nayak & Our Expert Team",
  description: "Learn about Dr. Dhiraj Nayak and the expert team at Darsh Dental Clinic. 15+ years of excellence in dental care, advanced technology, and compassionate patient treatment in Vadodara.",
  keywords: "about darsh dental clinic, dr dhiraj nayak, dental team, dentist qualifications, dental clinic history, expert dentists vadodara",
  canonicalUrl: "https://darshdentalclinic.com/about",
  robots: "index, follow",
  openGraph: {
    title: "About Darsh Dental Clinic - Dr. Dhiraj Nayak's Vision",
    description: "Discover our story of 15+ years of dental excellence, our team's expertise, and commitment to transforming smiles across Vadodara.",
    url: "https://darshdentalclinic.com/about",
    type: "website",
    siteName: "Darsh Dental Clinic",
    images: [
      {
        url: "/og-about-darsh-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Darsh Dental Clinic Team - Dr. Dhiraj Nayak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Darsh Dental Clinic - Our Team",
    description: "Meet Dr. Dhiraj Nayak and our expert dental team with 15+ years of excellence.",
    images: ["/og-about-darsh-clinic.jpg"],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
