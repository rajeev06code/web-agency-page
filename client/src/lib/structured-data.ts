export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "pixelBuilders",
  "url": "https://pixelbuilders.in",
  "logo": "https://pixelbuilders.in/logo.png",
  "description": "From Pixels to Platforms - Web & Mobile Development Agency",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.facebook.com/pixelbuilders",
    "https://twitter.com/pixelbuilders",
    "https://www.linkedin.com/company/pixelbuilders"
  ]
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "pixelBuilders",
  "url": "https://pixelbuilders.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pixelbuilders.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web & Mobile Development Services",
  "provider": {
    "@type": "Organization",
    "name": "pixelBuilders"
  },
  "serviceType": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing"
  ],
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Website Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design"
        }
      }
    ]
  }
}); 