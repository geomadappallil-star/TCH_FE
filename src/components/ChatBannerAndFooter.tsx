import React from 'react';
import { Logo } from './Logo.js';
import { Phone, Mail, ArrowRight, Heart } from 'lucide-react';

export const ChatBannerAndFooter: React.FC = () => {
  const handleSmoothJump = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. "Let's have a chat." Banner */}
      <section className="relative z-10 bg-[#0B5563] text-white py-14 md:py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8">
            
            <div className="space-y-2 max-w-xl">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Let&#8217;s have a chat.
              </h2>
              <p className="text-base sm:text-lg text-[#E3F1F1] leading-relaxed">
                Give us a call or send an email and we&#8217;ll talk through how we can help. No fuss, no jargon.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="tel:0431430905"
                className="btn-base btn-mango text-sm sm:text-base px-6 py-3.5 shadow-lg flex items-center gap-2 group"
              >
                <Phone className="w-4 h-4 text-[#1E2B30]" />
                <span>Call 0431 430 905</span>
              </a>

              <a
                href="mailto:admin@tchservices.com.au"
                className="btn-base btn-white text-sm sm:text-base px-6 py-3.5 shadow-md flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#0A3D47]" />
                <span>Email us</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Global Footer */}
      <footer className="relative z-10 bg-[#0A3D47] text-[#D5E6E6] text-sm pt-14 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Main Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Col 1: Brand & ABN */}
            <div className="lg:col-span-4 space-y-4">
              <Logo variant="light" size="md" />
              <p className="text-[#D5E6E6] text-sm leading-relaxed max-w-sm pt-1">
                Townsville Community Health. Locals looking after locals across North Queensland.
              </p>
              <p className="text-xs text-teal-200/80 font-mono">
                ABN 37 666 592 785
              </p>
            </div>

            {/* Col 2: Explore Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading font-bold text-white text-base">
                Explore
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a 
                    href="#about" 
                    onClick={(e) => handleSmoothJump(e, '#about')}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    onClick={(e) => handleSmoothJump(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#referral" 
                    onClick={(e) => handleSmoothJump(e, '#referral')}
                    className="hover:text-white transition-colors"
                  >
                    Make a Referral
                  </a>
                </li>
                <li>
                  <a 
                    href="#careers" 
                    onClick={(e) => handleSmoothJump(e, '#careers')}
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-white text-base">
                Contact
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a 
                    href="tel:0431430905" 
                    className="hover:text-[#F4A62A] transition-colors flex items-center gap-1.5 font-bold text-white"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F4A62A]" />
                    <span>0431 430 905</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:admin@tchservices.com.au" 
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#5FB3AA]" />
                    <span>admin@tchservices.com.au</span>
                  </a>
                </li>
                <li className="text-teal-200/80 pt-1">
                  Based in Townsville, QLD
                </li>
                <li className="text-xs text-teal-300/80">
                  Mon–Sat 7:00am – 7:00pm
                </li>
              </ul>
            </div>

            {/* Col 4: Service Areas */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading font-bold text-white text-base">
                We cover
              </h4>
              <p className="text-xs sm:text-sm text-[#D5E6E6] leading-relaxed">
                Townsville, Ayr, Ingham, Charters Towers, Mareeba and Mount Isa
              </p>
              <div className="pt-2">
                <a
                  href="#referral"
                  onClick={(e) => handleSmoothJump(e, '#referral')}
                  className="btn-base btn-mango text-xs px-4 py-2 inline-flex"
                >
                  Make a referral
                </a>
              </div>
            </div>

          </div>

          {/* Acknowledgement of Country & Cultural Notice */}
          <div className="pt-8 border-t border-[#1F5A64] space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="w-24 h-16 rounded-xl overflow-hidden flex-shrink-0 border border-teal-700/60 shadow-xs bg-[#134B56]">
                <img 
                  src="./images/indigenous-art.jpg" 
                  alt="Traditional First Nations artwork" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-[#E3F1F1] leading-relaxed max-w-4xl">
                TCH Support Services acknowledges the Bindal and Wulgurukaba peoples, the Traditional Owners of the land on which we work in Townsville, and pays respect to Elders past and present. We extend that respect to all Aboriginal and Torres Strait Islander peoples across the communities we serve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9FC0C2] pt-3 border-t border-white/5">
              <p>
                Aboriginal and Torres Strait Islander visitors are advised that this website may contain images of people who have passed away.
              </p>
              <p className="flex-shrink-0">
                &copy; {new Date().getFullYear()} TCH Support Services. All rights reserved.
              </p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};
