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
import OffshoreCompanySetup from "@/pages/OffshoreCompanySetup";
import ProServicesPage from "@/pages/ProServicesPage";
import TradeLicenseDubai from "@/pages/TradeLicenseDubai";
import VisaServicesDubai from "@/pages/VisaServicesDubai";
import DocumentClearingDubai from "@/pages/DocumentClearingDubai";
import CostEstimatorPage from "@/pages/CostEstimatorPage";
import AccountingServicesPage from "@/pages/AccountingServicesPage";
import EmiratesIDServices from "@/pages/EmiratesIDServices";
import LabourImmigrationServices from "@/pages/LabourImmigrationServices";
import LicenseRenewalDubai from "@/pages/LicenseRenewalDubai";
import BankAccountAssistanceDubai from "@/pages/BankAccountAssistanceDubai";
import VATCorporateTaxDubai from "@/pages/VATCorporateTaxDubai";
import ContactPage from "@/pages/ContactPage";
import DocumentAttestationServices from "@/pages/DocumentAttestationServices";
import DubaiCourtServices from "@/pages/DubaiCourtServices";
import InsuranceServices from "@/pages/InsuranceServices";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import ScrollToTop from "@/components/ScrollToTop";
import NotFoundPage from "@/pages/NotFoundPage";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <div className="min-h-screen bg-slate-50 pb-20 lg:pb-0">
            <Navigation />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/business-setup-dubai" component={BusinessSetupDubai} />
                <Route path="/mainland-company-formation" component={MainlandCompanyFormation} />
                <Route path="/free-zone-company-setup" component={FreeZoneCompanySetup} />
                <Route path="/offshore-company-setup-dubai" component={OffshoreCompanySetup} />
                <Route path="/pro-services-dubai" component={ProServicesPage} />
                <Route path="/trade-license-dubai" component={TradeLicenseDubai} />
                <Route path="/visa-services-dubai" component={VisaServicesDubai} />
                <Route path="/document-clearing-dubai" component={DocumentClearingDubai} />
                <Route path="/cost-estimator" component={CostEstimatorPage} />
                <Route path="/accounting-services-dubai" component={AccountingServicesPage} />
                <Route path="/emirates-id-services-dubai" component={EmiratesIDServices} />
                <Route path="/labour-immigration-services-dubai" component={LabourImmigrationServices} />
                <Route path="/license-renewal-dubai" component={LicenseRenewalDubai} />
                <Route path="/bank-account-assistance-dubai" component={BankAccountAssistanceDubai} />
                <Route path="/vat-corporate-tax-dubai" component={VATCorporateTaxDubai} />
                <Route path="/document-attestation-dubai" component={DocumentAttestationServices} />
                <Route path="/dubai-court-services" component={DubaiCourtServices} />
                <Route path="/insurance-services-uae" component={InsuranceServices} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
            <Footer />
            <WhatsAppButton />
            <MobileStickyCTA />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
