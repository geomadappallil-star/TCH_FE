import React, { useState } from 'react';
import { X, Phone, Mail, Building2, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService.js';

interface UnitEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnitEnquiryModal: React.FC<UnitEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    unitType: '1-Bedroom Unit',
    fundingType: 'NDIS Plan-managed',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const result = await submitEnquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        suburb: 'Townsville',
        enquiryType: 'accommodation',
        service: `1 & 2-Bedroom Accommodation (${formData.unitType})`,
        fundingType: formData.fundingType,
        message: `[ACCOMMODATION ENQUIRY] Unit Type: ${formData.unitType} | Funding: ${formData.fundingType} | Details: ${formData.message}`
      });

      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMsg('Could not submit enquiry automatically. Please call 0431 430 905 or email admin@tchservices.com.au.');
      }
    } catch (err: any) {
      setErrorMsg('An error occurred. Please contact us directly at admin@tchservices.com.au or 0431 430 905.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-[#FBF5EA] rounded-3xl p-6 sm:p-8 border border-[#0B5563]/20 shadow-2xl animate-fadeInFromBottom">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#1E2B30]/70 hover:text-[#1E2B30] hover:bg-black/5 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4A62A]/20 text-[#1E2B30] text-xs font-bold mb-2">
            <Building2 className="w-3.5 h-3.5 text-[#F4A62A]" />
            <span>Accommodation Available Now</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
            1 &amp; 2-Bedroom Units in Townsville
          </h3>
          <p className="text-[#1E2B30]/80 text-sm mt-1.5 leading-relaxed font-sans">
            Home and living support with units available for participants to live independently.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-heading font-bold text-2xl text-[#0A3D47]">
              Enquiry Received!
            </h4>
            <p className="text-sm text-[#1E2B30]/80 max-w-md mx-auto">
              Thank you. Our Townsville accommodation coordinator will be in touch shortly to discuss unit availability and arrange an inspection.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="btn-mango"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-2 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full form-control-48"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0400 000 000"
                  className="w-full form-control-48"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full form-control-48"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Unit Preference
                </label>
                <select
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  className="w-full form-control-48"
                >
                  <option value="1-Bedroom Unit">1-Bedroom Unit</option>
                  <option value="2-Bedroom Unit">2-Bedroom Unit</option>
                  <option value="Either / Unsure">Either / Need Advice</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Funding Arrangement
                </label>
                <select
                  value={formData.fundingType}
                  onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                  className="w-full form-control-48"
                >
                  <option value="NDIS Plan-managed">NDIS Plan-managed</option>
                  <option value="NDIS Self-managed">NDIS Self-managed</option>
                  <option value="Private Funding">Private</option>
                  <option value="Other / Exploring Options">Other / Unsure</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                Any specific accessibility or timing requirements?
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Preferred move-in timeframe, wheelchair access needs, pets, etc..."
                className="w-full rounded-xl border border-[#D9CEBA] bg-white p-3 text-sm focus:outline-none focus:border-[#0B5563]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#1E2B30]/70 text-center sm:text-left">
                Direct coordinator: <a href="tel:0431430905" className="font-bold text-[#0A3D47] underline">0431 430 905</a>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-mango w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending...' : 'Submit Unit Enquiry'}
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
