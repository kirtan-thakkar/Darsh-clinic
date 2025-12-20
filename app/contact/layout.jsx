export const metadata = {
  title: "Contact Darsh Dental Clinic - Book Your Appointment with Dr. Dhiraj Nayak",
  description: "Contact Darsh Dental Clinic in Vadodara. Book appointments, reach out to Dr. Dhiraj Nayak. Available across 3 locations. Emergency dental care 24/7.",
  keywords: "contact darsh dental clinic, book dental appointment, dr dhiraj nayak, dental emergency, dentist appointment vadodara",
  canonicalUrl: "https://darshdentalclinic.com/contact",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Darsh Dental Clinic | Dr. Dhiraj Nayak",
    description: "Get in touch with Darsh Dental Clinic. 24/7 emergency dental care, quick appointment booking, and expert consultations with Dr. Dhiraj Nayak.",
    url: "https://darshdentalclinic.com/contact",
    type: "website",
    siteName: "Darsh Dental Clinic",
    images: [
      {
        url: "/og-contact-darsh-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Darsh Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Darsh Dental Clinic - Book Appointment",
    description: "Emergency dental care available 24/7. Contact Dr. Dhiraj Nayak's clinic.",
    images: ["/og-contact-darsh-clinic.jpg"],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
