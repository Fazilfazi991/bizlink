import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import BusinessSetupDubai from "@/pages/BusinessSetupDubai";
import MainlandCompanyFormation from "@/pages/MainlandCompanyFormation";
import FreeZoneCompanySetup from "@/pages/FreeZoneCompanySetup";
import ProServicesPage from "@/pages/ProServicesPage";
import TradeLicenseDubai from "@/pages/TradeLicenseDubai";
import VisaServicesDubai from "@/pages/VisaServicesDubai";
import DocumentClearingDubai from "@/pages/DocumentClearingDubai";
import ContactPage from "@/pages/ContactPage";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-slate-50">
            <Navigation />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/business-setup-dubai" component={BusinessSetupDubai} />
                <Route path="/mainland-company-formation" component={MainlandCompanyFormation} />
                <Route path="/free-zone-company-setup" component={FreeZoneCompanySetup} />
                <Route path="/pro-services-dubai" component={ProServicesPage} />
                <Route path="/trade-license-dubai" component={TradeLicenseDubai} />
                <Route path="/visa-services-dubai" component={VisaServicesDubai} />
                <Route path="/document-clearing-dubai" component={DocumentClearingDubai} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
