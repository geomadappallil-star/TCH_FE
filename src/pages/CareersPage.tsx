import React, { useState } from 'react';
import { 
  MapPin, 
  Users, 
  Heart, 
  ArrowRight, 
  Briefcase, 
  Stethoscope, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  FileText
} from 'lucide-react';
import { CommonCtaBanner } from '../components/CommonCtaBanner.js';
import { submitEnquiry } from '../services/enquiryService.js';

export const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredRole: 'Personal Care Worker',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string } | null>(null);

  const roles = [
    {
      title: 'Assistant in Nursing',
      icon: Sparkles,
      iconBg: 'bg-[#E3EFF1] text-[#0B5563]',
      desc: 'Support nurses with personal care and everyday client wellbeing.'
    },
    {
      title: 'Personal Care Worker',
      icon: Heart,
      iconBg: 'bg-[#FDF3E3] text-[#F4A62A]',
      desc: 'Help clients with personal care, cleaning and community access.'
    },
    {
      title: 'Occupational Therapist',
      icon: Stethoscope,
      iconBg: 'bg-[#E8F3E6] text-[#0B5563]',
      desc: 'Build client independence through assessments, equipment and home modifications.'
    },
    {
      title: 'Physiotherapist',
      icon: Activity,
      iconBg: 'bg-[#EAEFF8] text-[#2D3359]',
      desc: 'Improve client mobility, strength and balance with home-based therapy.'
    },
    {
      title: 'Registered Nurse',
      icon: ShieldCheck,
      iconBg: 'bg-[#E4F3ED] text-[#0B5563]',
      desc: 'Deliver in-home clinical care, including medications, wounds and monitoring.'
    }
  ];

  const scrollToEoi = (roleName?: string) => {
    if (roleName) {
      setFormData(prev => ({ ...prev, preferredRole: roleName }));
    }
    const el = document.getElementById('eoi-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const fullMessage = [
        `[CAREERS EXPRESSION OF INTEREST]`,
        `Applicant Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Role Interested: ${formData.preferredRole}`,
        `Attached Resume: ${resumeFile ? resumeFile.name : 'Not attached / to follow via email'}`
      ].join('\n');

      const result = await submitEnquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        suburb: 'Townsville',
        enquiryType: 'careers_eoi',
        service: `Careers: ${formData.preferredRole}`,
        message: fullMessage
      });

      if (result.success) {
        setFeedback({
          success: true,
          message: 'Thank you for your interest in joining TCH Support Services. Our recruitment team will review your application and be in touch soon!'
        });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          preferredRole: 'Personal Care Worker'
        });
        setResumeFile(null);
      } else {
        setFeedback({
          success: false,
          message: 'Could not send EOI automatically. Please email your resume directly to admin@tchservices.com.au or hr@tchservices.com.au.'
        });
      }
    } catch (err: any) {
      setFeedback({
        success: false,
        message: 'A network error occurred. Please send your resume directly to admin@tchservices.com.au.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block">
              CAREERS
            </span>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A3D47] tracking-tight leading-[1.1]">
              Work local. Make a <br className="hidden sm:inline" />real difference.
            </h1>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed max-w-2xl font-sans">
              We hire local people in every community we serve, from Townsville to Mount Isa. Join a friendly team that backs you and puts clients first.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-[#0A3D47] pt-1">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs">
                <MapPin className="w-4 h-4 text-[#F4A62A] fill-[#F4A62A]" />
                <span>Work close to home</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs">
                <Users className="w-4 h-4 text-[#0B5563]" />
                <span>Supportive local team</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs">
                <Heart className="w-4 h-4 text-[#F4A62A] fill-[#F4A62A]" />
                <span>Meaningful work</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => scrollToEoi()}
                className="btn-mango group"
              >
                <span>Express your interest</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Team Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-xl bg-white p-2">
              <img
                src="/images/careers-team-smiling.jpg"
                alt="Smiling TCH workers in uniform outdoors in North Queensland"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/careers-bg.jpg';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A3D47]/85 backdrop-blur-md text-white p-3 rounded-xl text-xs font-medium border border-white/20">
                <span className="font-bold text-[#F4A62A] block">Join the TCH Family</span>
                Real staff, local settings across North Queensland.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POSITIONS AVAILABLE */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
            POSITIONS AVAILABLE
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A3D47] tracking-tight">
            Roles we’re hiring for.
          </h2>
        </div>

        {/* 5 Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className="bg-white rounded-3xl p-6 border border-[#0B5563]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${role.iconBg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A3D47] leading-snug">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[#1E2B30]/80 leading-relaxed font-sans">
                    {role.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => scrollToEoi(role.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5563] group-hover:text-[#F4A62A] transition-colors"
                  >
                    <span>Express interest</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs sm:text-sm text-[#0A3D47] font-semibold">
          All roles require a current NDIS Worker Screening Check.
        </div>
      </section>

      {/* 3. EXPRESSION OF INTEREST FORM */}
      <section id="eoi-form" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0B5563]/15 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block">
              EXPRESSION OF INTEREST
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47] tracking-tight">
              Keen to join us? Tell us a bit about you.
            </h2>
            <p className="text-xs sm:text-sm text-[#1E2B30]/75">
              Applications are reviewed by our local Townsville coordination team.
            </p>
          </div>

          {feedback && (
            <div
              className={`p-5 rounded-2xl text-sm font-sans flex items-start gap-3.5 ${
                feedback.success
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-red-50 border border-red-200 text-red-900'
              }`}
            >
              {feedback.success ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="space-y-1">
                <p className="font-bold">{feedback.success ? 'Application Sent!' : 'Error'}</p>
                <p className="text-xs sm:text-sm leading-relaxed">{feedback.message}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                Full name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Smith"
                className="w-full form-control-48"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Email *
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Phone *
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
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                Role of Interest
              </label>
              <select
                value={formData.preferredRole}
                onChange={(e) => setFormData({ ...formData, preferredRole: e.target.value })}
                className="w-full form-control-48"
              >
                <option value="Personal Care Worker">Personal Care Worker</option>
                <option value="Assistant in Nursing (AIN)">Assistant in Nursing (AIN)</option>
                <option value="Occupational Therapist">Occupational Therapist</option>
                <option value="Physiotherapist">Physiotherapist</option>
                <option value="Registered Nurse (RN)">Registered Nurse (RN)</option>
                <option value="General Domestic Cleaner">Domestic Cleaner</option>
                <option value="Gardener / Maintenance">Gardener / Maintenance</option>
              </select>
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                Upload your resume
              </label>
              <div className="relative border-2 border-dashed border-[#0B5563]/30 rounded-2xl p-6 text-center hover:border-[#0B5563] transition-colors cursor-pointer bg-[#FBF5EA]/50">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xs text-[#0B5563]">
                    <Upload className="w-5 h-5" />
                  </div>
                  {resumeFile ? (
                    <div className="flex items-center gap-2 text-sm font-bold text-[#0A3D47]">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)</span>
                    </div>
                  ) : (
                    <>
                      <span className="text-sm font-bold text-[#0A3D47]">
                        Choose a file (PDF or Word)
                      </span>
                      <span className="text-xs text-[#1E2B30]/60">
                        Max file size 10MB
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-mango w-full text-center group"
              >
                <span>{isSubmitting ? 'Sending Application...' : 'Submit'}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-xs text-center text-[#1E2B30]/65 pt-2">
              Alternatively, email your CV and cover letter directly to{' '}
              <a href="mailto:admin@tchservices.com.au" className="font-bold text-[#0A3D47] underline">
                admin@tchservices.com.au
              </a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};
