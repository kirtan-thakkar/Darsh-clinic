import Head from 'next/head';
import { siteMetadata, businessInfo } from '../app/constants/index.js';

export default function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  image = siteMetadata.image,
  url = siteMetadata.siteUrl,
  type = 'website'
}) {
  const seoTitle = title ? `${title} | ${businessInfo.name}` : siteMetadata.title;
  const seoDescription = description || siteMetadata.description;
  const seoKeywords = [...siteMetadata.keywords, ...keywords].join(', ');
  const seoImage = image.startsWith('http') ? image : `${siteMetadata.siteUrl}${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={businessInfo.name} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage} />

      {/* Business Info */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Vadodara" />
      <meta name="geo.position" content="22.3039;73.1812" />
      <meta name="ICBM" content="22.3039, 73.1812" />

      {/* Medical Practice Specific */}
      <meta name="medical-specialties" content="General Dentistry, Cosmetic Dentistry, Orthodontics, Oral Surgery" />
      <meta name="service-area" content="Vadodara, Gujarat, India" />
      <meta name="business-hours" content="Mon-Sat 09:30-13:00,16:00-20:00" />
    </Head>
  );
}