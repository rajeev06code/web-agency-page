import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import Blog from "@/pages/Blog";
import WebDevelopment from "@/pages/services/WebDevelopment";
import MobileDevelopment from "@/pages/services/MobileDevelopment";
import UIDesign from "@/pages/services/UIDesign";
import MVPDevelopment from "@/pages/services/MVPDevelopment";
import DigitalStrategy from "@/pages/services/DigitalStrategy";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect, useState } from "react";
import { FullPageLoader } from "@/components/ui/loader";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { getOrganizationSchema, getWebSiteSchema, getServiceSchema } from "@/lib/structured-data";

// Structured data for the organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "pixelBuilders",
  "url": "https://pixelbuilders.in/",
  "logo": "https://pixelbuilders.in/logo.png",
  "description": "pixelBuilders - From Pixels to Platforms.",
  "sameAs": [
    "https://www.facebook.com/pixelbuilders",
    "https://twitter.com/pixelbuilders",
    "https://www.linkedin.com/company/pixelbuilders"
  ]
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/blog" component={Blog} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/mobile-development" component={MobileDevelopment} />
      <Route path="/services/ui-design" component={UIDesign} />
      <Route path="/services/mvp-development" component={MVPDevelopment} />
      <Route path="/services/digital-strategy" component={DigitalStrategy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add structured data to the page
    const scripts = [
      { type: 'application/ld+json', data: getOrganizationSchema() },
      { type: 'application/ld+json', data: getWebSiteSchema() },
      { type: 'application/ld+json', data: getServiceSchema() }
    ];

    scripts.forEach(schema => {
      const script = document.createElement('script');
      script.type = schema.type;
      script.text = JSON.stringify(schema.data);
      document.head.appendChild(script);
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      document.head.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        document.head.removeChild(script);
      });
      clearTimeout(timer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {isLoading ? <FullPageLoader /> : <Router />}
          </main>
          <Footer />
          <CookieConsent />
          <Toaster />
          <SpeedInsights />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
