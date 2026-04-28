import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, MessageCircle, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 pt-20">
      <SEO title="Page Not Found | Bizlink" />
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600 animate-pulse">
          <AlertCircle size={48} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          The page you are looking for may have been moved, deleted, or does not exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="flex-1">
            <Button className="w-full h-14 rounded-xl bg-slate-900 hover:bg-slate-800 text-white gap-2 font-bold shadow-lg shadow-slate-200">
              <Home size={20} />
              Back to Home
            </Button>
          </Link>
          <a 
            href="https://wa.me/971547486000?text=Hi%20Bizlink%2C%20I%20got%20lost%20on%20your%20website.%20I%20need%20help%20with%20business%20setup." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1"
          >
            <Button variant="outline" className="w-full h-14 rounded-xl border-slate-200 text-slate-700 gap-2 font-bold hover:bg-slate-50">
              <MessageCircle size={20} />
              Chat Support
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
