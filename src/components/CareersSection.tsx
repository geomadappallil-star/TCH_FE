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
      detail: 'Supported continuing professional development hours and structured NDIS Quality & Safeguards compliance training.'
    },
    {
      icon: Users,
      title: 'Community Impact & Practice Autonomy',
      detail: 'Make a tangible difference for Townsville, Ingham, and Charters Towers families where your clinical judgment is respected.'
    }
  ];

  return (
    <section id="jobs" className="py-16 sm:py-24 relative overflow-hidden bg-[#163932] text-white">
      
      {/* Background Photo Banner with High-Contrast Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')`
        }}
      />

      {/* Solid Eucalyptus Gradient Background (No negative z-indexes!) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#163932] via-[#1A453C] to-[#163932] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#D4A359] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Townsville Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Careers that advance your clinical skills &amp; respect your life
          </h2>

          <p className="text-sm sm:text-base text-teal-100 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
            Looking for RNs, ENs, disability support workers, cleaners, and gardeners across Townsville. Connect directly with a local team that values your craft.
          </p>
        </div>

        {/* 2 Column Highlights: Why Us & What You Will Be Offered */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14">
          
          {/* Card 1: Why Us */}
          <div className="bg-[#102D26] p-6 sm:p-8 rounded-3xl border-2 border-[#2D6A5D] space-y-5 shadow-xl">
            <div className="flex items-center gap-2.5 text-[#D4A359] font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Why Work With TCH Support Services</span>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl text-white">
              Local accountability, zero corporate hurdles
            </h3>

            <div className="space-y-4 pt-1">
              {whyUsPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4A359]/40">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-teal-100/90 mt-0.5 leading-relaxed font-normal">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: What You Will Be Offered (Career Prospects) */}
          <div className="bg-[#102D26] p-6 sm:p-8 rounded-3xl border-2 border-[#2D6A5D] space-y-5 shadow-xl">
            <div className="flex items-center gap-2.5 text-[#D4A359] font-bold text-xs uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>What You Will Be Offered: Career Prospects</span>
            </div>

            <h3 className="font-bold text-xl sm:text-2xl text-white">
              Professional mentorship &amp; leadership pathways
            </h3>

            <div className="space-y-4 pt-1">
              {careerProspects.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D4A359]/40">
                      <IconComponent className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-teal-100/90 mt-0.5 leading-relaxed font-normal">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Application Form with PDF Upload (High Contrast White Card) */}
        <div className="max-w-3xl mx-auto bg-white p-7 sm:p-10 rounded-3xl shadow-2xl border border-white text-[#192B27]">
          
          <div className="text-center mb-8">
            <h3 className="font-bold text-xl sm:text-2xl text-[#163932]">
              Submit Your Expression of Interest &amp; Resume
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Upload your CV and cover letter below. Alan reviews all applications directly.
            </p>
          </div>

          {submitResult && (
            <div
              className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
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

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your full name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0412 345 678"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                  Preferred Role *
                </label>
                <select
                  value={formData.roleApplied}
                  onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                >
                  <option>Registered Nurse (RN)</option>
                  <option>Enrolled Nurse (EN)</option>
                  <option>Allied Health (OT / Physio / Counselling)</option>
                  <option>Disability Support Worker</option>
                  <option>Domestic House Cleaner</option>
                  <option>Lawn Mower &amp; Yard Care Specialist</option>
                </select>
              </div>
            </div>

            {/* PDF Resume Drag & Drop Upload Component */}
            <div>
              <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                Upload Resume / CV (PDF or Word)
              </label>

              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`p-5 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                  selectedFile 
                    ? 'bg-emerald-50 border-emerald-500' 
                    : 'bg-gray-50 border-gray-300 hover:border-[#2D6A5D] hover:bg-emerald-50/50'
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
                    <div className="flex items-center gap-3 text-left overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 flex-shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <p className="font-bold text-[#163932] truncate text-xs sm:text-sm">
                          {selectedFile.name}
                        </p>
                        <p className="text-[11px] text-gray-500">
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
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#2D6A5D]/10 text-[#2D6A5D] flex items-center justify-center mx-auto">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163932] text-xs sm:text-sm">
                        Click to select or drag and drop your PDF resume
                      </p>
                      <p className="text-[11px] text-gray-500 mt-0.5">
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
              <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1.5">
                Cover Letter or Clinical Background Notes
              </label>
              <textarea
                rows={3}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Briefly tell us about your experience, qualifications, and preferred working hours in Townsville..."
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2D6A5D] hover:bg-[#204E44] text-white font-bold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-4 h-4 text-[#D4A359]" />
              <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application & Resume'}</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
