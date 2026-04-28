import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function LeadForm({ title = "Get a Free Consultation" }: { title?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone) {
      setError("Please provide at least your name and phone number.");
      return;
    }

    const phoneNumber = "971547486000";
    const waMessage = `New Website Enquiry\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service || "Not specified"}\nMessage: ${formData.message || "No message provided"}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <Input 
              placeholder="John Doe" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone / WhatsApp</label>
            <Input 
              placeholder="+971 50 000 0000" 
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Service Needed</label>
          <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mainland Company Setup">Mainland Company Setup</SelectItem>
              <SelectItem value="Free Zone Setup">Free Zone Setup</SelectItem>
              <SelectItem value="PRO Services">PRO Services</SelectItem>
              <SelectItem value="Visa Services">Visa Services</SelectItem>
              <SelectItem value="Trade License">Trade License</SelectItem>
              <SelectItem value="Other Inquiry">Other Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Message</label>
          <Textarea 
            placeholder="Tell us about your business goals..." 
            className="min-h-[100px]" 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          Get Free Consultation
        </Button>
      </form>
    </div>
  );
}
