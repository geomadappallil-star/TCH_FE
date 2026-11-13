import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const CommonCtaBanner: React.FC = () => {
  return (
    <section className="bg-[#0A3D47] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-[#0B5563]/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-2">
            Let’s have a chat.
          </h2>
          <p className="text-lg text-emerald-100/90 font-sans leading-relaxed">
            Give us a call or send an email and we’ll talk through how we can help. No fuss, no jargon.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <a
            href="tel:0431430905"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#F4A62A] hover:bg-[#E09217] text-[#1E2B30] font-bold text-base min-h-[48px] shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            aria-label="Call 0431 430 905"
          >
            <Phone className="w-5 h-5 fill-current stroke-none" />
            <span>Call 0431 430 905</span>
          </a>

          <a
            href="mailto:admin@tchservices.com.au"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-[#FBF5EA] text-[#0A3D47] font-bold text-base min-h-[48px] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            aria-label="Email admin@tchservices.com.au"
          >
            <Mail className="w-5 h-5" />
            <span>Email us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
