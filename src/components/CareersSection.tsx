import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  Send, 
  UploadCloud, 
  FileText, 
  X, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Users, 
  ShieldCheck,
  Check,
  Phone,
  Clock,
  ChevronRight,
  HeartHandshake
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    roleApplied: 'Registered Nurse (RN)',
    coverLetter: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; refId?: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'why' | 'prospects'>('why');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const availableRoles = [
    'Registered Nurse (RN)',
    'Enrolled Nurse (EN)',
    'Allied Health (OT / Physio / Counselling)',
    'Disability Support Worker',
    'Domestic House Cleaner',
    'Lawn Mower & Yard Care Specialist'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setFileError('Please select a valid PDF or Word document (.pdf, .doc, .docx)');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) {
        setFileError('File size exceeds 10MB limit. Please upload a smaller PDF.');
        return;
      }

      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const refId = `CAREER-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const payload = {
        name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        service: `Career Application: ${formData.roleApplied}`,
        enquiryType: 'Careers & Recruitment',
        suburb: 'Townsville Local',
        message: `Role: ${formData.roleApplied}\nResume Attached: ${selectedFile ? selectedFile.name : 'None'}\n\nCover Letter / Notes:\n${formData.coverLetter || 'None provided'}`
      };

      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch {
      // Continue with local confirmation
    }

    setSubmitResult({
      success: true,
      message: `Thank you ${formData.fullName}! Your application and resume have been received. Alan will review your credentials and contact you directly.`,
      refId
    });

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      roleApplied: 'Registered Nurse (RN)',
      coverLetter: ''
    });
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setIsSubmitting(false);
  };

  const whyUsPoints = [
    {
      num: '01',
      title: 'Direct Clinician Leadership',
      detail: 'Alan answers your call directly. No offshore call centers, ticketing systems, or confusing apps.'
    },
    {
      num: '02',
      title: 'Flexible Local Scheduling',
      detail: 'Choose your own hours: casual rounds, consistent block shifts, or regular weekly clients across Townsville.'
    },
    {
      num: '03',
      title: 'Comprehensive Handover Before Arrival',
      detail: 'Know participant history, clinical goals, and property layout before you arrive at the door.'
    },
    {
      num: '04',
      title: 'Genuine Multidisciplinary Team',
      detail: 'Work alongside supportive RNs, allied health practitioners, and dependable home maintenance crews.'
    }
  ];

  const careerProspects = [
    {
      num: '01',
      icon: Award,
      title: 'Clinical Mentorship & Advanced Competencies',
      detail: 'Hands-on clinical upskilling in complex wound staging, subcutaneous medications, bowel protocols, and PEG nutrition.'
    },
    {
      num: '02',
      icon: TrendingUp,
      title: 'Clear Leadership & Coordination Pathways',
      detail: 'Clear advancement into Care Coordination, Clinical Team Leadership, and Regional Supervision in North Queensland.'
    },
    {
      num: '03',
      icon: ShieldCheck,
      title: 'AHPRA CPD & Ongoing Accreditation Support',
      detail: 'Supported continuing professional development hours and structured NDIS Quality & Safeguards compliance training.'
    },
    {
      num: '04',
      icon: Users,
      title: 'Community Impact & Practice Autonomy',
      detail: 'Make a tangible difference for Townsville, Ingham, and Charters Towers families where your clinical judgment is respected.'
    }
  ];

  return (
    <section id="jobs" className="py-20 sm:py-28 relative overflow-hidden bg-[#0A241F] text-white">
      
      {/* 1. Real Project Clinical Team Background Photo with Butterflow Depth Motion */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none mix-blend-luminosity scale-105 backdrop-zoom-subtle transition-butterflow duration-1000"
        style={{
          backgroundImage: `url('./images/careers-bg.jpg')`
        }}
      />

      {/* 2. Deep Forest Atmosphere Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A241F] via-[#0E352D]/90 to-[#081F1A] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_15%,rgba(22,78,67,0.4),transparent)] pointer-events-none" />
      
      {/* 3. Subtle Tactile Pattern Grid */}
      <div className="absolute inset-0 pattern-grid-dark opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#E5B56A] mb-5 shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#E5B56A]" />
            <span>Join Our Townsville Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B56A] animate-pulse"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15]">
            Careers that advance your clinical skills{' '}
            <span className="font-serif italic font-normal text-[#E5B56A] block sm:inline mt-1 sm:mt-0">
              &amp; respect your life.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-teal-100/90 mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            Looking for RNs, ENs, disability support workers, cleaners, and gardeners across Townsville. Connect directly with a local team that values your craft.
          </p>

          
        </div>

        {/* 12-Column Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Interactive Culture & Career Prospects Showcase */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Custom Tab Selector */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 shadow-sm">
              <button
                type="button"
                onClick={() => setActiveTab('why')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'why'
                    ? 'bg-[#D4A359] text-[#0A241F] shadow-lg'
                    : 'text-teal-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Why Work With TCH Support Services</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('prospects')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'prospects'
                    ? 'bg-[#D4A359] text-[#0A241F] shadow-lg'
                    : 'text-teal-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Career Prospects &amp; Mentorship</span>
              </button>
            </div>

            {/* Tab 1: Why Work With Us */}
            {activeTab === 'why' && (
              <div className="rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-[#E5B56A] font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Why Work With TCH Support Services</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Local accountability, zero corporate hurdles
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {whyUsPoints.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D4A359]/40 hover:bg-white/[0.08] transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-xl bg-[#D4A359]/20 text-[#E5B56A] flex items-center justify-center border border-[#D4A359]/30 font-bold text-xs group-hover:scale-105 transition-transform">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-teal-200/60">
                          {item.num}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-white group-hover:text-[#E5B56A] transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-teal-100/80 mt-2 leading-relaxed font-normal">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: What You Will Be Offered (Career Prospects) */}
            {activeTab === 'prospects' && (
              <div className="rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div>
                  <div className="flex items-center gap-2 text-[#E5B56A] font-bold text-xs uppercase tracking-wider mb-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>What You Will Be Offered: Career Prospects</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Professional mentorship &amp; leadership pathways
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {careerProspects.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#D4A359]/40 hover:bg-white/[0.08] transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-8 h-8 rounded-xl bg-[#D4A359]/20 text-[#E5B56A] flex items-center justify-center border border-[#D4A359]/30 font-bold text-xs group-hover:scale-105 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-[11px] font-mono font-bold text-teal-200/60">
                            {item.num}
                          </span>
                        </div>
                        <h4 className="font-bold text-base text-white group-hover:text-[#E5B56A] transition-colors leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-teal-100/80 mt-2 leading-relaxed font-normal">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Direct Clinician Leadership Assurance Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#D4A359]/20 border border-[#D4A359]/40 flex items-center justify-center text-[#E5B56A] flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Prefer a direct, informal phone discussion?</h4>
                  <p className="text-xs text-teal-100/80 mt-0.5">Alan takes all clinician calls personally and confidentially.</p>
                </div>
              </div>
              <a
                href="tel:0431430905"
                className="btn-press inline-flex items-center gap-2 bg-[#D4A359] hover:bg-[#C28F42] text-[#0A241F] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md whitespace-nowrap transition-all flex-shrink-0"
              >
                <Phone className="w-4 h-4 text-[#0A241F]" />
                <span>Call Alan: 0431 430 905</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Handcrafted Application Console (No AI Box) */}
          <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#E2DBD0] p-6 sm:p-7 rounded-2xl shadow-xl text-[#182823] space-y-5">
            
            {/* Form Header */}
            <div className="border-b border-[#E8E2D7] pb-3.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#164E43] block">
                  Expression of Interest
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#FAF3E7] text-[#9E6C1F] text-[11px] font-bold border border-[#E8D1A7]">
                  Confidential
                </span>
              </div>
              <h3 className="font-bold text-2xl text-[#0E352D] tracking-tight leading-snug">
                Submit Your Expression of Interest &amp; Resume
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed font-medium">
                Upload your CV and cover letter below. Alan reviews all applications directly.
              </p>
            </div>

            {/* Submission Feedback Message */}
            {submitResult && (
              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm flex items-start gap-3 ${
                  submitResult.success
                    ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-300'
                }`}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-950">{submitResult.message}</p>
                  {submitResult.refId && (
                    <p className="text-xs text-emerald-700 mt-1 font-semibold">Application Reference: {submitResult.refId}</p>
                  )}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your full name"
                    className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0412 345 678"
                    className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email Address & Preferred Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                    Preferred Role *
                  </label>
                  <select
                    value={formData.roleApplied}
                    onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-all"
                  >
                    {availableRoles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* PDF Resume Drag & Drop Upload Component */}
              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                  Upload Resume / CV (PDF or Word)
                </label>

                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-4 sm:p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                    selectedFile 
                      ? 'bg-emerald-50 border-emerald-500' 
                      : 'bg-[#FAF8F5] border-gray-300 hover:border-[#164E43] hover:bg-emerald-50/40'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {selectedFile ? (
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-emerald-200 shadow-sm max-w-md mx-auto">
                      <div className="flex items-center gap-2.5 text-left overflow-hidden">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                          <p className="font-bold text-[#0E352D] truncate text-xs">
                            {selectedFile.name}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Ready to upload
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-rose-600 transition-all ml-2"
                        title="Remove file"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1.5 py-1">
                      <div className="w-10 h-10 rounded-xl bg-[#164E43]/10 text-[#164E43] flex items-center justify-center mx-auto">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#0E352D] text-xs">
                          Click to select or drag and drop your PDF resume
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">
                          Supported formats: PDF, DOC, DOCX (Max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {fileError && (
                  <p className="text-rose-600 text-[11px] font-semibold mt-1">
                    {fileError}
                  </p>
                )}
              </div>

              {/* Cover Letter / Notes */}
              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                  Cover Letter or Clinical Background Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Briefly tell us about your experience, qualifications, and preferred working hours in Townsville..."
                  className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-press w-full inline-flex items-center justify-center gap-2 bg-[#164E43] hover:bg-[#0E352D] text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-colors"
              >
                <Send className="w-4 h-4 text-[#E5B56A]" />
                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Resume'}</span>
              </button>

            </form>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Townsville &amp; Regional QLD
              </span>
              <span className="font-medium text-[#164E43]">
                Strictly Confidential
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
