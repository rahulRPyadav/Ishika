import React from 'react';
import { Headphones, Plane, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Choose Your Destination",
      desc: "Explore our wide range of tour packages and choose your perfect destination.",
      icon: (
        <svg className="w-12 h-12 text-[#34A99D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
          <path d="M11 4a7 7 0 0 1 7 7" strokeDasharray="2 2" />
          <circle cx="11" cy="11" r="3" strokeWidth="1" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Select Date & Travelers",
      desc: "Pick your travel dates and let us know how many travelers are joining.",
      icon: (
        <svg className="w-12 h-12 text-[#458393]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="3" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M9 16l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Get Best Package",
      desc: "We'll create the best package for you with transparent, best-in-class pricing.",
      icon: (
        <svg className="w-12 h-12 text-[#a88a42]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z" />
          <path d="M8 10h8M8 14h5" />
          <circle cx="16" cy="17" r="2.5" className="fill-[#E5CB90] text-slate-900" />
          <text x="14.8" y="18.2" fontSize="3" fontWeight="bold" fill="#0F1923">₹</text>
        </svg>
      )
    },
    {
      num: "04",
      title: "Confirm & Payment",
      desc: "Review your itinerary, confirm your booking and make 100% secure payment.",
      icon: (
        <svg className="w-12 h-12 text-[#34A99D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="3" />
          <path d="M2 10h20" />
          <rect x="5" y="14" width="3" height="2" rx="0.5" fill="currentColor" />
          <path d="M16 13l2.5 1.5L21 13v2.5c0 1.5-1 2.5-2.5 3c-1.5-.5-2.5-1.5-2.5-3V13z" className="fill-[#34A99D] text-white" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Pack & Enjoy Your Trip",
      desc: "Pack your bags and get ready for an unforgettable travel experience!",
      icon: (
        <svg className="w-12 h-12 text-[#458393]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="7" width="12" height="14" rx="3" />
          <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
          <path d="M10 11v6M14 11v6" strokeDasharray="1 1" />
          <path d="M5 2c2-1 4 0 4 0" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#34A99D]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E5CB90]/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          
          {/* Flight Path Doodles */}
          <div className="hidden lg:block absolute -left-12 top-2 text-[#34A99D] opacity-40">
            <svg className="w-16 h-12" viewBox="0 0 100 50">
              <path d="M 10 40 Q 50 10 90 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
            <div className="absolute -left-2 top-8">
              <div className="w-2 h-2 rounded-full bg-[#34A99D]"></div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-12 top-6 text-[#458393] opacity-40">
            <svg className="w-20 h-16" viewBox="0 0 100 50">
              <path d="M 10 10 Q 50 40 90 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
            <Plane size={16} className="absolute right-0 top-3 text-[#34A99D] transform rotate-45" />
          </div>

          <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/50 px-4 py-1.5 rounded-full text-[#458393] text-xs font-extrabold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles size={14} className="text-[#34A99D]" />
            <span>HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            How It <span className="text-[#34A99D]">Works</span>
          </h2>
          
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto font-medium leading-relaxed">
            We've made planning your dream trip simple and hassle-free. <br className="hidden sm:inline" />
            Just follow these easy steps and leave the rest to us.
          </p>
        </div>

        {/* 5 Horizontal Step Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col">
              
              {/* Card Item */}
              <div className="bg-white border border-[#34A99D]/20 hover:border-[#34A99D] hover:shadow-xl rounded-3xl p-6 text-center transition-all duration-300 flex-1 flex flex-col items-center group">
                
                {/* Step Number Badge */}
                <div className="bg-gradient-to-br from-[#34A99D] to-[#458393] text-white text-xs font-black w-9 h-9 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[#34A99D]/20 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>

                {/* SVG Icon */}
                <div className="mb-6 flex items-center justify-center h-16 transform group-hover:scale-105 transition-transform">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h4 className="font-extrabold text-slate-900 text-sm mb-2 px-1 leading-snug">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-relaxed max-w-[200px] font-medium">
                  {step.desc}
                </p>
              </div>

              {/* Connector Arrow for Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-4 text-[#E5CB90]" viewBox="0 0 24 12" fill="none">
                    <path d="M0 6H20M20 6L15 1M20 6L15 11" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
                  </svg>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Support Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#34A99D]/20 bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] min-h-[130px] flex items-center text-white">
          
          <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/15 backdrop-blur-md text-[#FFF3C8] p-3.5 rounded-2xl flex-shrink-0 border border-white/20">
                <Headphones size={26} />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base mb-0.5">
                  We're with you every step of the way!
                </h4>
                <p className="text-xs text-slate-100 font-medium">
                  Our support team is always here to help you before, during, and after your trip.
                </p>
              </div>
            </div>

            {/* Handwritten Style Quote */}
            <div className="md:pr-6">
              <span className="font-serif italic text-[#FFF3C8] font-bold text-lg sm:text-xl tracking-wide whitespace-nowrap">
                Your Journey, Our Priority ♡
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;