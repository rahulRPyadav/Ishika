import React from 'react';
import { Award, Headphones, ShieldCheck, Briefcase, MapPin, ThumbsUp, Plane, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Best Price Guarantee",
      desc: "We offer the best prices with no hidden charges."
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      desc: "Our travel experts are always here to help you."
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure Travel",
      desc: "Your safety is our top priority on every journey."
    },
    {
      icon: Briefcase,
      title: "Handpicked Hotels",
      desc: "Carefully selected hotels for a comfortable stay."
    },
    {
      icon: MapPin,
      title: "Expert Local Guides",
      desc: "Explore more with our experienced local guides."
    },
    {
      icon: ThumbsUp,
      title: "Happy Travelers",
      desc: "Thousands of happy travelers trust us."
    }
  ];

  const polaroids = [
    {
      title: "Beach Getaway",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80",
      rotation: "-rotate-6 hover:rotate-0"
    },
    {
      title: "Mountain Escape",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=80",
      rotation: "rotate-2 hover:rotate-0"
    },
    {
      title: "Cultural Tours",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=500&auto=format&fit=crop&q=80",
      rotation: "rotate-6 hover:rotate-0"
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#34A99D]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E5CB90]/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT & FEATURES GRID */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Section */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/50 px-4 py-1.5 rounded-full text-[#458393] text-xs font-extrabold tracking-widest uppercase mb-3 shadow-xs">
                <Sparkles size={14} className="text-[#34A99D]" />
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
                Why <span className="text-[#34A99D]">Travel With Us?</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
                We are passionate about creating unforgettable travel experiences for our customers with unmatched comfort and safety.
              </p>
            </div>

            {/* 3x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white p-5 rounded-3xl border border-[#34A99D]/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="bg-[#FFF3C8] text-[#458393] w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#34A99D] group-hover:text-white transition duration-300 shadow-xs">
                      <IconComponent size={22} strokeWidth={2} />
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-sm mb-1.5 leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 leading-relaxed max-w-[180px] font-medium">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Handwritten Tagline with Decorative Underline */}
            <div className="pt-2">
              <div className="inline-block relative">
                <span className="font-serif italic text-[#34A99D] font-bold text-2xl tracking-wide">
                  Your Journey, Our Passion ♡
                </span>
                <svg className="w-full h-3 text-[#E5CB90] absolute -bottom-2 left-0" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8 C 50 2, 150 12, 198 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: ORGANIC WAVED PHOTO + FLOATING POLAROIDS */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            
            {/* Flight Path Doodle (Above Image) */}
            <div className="hidden sm:block absolute -top-12 -left-12 z-20 text-[#34A99D] opacity-80">
              <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none">
                <path d="M 10 80 Q 40 10 90 20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              </svg>
              <div className="absolute right-0 top-3">
                <Plane size={22} className="text-[#458393] transform rotate-45" />
              </div>
            </div>

            {/* Main Wavy Arch Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Organic Wavy Shape Mask Image */}
              <div 
                className="w-full h-[450px] sm:h-[500px] bg-cover bg-center shadow-2xl relative z-10 overflow-hidden border-4 border-white"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1000&auto=format&fit=crop&q=80')`,
                  borderRadius: '240px 240px 30px 30px'
                }}
              >
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* FLOATING POLAROID CARDS OVERLAY */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-left-12 sm:right-auto z-20 flex items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
                {polaroids.map((card, index) => (
                  <div 
                    key={index} 
                    className={`bg-white p-2 sm:p-2.5 pb-4 sm:pb-5 rounded-2xl shadow-xl border border-slate-100 transition-all duration-300 transform ${card.rotation} hover:scale-105 hover:z-30 cursor-pointer w-28 sm:w-32 flex-shrink-0`}
                  >
                    <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden mb-2 bg-slate-100">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-serif italic text-slate-800 text-[10px] sm:text-xs text-center font-bold tracking-tight whitespace-nowrap">
                      {card.title}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;