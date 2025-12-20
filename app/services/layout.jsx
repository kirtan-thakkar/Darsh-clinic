export const metadata = {
  title: "Dental Services in Vadodara - Dr. Dhiraj Nayak | Darsh Dental Clinic",
  description: "Comprehensive dental services by Dr. Dhiraj Nayak. Dental implants, root canals, cosmetic dentistry, orthodontics, oral surgery, and more at Darsh Dental Clinic.",
  keywords: "dental services, root canal treatment, dental implants, cosmetic dentistry, orthodontics, oral surgery, teeth whitening, periodontal care",
  canonicalUrl: "https://darshdentalclinic.com/services",
  robots: "index, follow",
  openGraph: {
    title: "Complete Dental Services - Dr. Dhiraj Nayak | Darsh Dental Clinic",
    description: "Expert dental treatments from routine checkups to advanced surgical procedures. State-of-the-art technology and compassionate care.",
    url: "https://darshdentalclinic.com/services",
    type: "website",
    siteName: "Darsh Dental Clinic",
    images: [
      {
        url: "/og-services-darsh-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Dental Services - Darsh Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services - Dr. Dhiraj Nayak",
    description: "Complete dental care including implants, root canals, orthodontics, and cosmetic dentistry.",
    images: ["/og-services-darsh-clinic.jpg"],
  },
};

export default function ServicesLayout({ children }) {
  return <>{children}</>;
}
