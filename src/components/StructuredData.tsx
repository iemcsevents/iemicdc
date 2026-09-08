import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "IEM-ICDC 2026: International Conference on Computational Intelligence, Data Science and Cloud Computing",
    "description": "International Conference on Computational Intelligence, Data Science and Cloud Computing organized by Institute of Engineering & Management, Kolkata",
    "startDate": "2026-03-16T09:00:00+05:30",
    "endDate": "2026-03-18T17:00:00+05:30",
    "eventStatus": "https://schema.org/EventPostponed",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Institute of Engineering & Management, Kolkata",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Salt Lake Electronics Complex, Sector V",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700091",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.5726",
        "longitude": "88.3639"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Institute of Engineering & Management, Kolkata",
      "url": "https://iem.edu.in",
      "logo": "https://www.iemicdc.org/images/iem-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9674032480",
        "contactType": "Conference Registration",
        "email": "icdc@iem.edu.in"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Conference Registration",
      "url": "https://www.iemicdc.org/registrations",
      "price": "0",
      "priceCurrency": "INR",
      "validFrom": "2025-01-01T00:00:00+05:30",
      "validThrough": "2026-03-15T23:59:59+05:30",
      "availability": "https://schema.org/InStock"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Computational Intelligence"
      },
      {
        "@type": "Thing", 
        "name": "Data Science"
      },
      {
        "@type": "Thing",
        "name": "Cloud Computing"
      },
      {
        "@type": "Thing",
        "name": "Artificial Intelligence"
      },
      {
        "@type": "Thing",
        "name": "Machine Learning"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Researchers, Academics, Industry Professionals, Students"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.iemicdc.org"
    },
    "image": [
      "https://www.iemicdc.org/images/iem.jpeg",
      "https://www.iemicdc.org/images/logo3.png",
      "https://www.iemicdc.org/images/venue.jpg"
    ],
    "url": "https://www.iemicdc.org",
    "sameAs": [
      "https://iem.edu.in",
      "https://facebook.com/iemkolkata",
      "https://twitter.com/iemkolkata",
      "https://linkedin.com/school/institute-of-engineering-&-management/"
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Institute of Engineering & Management, Kolkata",
    "alternateName": "IEM Kolkata",
    "url": "https://iem.edu.in",
    "logo": "https://www.iemicdc.org/images/iem-logo.png",
    "foundingDate": "1989",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Salt Lake Electronics Complex, Sector V",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700091",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9674032480",
      "contactType": "General Information",
      "areaServed": "IN",
      "availableLanguage": ["English", "Bengali", "Hindi"]
    },
    "sameAs": [
      "https://facebook.com/iemkolkata",
      "https://twitter.com/iemkolkata",
      "https://linkedin.com/school/institute-of-engineering-&-management/"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IEM-ICDC 2026",
    "alternateName": "International Conference on Computational Intelligence, Data Science and Cloud Computing",
    "url": "https://www.iemicdc.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.iemicdc.org/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  )
}