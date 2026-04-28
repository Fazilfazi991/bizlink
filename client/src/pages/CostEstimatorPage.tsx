import { useState } from "react";
import PageHero from "@/components/PageHero";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Calculator, MessageCircle } from "lucide-react";

export default function CostEstimatorPage() {
  const [formData, setFormData] = useState({
    businessType: "",
    jurisdiction: "",
    visasRequired: "",
    officeRequired: "",
    name: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "971547486000";
    const waMessage = `Cost Estimation Inquiry\n\nBusiness Type: ${formData.businessType}\nJurisdiction: ${formData.jurisdiction}\nVisas: ${formData.visasRequired}\nOffice: ${formData.officeRequired}\nName: ${formData.name}\nPhone: ${formData.phone}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <>
      <SEO 
        title="Cost Estimator | Business Setup Dubai Cost | Bizlink"
        description="Estimate your UAE business setup costs instantly. Get a detailed breakdown for mainland and free zone company formation."
      />
      <PageHero 
        title="Business Setup Cost Estimator" 
        subtitle="Get a personalized estimate for your UAE company formation in seconds."
      />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <Calculator size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Estimate Your Investment</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Business Type</label>
                  <Select onValueChange={(v) => setFormData({...formData, businessType: v})}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select Activity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Trading">Trading / Commercial</SelectItem>
                      <SelectItem value="Professional">Professional / Services</SelectItem>
                      <SelectItem value="Industrial">Industrial</SelectItem>
                      <SelectItem value="Ecommerce">E-commerce</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Jurisdiction</label>
                  <Select onValueChange={(v) => setFormData({...formData, jurisdiction: v})}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select Zone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Mainland">Dubai Mainland (DED)</SelectItem>
                      <SelectItem value="Freezone">Free Zone</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Number of Visas</label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 2" 
                    className="h-12 rounded-xl"
                    onChange={(e) => setFormData({...formData, visasRequired: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Office Required?</label>
                  <Select onValueChange={(v) => setFormData({...formData, officeRequired: v})}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select Option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes - Physical">Yes, Physical Office</SelectItem>
                      <SelectItem value="Yes - Virtual">Yes, Virtual / Flexi-desk</SelectItem>
                      <SelectItem value="No">No, Not required</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <hr className="border-slate-200 my-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Your Name</label>
                  <Input 
                    placeholder="Full Name" 
                    className="h-12 rounded-xl"
                    required
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone / WhatsApp</label>
                  <Input 
                    placeholder="+971 50 000 0000" 
                    className="h-12 rounded-xl"
                    required
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded-xl gap-3 shadow-lg shadow-blue-100">
                <MessageCircle size={24} />
                Get Instant Quote via WhatsApp
              </Button>
              <p className="text-center text-xs text-slate-400">
                By submitting, you agree to receive a personalized quote on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
