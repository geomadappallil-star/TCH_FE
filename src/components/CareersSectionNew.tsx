import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Star, 
  ArrowRight, 
  Upload, 
  CheckCircle2, 
  AlertCircle, 
  FileText,
  ShieldCheck,
  Stethoscope,
  Heart,
  Activity
} from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService.js';

export const CareersSectionNew: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Personal Care Worker',
    resumeFileName: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const roles = [
    {
      id: 'ain',
      icon: ShieldCheck,
      title: 'Assistant in Nursing',
      desc: 'Support nurses with personal care and everyday client wellbeing.'
    },
    {
      id: 'pcw',
      icon: Heart,
      title: 'Personal Care Worker',
      desc: 'Help clients with personal care, cleaning and community access.'
    },
    {
      id: 'ot',
      icon: Stethoscope,
      title: 'Occupational Therapist',
      desc: 'Build client independence through assessments, equipment and home modifications.'
    },
    {
      id: 'physio',
      icon: Activity,
      title: 'Physiotherapist',
      desc: 'Improve client mobility, strength and balance with home-based therapy.'
    },
    {
      id: 'rn',
      icon: ShieldCheck,
      title: 'Registered Nurse',
      desc: 'Deliver in-home clinical care, including medications, wounds and monitoring.'
    }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resumeFileName: e.target.files![0].name }));
    }
  };

  const handleSmoothJump = (e: React.MouseEvent<HTMLAnchorElement>, href: string, roleTitle?: string) => {
    e.preventDefault();
    if (roleTitle) {
      setFormData(prev => ({ ...prev, position: roleTitle }));
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMessage('Please provide your full name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await submitEnquiry({
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        suburb: 'Townsville / Regional QLD',
        service: `Career Application: ${formData.position}`,
        enquiryType: 'Careers Expression of Interest',
        message: `Position of Interest: ${formData.position}\nAttached Resume Name: ${formData.resumeFileName || 'Not attached'}\nCandidate Contact: ${formData.email} | ${formData.phone}`
      });

      if (res.success) {
        setSubmitSuccess(res.referenceId || 'EOI-RECEIVED');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: 'Personal Care Worker',
          resumeFileName: ''
        });
      } else {
        setErrorMessage('Could not process application right now. Please email admin@tchservices.com.au directly.');
      }
    } catch (err) {
      setErrorMessage('Connection error. Please email admin@tchservices.com.au.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="relative z-10 pb-16 md:pb-24 border-t border-[#EADFCB]">
      
      {/* 1. Careers Hero with We Are Hiring Background */}
      <div className="relative w-full overflow-hidden border-b border-[#EADFCB] py-16 md:py-24 mb-20 md:mb-28">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 filter saturate-110"
          style={{ backgroundImage: `url('./images/we-are-hiring.jpg')` }}
          aria-hidden="true"
        />
        {/* Semi-transparent Glass Gradient Wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA]/96 via-[#FBF5EA]/90 to-[#FBF5EA]/70 lg:bg-gradient-to-r lg:from-[#FBF5EA]/96 lg:via-[#FBF5EA]/88 lg:to-[#FBF5EA]/65 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D] bg-white/80 px-3 py-1 rounded-full border border-[#B5651D]/20 inline-block backdrop-blur-xs">
                Careers
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47] leading-tight">
                Work local. Make a real difference.
              </h2>
              <p className="text-lg text-[#16272C] font-semibold leading-relaxed max-w-xl">
                We hire local people in every community we serve, from Townsville to Mount Isa. Join a friendly team that backs you and puts clients first.
              </p>

              {/* Chips */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white text-xs font-bold text-[#0B5563] shadow-xs">
                  <MapPin className="w-4 h-4 text-[#0B5563]" /> Work close to home
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white text-xs font-bold text-[#0B5563] shadow-xs">
                  <Users className="w-4 h-4 text-[#0B5563]" /> Supportive local team
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white text-xs font-bold text-[#0B5563] shadow-xs">
                  <Star className="w-4 h-4 text-[#0B5563]" /> Meaningful work
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="#eoi"
                  onClick={(e) => handleSmoothJump(e, '#eoi')}
                  className="btn-base btn-mango text-sm sm:text-base px-6 py-3.5 shadow-md flex items-center gap-2 group inline-flex"
                >
                  <span>Express your interest</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#F4A62A]/25 to-[#0B5563]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px_120px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="./images/careers-team-smiling.jpg" 
                    alt="Smiling TCH support team members in uniform" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">Join Our Local Crew</span>
                    <p className="text-[11px] text-[#4A5A60]">Flexible shifts, above-award rates, and clinical mentorship.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Positions Available (5 Cards) */}
      <div className="w-full bg-white/70 backdrop-blur-xl border-y border-[#EADFCB] py-16 md:py-24 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-2 max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
              Positions available
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47]">
              Roles we&#8217;re hiring for.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div 
                  key={role.id}
                  className="glass-panel p-6 flex flex-col gap-3 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#E3F1F1] flex items-center justify-center text-[#0B5563] flex-shrink-0 group-hover:bg-[#0B5563] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A3D47]">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[#4A5A60] leading-relaxed flex-grow">
                    {role.desc}
                  </p>
                  <a
                    href="#eoi"
                    onClick={(e) => handleSmoothJump(e, '#eoi', role.title)}
                    className="font-bold text-sm text-[#0B5563] flex items-center gap-1.5 mt-auto pt-3 group-hover:gap-2.5 transition-all"
                  >
                    <span>Express interest</span>
                    <ArrowRight className="w-4 h-4 text-[#0B5563]" />
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-[#4A5A60] mt-8 text-center sm:text-left">
            * All roles require a current NDIS Worker Screening Check, CPR/First Aid, and right to work in Australia.
          </p>

        </div>
      </div>

      {/* 3. Expression of Interest Form (#eoi) with Applicant Background */}
      <div className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Image behind mat card */}
        <div 
          className="absolute inset-0 bg-cover bg-[right_top] sm:bg-center bg-no-repeat opacity-45 filter saturate-110"
          style={{ backgroundImage: `url('./images/eoi-applicant-profile.jpg')` }}
          aria-hidden="true"
        />
        {/* Ambient Frosted Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EA]/95 via-[#FBF5EA]/85 to-[#FBF5EA]/50 backdrop-blur-[2px]" />

        <div id="eoi" className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 border-2 border-white/80 shadow-2xl space-y-6 bg-white/90 backdrop-blur-xl">
            
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D] bg-white/80 px-3 py-1 rounded-full border border-[#B5651D]/20 inline-block backdrop-blur-xs">
                Expression of interest
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
                Keen to join us? Tell us a bit about you.
              </h3>
              <p className="text-sm text-[#4A5A60]">
                Submissions go straight to our recruitment team at <strong>admin@tchservices.com.au</strong>.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Expression of Interest Received</span>
                </div>
                <p className="text-sm">
                  Thank you, {formData.fullName || 'there'}! We have received your expression of interest (Ref: <strong>{submitSuccess}</strong>). Our team will review your qualifications and reach out for a casual interview.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="btn-base btn-teal text-xs px-4 py-2 mt-2"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                  Full name *
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jessica Cooper"
                    className="glass-input text-sm"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Email address *
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jessica@example.com"
                      className="glass-input text-sm"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Phone number *
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0400 987 654"
                      className="glass-input text-sm"
                    />
                  </label>
                </div>

                <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                  Role of interest
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="glass-input text-sm bg-white"
                  >
                    <option>Personal Care Worker</option>
                    <option>Assistant in Nursing</option>
                    <option>Registered Nurse</option>
                    <option>Occupational Therapist</option>
                    <option>Physiotherapist</option>
                    <option>Domestic Cleaner & Yard Care</option>
                  </select>
                </label>

                {/* Resume File Upload Box */}
                <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5 cursor-pointer">
                  Upload your resume (PDF or Word)
                  <div className="border-2 border-dashed border-[#7FB7B0] rounded-2xl p-5 bg-[#F3FAF9] hover:bg-[#E3F1F1] transition-colors flex items-center justify-center gap-3 text-[#0B5563] text-sm font-semibold">
                    <Upload className="w-5 h-5 text-[#0B5563]" />
                    <span>{formData.resumeFileName || 'Choose a file (PDF or Word)'}</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </div>
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-base btn-mango text-sm sm:text-base px-7 py-3.5 shadow-md flex items-center gap-2 group disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

              </form>
            )}

          </div>
        </div>
      </div>

    </section>
  );
};
