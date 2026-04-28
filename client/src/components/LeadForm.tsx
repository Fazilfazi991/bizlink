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

export default function LeadForm({ title = "Get a Free Consultation" }: { title?: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <Input placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone / WhatsApp</label>
            <Input placeholder="+971 50 000 0000" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Service Needed</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mainland">Mainland Company Setup</SelectItem>
              <SelectItem value="freezone">Free Zone Setup</SelectItem>
              <SelectItem value="pro">PRO Services</SelectItem>
              <SelectItem value="visa">Visa Services</SelectItem>
              <SelectItem value="license">Trade License</SelectItem>
              <SelectItem value="other">Other Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Message</label>
          <Textarea placeholder="Tell us about your business goals..." className="min-h-[100px]" />
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-semibold shadow-lg shadow-blue-200">
          Get Free Consultation
        </Button>
      </form>
    </div>
  );
}
