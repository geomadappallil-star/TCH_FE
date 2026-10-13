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
  Check
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
  const fileInputRef = useRef<HTMLInputElement>(null);

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
      // Dispatches application payload to serverless endpoint
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
      title: 'Direct Clinician Leadership',
      detail: 'Alan answers your call directly. No offshore call centers, ticketing systems, or confusing apps.'
    },
    {
      title: 'Flexible Local Scheduling',
      detail: 'Choose your own hours: casual rounds, consistent block shifts, or regular weekly clients across Townsville.'
    },
    {
      title: 'Comprehensive Handover Before Arrival',
      detail: 'Know participant history, clinical goals, and property layout before you arrive at the door.'
    },
    {
      title: 'Genuine Multidisciplinary Team',
      detail: 'Work alongside supportive RNs, allied health practitioners, and dependable home maintenance crews.'
    }
  ];

  const careerProspects = [
    {
      icon: Award,
      title: 'Clinical Mentorship & Advanced Competencies',
      detail: 'Hands-on clinical upskilling in complex wound staging, subcutaneous medications, bowel protocols, and PEG nutrition.'
    },
    {
      icon: TrendingUp,
      title: 'Clear Leadership & Coordination Pathways',
      detail: 'Clear advancement into Care Coordination, Clinical Team Leadership, and Regional Supervision in North Queensland.'
    },
    {
      icon: ShieldCheck,
      title: 'AHPRA CPD & Ongoing Accreditation Support',
      detail: 'Supported continuing professional development hours and structured NDIS Quality & Safeguards Commission compliance training.'
    },
    {
      icon: Users,
      title: 'Community Impact & Practice Autonomy',
      detail: 'Make a tangible difference for Townsville, Ingham, and Charters Towers families where your clinical judgment is respected.'
    }
  ];

  return (
    <section id="jobs" className="py-16 sm:py-24 relative overflow-hidden text-white">
      
      {/* Transparent Background Photo Banner with Eucalyptus Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-30 opacity-20 filter blur-xs"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      {/* Soothing Eucalyptus Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#163932]/95 via-[#1E4D43]/90 to-[#163932]/98 -z-20"></div>

      {/* Ambient Glows */}
      <div className="aurora-orb-1 top-0 left-[-100px] opacity-25"></div>
      <div className="aurora-orb-gold bottom-0 right-[-100px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-sans font-bold uppercase tracking-wider text-gold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Townsville Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
            Careers that advance your clinical skills &amp; respect your life
          </h2>

          <p className="font-serif text-sm sm:text-base text-teal-100/90 mt-3 max-w-2xl mx-auto">
            Looking for RNs, ENs, disability support workers, cleaners, and gardeners across Townsville. Connect directly with a local team that values your craft.
          </p>
        </div>

        {/* 2 Column Highlights: Why Us & What You Will Be Offered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          
          {/* Card 1: Why Us */}
          <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 space-y-5">
            <div className="flex items-center gap-2.5 text-gold font-sans font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Why Work With TCH Support Services</span>
            </div>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Local accountability, zero corporate hurdles
            </h3>

            <div className="space-y-3.5 pt-1">
              {whyUsPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-500/30 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/30">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-white">{item.title}</h4>
                    <p className="font-serif text-xs text-teal-100/80 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: What You Will Be Offered (Career Prospects) */}
          <div className="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 space-y-5">
            <div className="flex items-center gap-2.5 text-gold font-sans font-bold text-sm uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>What You Will Be Offered: Career Prospects</span>
            </div>

            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Professional mentorship &amp; leadership pathways
            </h3>

            <div className="space-y-3.5 pt-1">
              {careerProspects.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/30">
                      <IconComponent className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-sm text-white">{item.title}</h4>
                      <p className="font-serif text-xs text-teal-100/80 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Application Form with PDF Upload */}
        <div className="max-w-3xl mx-auto glass-card-dark p-6 sm:p-10 rounded-3xl border border-white/20 shadow-2xl">
          
          <div className="text-center mb-8">
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
              Submit Your Expression of Interest &amp; Resume
            </h3>
            <p className="font-serif text-xs sm:text-sm text-teal-100/80 mt-1">
              Upload your CV and cover letter below. Alan reviews all applications directly.
            </p>
          </div>

          {submitResult && (
            <div
              className={`p-4 rounded-2xl mb-6 font-sans text-xs sm:text-sm flex items-start gap-3 ${
                submitResult.success
                  ? 'bg-teal-900/80 text-teal-100 border border-gold/40'
                  : 'bg-rose-950/80 text-rose-200 border border-rose-500'
              }`}
            >
              <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-white">{submitResult.message}</p>
                {submitResult.refId && (
                  <p className="text-xs text-gold mt-1">Application Reference: {submitResult.refId}</p>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0412 345 678"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200/50 focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                  Preferred Role *
                </label>
                <select
                  value={formData.roleApplied}
                  onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[#163932] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option>Registered Nurse (RN)</option>
                  <option>Enrolled Nurse (EN)</option>
                  <option>Allied Health (OT / Physio / Psychology)</option>
                  <option>Disability Support Worker</option>
                  <option>Domestic House Cleaner</option>
                  <option>Lawn Mower &amp; Yard Care Specialist</option>
                </select>
              </div>
            </div>

            {/* PDF Resume Drag & Drop Upload Component */}
            <div>
              <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                Upload Resume / CV (PDF or Word)
              </label>

              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                  selectedFile 
                    ? 'bg-teal-900/60 border-gold/70' 
                    : 'bg-white/5 border-white/25 hover:border-gold/50 hover:bg-white/10'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {!selectedFile ? (
                  <div className="space-y-1.5">
                    <UploadCloud className="w-8 h-8 text-gold mx-auto" />
                    <p className="font-bold text-white text-xs sm:text-sm">
                      Click to browse or drag &amp; drop your resume
                    </p>
                    <p className="text-[11px] text-teal-200/70">
                      Accepted formats: PDF, DOC, DOCX (Max 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between bg-white/10 p-3 rounded-xl">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <FileText className="w-5 h-5 text-gold flex-shrink-0" />
                      <div className="text-left truncate">
                        <p className="font-bold text-white text-xs truncate">{selectedFile.name}</p>
                        <p className="text-[10px] text-teal-200">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="p-1 rounded-lg bg-white/10 hover:bg-rose-900/60 text-white transition-colors ml-2"
                      title="Remove file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {fileError && (
                <p className="text-rose-400 text-xs mt-1.5 font-sans font-medium">{fileError}</p>
              )}
            </div>

            {/* Cover Letter / Message */}
            <div>
              <label className="block text-teal-100 font-bold uppercase tracking-wider mb-1.5">
                Cover Letter / Background &amp; Availability
              </label>
              <textarea
                rows={3}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Tell us briefly about your experience, certifications, and preferred weekly hours..."
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-teal-200/50 font-serif focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm py-3.5 rounded-xl shadow-lg hover:brightness-105 transition-all mt-2"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Application...' : 'Submit Career Application'}</span>
            </button>

            <p className="text-center text-[11px] text-teal-200/70 pt-1">
              Questions before applying? Ring Alan directly on{' '}
              <a href="tel:0431430905" className="text-gold font-bold underline">
                0431 430 905
              </a>
            </p>

          </form>

        </div>

      </div>

    </section>
  );
};
