import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// New Page Imports
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BusinessSetupDubai from "./pages/BusinessSetupDubai";
import MainlandCompanyFormation from "./pages/MainlandCompanyFormation";
import FreeZoneCompanySetup from "./pages/FreeZoneCompanySetup";
import ProServicesPage from "./pages/ProServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="app-wrapper">
            <Navigation />
            <main>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={AboutPage} />
                <Route path="/services" component={ServicesPage} />
                <Route path="/business-setup-dubai" component={BusinessSetupDubai} />
                <Route path="/mainland-company-formation" component={MainlandCompanyFormation} />
                <Route path="/free-zone-company-setup" component={FreeZoneCompanySetup} />
                <Route path="/pro-services" component={ProServicesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
