import {
  siteMetadata,
  dentalServices,
  businessInfo,
} from "./constants/index.js";

export default function sitemap() {
  const baseUrl = siteMetadata.siteUrl;
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
  const serviceRoutes = dentalServices.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const locationRoutes = businessInfo.locations.map((location) => ({
    url: `${baseUrl}/locations/${location.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes, ...locationRoutes];
}
