import React from 'react';
import { 
  Heart, ShieldCheck, Award, Headphones, MapPin, 
  Users, Compass, Globe, CheckCircle2, ArrowRight, Plane, Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 font-sans relative overflow-hidden selection:bg-[#E5CB90]/70 selection:text-slate-950 pb-12 sm:pb-20">
      
      {/* Subtle Pastel Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-0 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-[#E5CB90]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 sm:w-[550px] h-72 sm:h-[550px] bg-[#FFF3C8]/40 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10"></div>

      {/* 1. HERO HEADER SECTION */}
      <div 
        className="relative bg-cover bg-center py-16 sm:py-28 md:py-32 px-4 text-white overflow-hidden shadow-xl"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(21, 35, 45, 0.90), rgba(69, 131, 147, 0.82)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80')` 
        }}
      >
        {/* Background Plane Doodle */}
        <div className="hidden lg:block absolute right-20 top-12 text-[#E5CB90] opacity-60">
          <Plane size={64} className="transform rotate-12 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center sm:text-left">
          
          {/* Breadcrumb Pill */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black tracking-widest text-[#FFF3C8] uppercase mb-4 shadow-sm">
            <Link to="/" className="hover:text-white transition">HOME</Link>
            <span>&gt;</span>
            <span className="text-white">ABOUT US</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-3 sm:mb-4 text-white leading-tight">
            About <span className="bg-gradient-to-r from-[#FFF3C8] via-[#E5CB90] to-[#34A99D] bg-clip-text text-transparent">Ishika Tour & Travels</span>
          </h1>

          <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed font-medium mx-auto sm:mx-0">
            Crafting soulful travel memories. We design bespoke journeys that connect you with breathtaking landscapes and rich cultural heritage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-12 sm:space-y-24">

        {/* 2. WHO WE ARE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-8 h-1.5 bg-gradient-to-r from-[#34A99D] to-[#458393] rounded-full inline-block"></span>
                <span className="text-[#458393] text-[10px] sm:text-xs font-black tracking-widest uppercase">
                  WHO WE ARE
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Your Journey, <span className="text-[#34A99D]">Our Passion</span>
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              At <strong className="text-slate-950 font-bold">Ishika Tour and Travels</strong>, we believe travel is an opportunity to discover new horizons and store lifelong stories. Dedicated to personalized service, complete transparency, and unmatched value.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              Whether you yearn for serene tropical coasts or majestic mountain adventures, our travel architects plan every detail to give you a stress-free escape.
            </p>

            <div className="pt-2">
              <Link 
                to="/tours" 
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#458393] hover:bg-[#34A99D] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg shadow-[#458393]/20 hover:scale-105 group"
              >
                <span>Explore Packages</span>
                <ArrowRight size={16} className="text-[#FFF3C8] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Collage with Floating Badge */}
          <div className="lg:col-span-6 relative pt-4 sm:pt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white h-[280px] sm:h-[420px] relative ring-2 ring-[#E5CB90]/40">
                <img 
                  src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=60" 
                  alt="Travelers enjoying view" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 left-4 sm:left-8 bg-white/95 backdrop-blur-md p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-[#FFF3C8] flex items-center space-x-3.5 sm:space-x-4 max-w-[280px] sm:max-w-xs z-20">
                <div className="bg-gradient-to-br from-[#34A99D] to-[#458393] text-white p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-md flex-shrink-0">
                  <Award size={22} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-base">10+ Years Experience</h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug">
                    Trusted by thousands of happy travelers worldwide.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3. OUR VALUES */}
        <div className="pt-6 sm:pt-0">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-14">
            <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/50 px-3.5 py-1 rounded-full text-[#458393] text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-2.5 shadow-xs">
              <Sparkles size={13} className="text-[#34A99D]" />
              <span>OUR CORE VALUES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              What Makes <span className="text-[#34A99D]">Us Special?</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            
            {/* Card 1 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#34A99D]/20 shadow-xs sm:shadow-lg text-center hover:shadow-xl transition-all duration-300 group flex flex-col items-center">
              <div className="bg-[#34A99D]/10 text-[#34A99D] w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#34A99D] group-hover:text-white transition duration-300 shadow-xs border border-[#34A99D]/20 flex-shrink-0">
                <Heart size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">Customer First</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-medium">
                Your happiness is at the heart of every trip we plan.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#458393]/20 shadow-xs sm:shadow-lg text-center hover:shadow-xl transition-all duration-300 group flex flex-col items-center">
              <div className="bg-[#458393]/10 text-[#458393] w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#458393] group-hover:text-white transition duration-300 shadow-xs border border-[#458393]/20 flex-shrink-0">
                <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">Safety & Trust</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-medium">
                Verified hotels, trusted drivers, and 24/7 on-tour security.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E5CB90]/40 shadow-xs sm:shadow-lg text-center hover:shadow-xl transition-all duration-300 group flex flex-col items-center">
              <div className="bg-[#E5CB90]/20 text-[#a88a42] w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#E5CB90] group-hover:text-slate-950 transition duration-300 shadow-xs border border-[#E5CB90]/30 flex-shrink-0">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">Best Value</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-medium">
                Fair, transparent pricing with no hidden surprises.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#FFF3C8]/80 shadow-xs sm:shadow-lg text-center hover:shadow-xl transition-all duration-300 group flex flex-col items-center">
              <div className="bg-[#FFF3C8]/60 text-[#a88a42] w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#FFF3C8] group-hover:text-slate-950 transition duration-300 shadow-xs border border-[#FFF3C8] flex-shrink-0">
                <Headphones size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">24/7 Support</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-medium">
                Always available to assist your travel queries.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xs sm:shadow-lg text-center hover:shadow-xl transition-all duration-300 group col-span-2 md:col-span-1 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#34A99D]/10 to-[#E5CB90]/20 text-[#34A99D] w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:from-[#34A99D] group-hover:to-[#458393] group-hover:text-white transition duration-300 shadow-xs border border-slate-200/80 flex-shrink-0">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">Handpicked Stays</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-500 leading-relaxed font-medium">
                Curated boutique hotels and scenic resorts.
              </p>
            </div>

          </div>
        </div>

        {/* 4. STATS COUNTER BAR */}
        <div className="bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] rounded-2xl sm:rounded-3xl p-6 sm:p-12 text-white shadow-xl shadow-[#34A99D]/20 relative overflow-hidden">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center relative z-10">
            
            <div className="flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-md border border-white/20">
                <Users size={20} className="sm:w-6 sm:h-6 text-[#FFF3C8]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">5000+</h3>
              <p className="text-[10px] sm:text-xs text-[#FFF3C8] font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Happy Travelers</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-md border border-white/20">
                <Compass size={20} className="sm:w-6 sm:h-6 text-[#FFF3C8]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">250+</h3>
              <p className="text-[10px] sm:text-xs text-[#FFF3C8] font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Curated Tours</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-md border border-white/20">
                <Globe size={20} className="sm:w-6 sm:h-6 text-[#FFF3C8]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">25+</h3>
              <p className="text-[10px] sm:text-xs text-[#FFF3C8] font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Top Destinations</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white/15 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl mb-2 sm:mb-3 shadow-md border border-white/20">
                <Award size={20} className="sm:w-6 sm:h-6 text-[#FFF3C8]" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-black">10+</h3>
              <p className="text-[10px] sm:text-xs text-[#FFF3C8] font-bold uppercase tracking-wider mt-0.5 sm:mt-1">Years Experience</p>
            </div>

          </div>
        </div>

        {/* 5. WHY TRAVEL WITH US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-xs font-black text-[#458393] bg-[#FFF3C8] border border-[#E5CB90]/50 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-2.5 shadow-xs">
                EXCELLENCE GUARANTEED
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                We Create Journeys <br />
                <span className="text-[#34A99D]">You'll Never Forget.</span>
              </h2>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
              We manage all your trip arrangements—from flight ticketing and hotel bookings to local guides—allowing you to unwind and savor your vacation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-3 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#34A99D]/30 shadow-xs">
                <CheckCircle2 size={18} className="text-[#34A99D] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Expert Local Guides</span>
              </div>

              <div className="flex items-center space-x-3 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#458393]/30 shadow-xs">
                <CheckCircle2 size={18} className="text-[#458393] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Customized Itineraries</span>
              </div>

              <div className="flex items-center space-x-3 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#E5CB90]/40 shadow-xs">
                <CheckCircle2 size={18} className="text-[#a88a42] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Hassle-Free Booking</span>
              </div>

              <div className="flex items-center space-x-3 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#FFF3C8] shadow-xs">
                <CheckCircle2 size={18} className="text-[#34A99D] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-900">Unforgettable Memories</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white h-[260px] sm:h-[380px] ring-2 ring-[#E5CB90]/40 relative">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80" 
                alt="Tropical Sunset Resort" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;