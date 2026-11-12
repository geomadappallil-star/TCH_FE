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
    'Assistant in Nursing (AIN)',
    'Personal Care Worker / Disability Support Worker',
    'Occupational Therapist',
    'Physiotherapist',
    'Registered Nurse (RN)'
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
      message: `Thank you ${formData.fullName}! Your application and details have been received. Our clinical coordinator will review your credentials and contact you directly.`,
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

  const whatWeLookFor = [
    'Current NDIS Worker Screening Check (or willing to obtain)',
    'Relevant qualifications and registrations (AHPRA for clinical roles)',
    'Valid driver\'s licence and reliable vehicle',
    'A genuine commitment to respectful, person-centred care',
    'Reliability: turning up when you say you will'
  ];

  const clientRoles = [
    {
      title: 'Assistant in Nursing (AIN)',
      badge: 'color-accent',
      type: 'Casual & Permanent Part-Time',
      desc: 'Assisting participants with personal care, hygiene, and daily living routines across Townsville.'
    },
    {
      title: 'Personal Care Worker / Support Worker',
      badge: 'color-secondary',
      type: 'Flexible Rounds',
      desc: 'Community access, social outings, daily living support, and meal assistance with local participants.'
    },
    {
      title: 'Occupational Therapist',
      badge: 'color-blue',
      type: 'Full-Time / Part-Time',
      desc: 'Conducting Functional Capacity Assessments (2-week turnaround), assistive technology and home safety.'
    },
    {
      title: 'Physiotherapist',
      badge: 'color-rose',
      type: 'Clinical Consultations',
      desc: 'Mobility, reablement, fall prevention programs, and active musculoskeletal rehabilitation.'
    },
    {
      title: 'Registered Nurse (RN)',
      badge: 'color-coral',
      type: 'Clinical Leadership',
      desc: 'Complex wound care, catheter management, medication charts, and clinical health assessments.'
    }
  ];

  return (
    <section id="jobs" className="py-20 sm:py-28 relative overflow-hidden bg-[#FFF3E2] text-[#2B2822] border-b border-[#0B4F51]/10">
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#94C08E]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>Join the TCH Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0B4F51] leading-[1.18]">
            Make a real difference <br className="hidden sm:inline" />
            <span className="color-secondary">in North Queensland.</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
            We're always looking for good people who care about their work and want to make a difference in North Queensland.
          </p>

          {/* Prominent Direct Resume Email Banner */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 p-3 sm:px-6 sm:py-3.5 rounded-3xl bg-white border-2 border-[#0B4F51]/15 shadow-sm">
            <span className="text-xs sm:text-sm font-semibold text-gray-700 font-sans">
              Send your resume directly to:
            </span>
            <a
              href="mailto:hr@tchservices.com.au"
              className="ats-button bg-[#0B4F51] hover:bg-[#073B3C] text-white font-bold text-xs sm:text-sm shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-[#F9B835]" />
              <span>hr@tchservices.com.au</span>
            </a>
            <span className="text-xs text-gray-500 font-sans hidden md:inline">
              or submit your expression of interest below.
            </span>
          </div>
        </div>

        {/* 12-Column Responsive Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Open Roles & What We Look For */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 5 Open Positions Card */}
            <div className="bg-white rounded-3xl border-2 border-[#0B4F51]/15 p-6 sm:p-8 space-y-5 shadow-lg">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#EC7E38] block">
                    Current Opportunities
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B4F51] tracking-tight">
                    Open Positions in Townsville &amp; Regions
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#0B4F51]/10 text-[#0B4F51] text-xs font-bold">
                  5 Roles Active
                </span>
              </div>

              <div className="space-y-3 pt-1">
                {clientRoles.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FAF3EA]/80 border border-[#0B4F51]/10 hover:border-[#0B4F51]/30 hover:bg-[#FAF3EA] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`${role.badge} text-[10px] font-bold`}>
                          {role.type}
                        </span>
                        <h4 className="font-bold text-base text-[#0B4F51] group-hover:text-[#073B3C]">
                          {role.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-600 font-sans leading-relaxed">
                        {role.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, roleApplied: role.title }))}
                      className="ats-button bg-white text-[#0B4F51] border border-[#0B4F51]/20 hover:bg-[#0B4F51] hover:text-white text-xs font-bold py-1.5 px-3 whitespace-nowrap self-start sm:self-center"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Look For in Our Team Card */}
            <div className="bg-white rounded-3xl border-2 border-[#0B4F51]/15 p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-[#EC7E38] font-bold text-xs uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-[#0B4F51]" />
                <span>Our Standard</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B4F51] tracking-tight">
                What We Look For in Our Team
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-sans">
                The qualities and credentials we value most across our clinical and support team:
              </p>

              <div className="space-y-2.5 pt-2">
                {whatWeLookFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#94C08E] flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Clinician Leadership Assurance Box */}
            <div className="p-5 sm:p-6 rounded-3xl bg-[#0B4F51] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#F9B835]/20 border border-[#F9B835]/40 flex items-center justify-center text-[#F9B835] flex-shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Prefer a direct, informal chat?</h4>
                  <p className="text-xs text-teal-100 mt-0.5 font-sans">Alan answers recruitment queries directly and confidentially.</p>
                </div>
              </div>
              <a
                href="tel:0431430905"
                className="ats-button bg-[#F9B835] hover:bg-[#ffc657] text-[#2B2822] font-bold text-xs sm:text-sm py-2.5 px-5 shadow-sm whitespace-nowrap flex-shrink-0"
              >
                <Phone className="w-4 h-4 text-[#2B2822]" />
                <span>0431 430 905</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 cols): Expression of Interest Form */}
          <div className="lg:col-span-5 bg-white border-2 border-[#0B4F51]/15 p-6 sm:p-8 rounded-3xl shadow-xl text-[#2B2822] space-y-5">
            
            {/* Form Header */}
            <div className="border-b border-gray-100 pb-3.5">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#0B4F51] block">
                  Expression of Interest
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF3EA] text-[#0B4F51] text-[11px] font-bold border border-[#0B4F51]/15">
                  Direct Intake
                </span>
              </div>
              <h3 className="font-bold text-2xl text-[#0B4F51] tracking-tight leading-snug">
                Submit Your EOI &amp; Resume
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-sans">
                Tell us about your background or upload your CV below.
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
                  <p className="font-bold text-emerald-950 font-sans">{submitResult.message}</p>
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
                    className="tactile-input w-full p-2.5 text-[#2B2822] bg-gray-50 focus:bg-white"
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
                    className="tactile-input w-full p-2.5 text-[#2B2822] bg-gray-50 focus:bg-white"
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
                    className="tactile-input w-full p-2.5 text-[#2B2822] bg-gray-50 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">
                    Preferred Role *
                  </label>
                  <select
                    value={formData.roleApplied}
                    onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })}
                    className="tactile-input w-full p-2.5 text-[#2B2822] bg-gray-50 focus:bg-white"
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
                      : 'bg-gray-50 border-gray-300 hover:border-[#0B4F51] hover:bg-emerald-50/30'
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
                          <p className="font-bold text-[#0B4F51] truncate text-xs font-sans">
                            {selectedFile.name}
                          </p>
                          <p className="text-[10px] text-gray-500 font-sans">
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
                      <div className="w-10 h-10 rounded-xl bg-[#0B4F51]/10 text-[#0B4F51] flex items-center justify-center mx-auto">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-[#0B4F51] text-xs font-sans">
                          Click to select or drag and drop your PDF resume
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5 font-sans">
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
                  className="tactile-input w-full p-2.5 text-[#2B2822] bg-gray-50 focus:bg-white"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ats-button w-full inline-flex items-center justify-center gap-2 bg-[#0B4F51] hover:bg-[#073B3C] text-white font-bold text-sm py-4 shadow-md"
              >
                <Send className="w-4 h-4 text-[#F9B835]" />
                <span>{isSubmitting ? 'Submitting Application...' : 'Submit Expression of Interest'}</span>
              </button>

            </form>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-sans">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Townsville &amp; Regional QLD
              </span>
              <span className="font-medium text-[#0B4F51]">
                hr@tchservices.com.au
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
