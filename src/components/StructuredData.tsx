export default function StructuredData() {
  const autoDealerSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": "https://www.peelcarsales.com/#autodealer",
    name: "Peel Car Sales",
    alternateName: "Peel Car Sales Mississauga",
    description:
      "Quality used car dealership in Mississauga and Oakville, Ontario. 150+ vehicles in stock. AutoTrader Best Priced Dealer 2024 & 2025. Used SUVs, trucks, sedans. Trade-ins welcome.",
    url: "https://www.peelcarsales.com",
    telephone: "+1-905-678-0048",
    priceRange: "$8,991 - $40,000+",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    image: "https://www.peelcarsales.com/og-image.jpg",
    logo: "https://www.peelcarsales.com/logo.png",
    sameAs: [
      "https://www.facebook.com/peelcarsales",
      "https://instagram.com/peelcarsales.ca",
      "https://www.youtube.com/channel/UCMZFdM2ipXgn5nKzxNA0e7w",
      "https://www.tiktok.com/@peelcarsales.ca",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "2701 Derry Road East",
        addressLocality: "Mississauga",
        addressRegion: "ON",
        postalCode: "L4T 1A2",
        addressCountry: "CA",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "333 Wyecroft Road, Unit 11",
        addressLocality: "Oakville",
        addressRegion: "ON",
        postalCode: "L6K 2H2",
        addressCountry: "CA",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6939,
      longitude: -79.6441,
    },
    areaServed: [
      { "@type": "City", name: "Mississauga" },
      { "@type": "City", name: "Oakville" },
      { "@type": "City", name: "Brampton" },
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Etobicoke" },
      { "@type": "City", name: "North York" },
      { "@type": "City", name: "Burlington" },
      { "@type": "City", name: "Milton" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
      { "@type": "AdministrativeArea", name: "Ontario" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "200",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Om Sharma" },
        datePublished: "2025-01-15",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Amazing experience from start to finish. The team was super helpful and made the process smooth. Highly recommend to anyone looking for a used vehicle.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jaspreet Singh" },
        datePublished: "2025-02-10",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Looked at a car on Monday and by Thursday I was able to drive it home. Fast and efficient service, I would recommend anybody to get their car there!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Akshit Chabba" },
        datePublished: "2025-03-05",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "The service was excellent. Been to dealerships before but this was the best one so far. The team is very generous and takes the customer's word seriously.",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Used Cars for Sale — Mississauga & Oakville",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Used SUVs",
          description: "Affordable used SUVs for sale in Mississauga and Oakville, GTA Ontario",
        },
        {
          "@type": "OfferCatalog",
          name: "Used Trucks",
          description: "Quality used trucks for sale near Toronto, Brampton, and Burlington",
        },
        {
          "@type": "OfferCatalog",
          name: "Used Sedans",
          description: "Reliable used sedans from Honda, Toyota, Hyundai and more in the GTA",
        },
      ],
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Used Car Sales",
          description:
            "150+ quality used cars, SUVs, and trucks for sale at our Mississauga and Oakville showrooms. Every vehicle comes with a complimentary CarFax report.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vehicle Trade-In",
          description:
            "We buy your car — any condition, any mileage. Get a cash offer within 24 hours. Sell outright or trade in at our Mississauga or Oakville locations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Finder Service",
          description:
            "Tell us what vehicle you're looking for and we'll alert you when it arrives on our lot. Serving Mississauga, Oakville, Brampton, Toronto, and the GTA.",
        },
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kinds of used vehicles does Peel Car Sales have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Peel Car Sales carries a wide selection of 150+ used cars, SUVs, trucks, and sedans from popular brands like Honda, Toyota, Ford, Hyundai, and Mercedes-Benz. Our inventory changes regularly — browse online or visit either Mississauga or Oakville showroom to see the latest arrivals.",
        },
      },
      {
        "@type": "Question",
        name: "Do you have used cars under $15,000 in Mississauga or Oakville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We carry value-priced vehicles starting well under $15,000. Our inventory includes vehicles starting from $8,991. Browse our full inventory of 150+ used cars and filter by price to find options in your budget at our Mississauga and Oakville dealerships.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sell my car without buying one from Peel Car Sales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We buy cars outright and will give you a cash offer within 24 hours with no obligation to purchase anything from us. Text us a photo of your car on WhatsApp at 647-678-7778 to get started.",
        },
      },
      {
        "@type": "Question",
        name: "Does Peel Car Sales serve Brampton, Toronto, and Oakville?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — our two locations in Mississauga (2701 Derry Road East) and Oakville (333 Wyecroft Road, Unit 11) serve the entire GTA including Brampton, Etobicoke, North York, Toronto, Burlington, and Milton.",
        },
      },
      {
        "@type": "Question",
        name: "Do vehicles from Peel Car Sales come with a warranty?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, warranty options are available on most vehicles. Our service centre also provides ongoing maintenance. Ask our sales team for specific warranty details on the vehicle you're interested in.",
        },
      },
      {
        "@type": "Question",
        name: "Can I view or buy a used car online or virtually?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer virtual test drives and vehicle walkarounds via FaceTime, WhatsApp video, or Zoom. Call or text 647-678-7778 to book a virtual tour of any vehicle in our Mississauga or Oakville inventory.",
        },
      },
      {
        "@type": "Question",
        name: "What is Peel Car Sales referral program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Refer a friend or family member who buys a car from us and earn cash. Visit our referral program page for current details and how to participate.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Peel Car Sales",
    url: "https://www.peelcarsales.com",
    logo: "https://www.peelcarsales.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-905-678-0048",
        contactType: "sales",
        areaServed: "CA",
        availableLanguage: ["English", "Hindi", "Punjabi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-647-678-7778",
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "CA",
      },
    ],
    award: [
      "AutoTrader Best Priced Dealer 2024",
      "AutoTrader Best Priced Dealer 2025",
      "CarGurus Top Rated Dealer 2024",
      "CarGurus Top Rated Dealer 2025",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.peelcarsales.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Used Cars",
        item: "https://www.peelcarsales.com/used-cars",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Trade-In",
        item: "https://www.peelcarsales.com/trade-in",
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Peel Car Sales",
    url: "https://www.peelcarsales.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.peelcarsales.com/used-cars?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoDealerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
