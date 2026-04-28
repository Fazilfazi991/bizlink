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
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function LeadForm({ title = "Get a Free Consultation" }: { title?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.phone) {
      setError("Please provide at least your name and phone number.");
      return;
    }

    setStatus("success");

    const phoneNumber = "971547486000";
    const waMessage = `New Website Enquiry\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service || "Not specified"}\nMessage: ${formData.message || "No message provided"}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

    // Delay redirect to show thank you message
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      // Reset after a bit more time
      setTimeout(() => setStatus("idle"), 2000);
    }, 700);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 min-h-[450px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {status === "idle" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
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
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
            <p className="text-slate-600 mb-6">
              We are opening WhatsApp so our team can assist you faster.
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-0"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-300"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
