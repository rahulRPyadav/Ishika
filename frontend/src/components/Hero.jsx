import React, { useState } from 'react';
import { ArrowRight, Compass, MapPin, Calendar, DollarSign, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/tours');
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between bg-[#0F1923] overflow-hidden font-sans">
      
      {/* Background Image with Deep Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80')` 
        }}
      >
        {/* Soft Multi-Color Gradient Overlay matching theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/95 via-[#0F1923]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-transparent to-transparent"></div>
      </div>

      {/* Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#34A99D]/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-[#E5CB90]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-28 pb-12 z-10 my-auto">
        <div className="max-w-2xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#34A99D]/30 text-[#FFF3C8] text-xs sm:text-sm font-extrabold mb-6 shadow-sm">
            <Compass size={16} className="text-[#34A99D] animate-spin-slow" />
            <span className="tracking-wide uppercase text-[11px] sm:text-xs">Explore The Unexplored World</span>
          </div>

          {/* Main Heading with Gold-Cream Gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3C8] via-[#E5CB90] to-[#34A99D]">Unforgettable</span> Journeys With Us
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-8 max-w-xl">
            We curate innovative travel experiences that help you discover beautiful destinations with exceptional service, complete safety, and utmost care.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/tours"
              className="bg-[#34A99D] hover:bg-[#458393] text-slate-950 hover:text-white font-extrabold px-8 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#34A99D]/20 hover:scale-105 text-xs sm:text-sm cursor-pointer"
            >
              <span>Explore Our Packages</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-7 py-3.5 rounded-2xl transition duration-300 text-xs sm:text-sm hover:border-[#FFF3C8]"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </div>

      {/* Quick Search Floating Bar (Bottom Fold) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 z-10">
        <form 
          onSubmit={handleSearch}
          className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-[#34A99D]/20 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
        >
          {/* Field 1: Destination */}
          <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-2xl border border-slate-200/80">
            <MapPin size={20} className="text-[#34A99D] shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] font-black uppercase text-slate-400">Destination</label>
              <input 
                type="text" 
                placeholder="Where to? (e.g. Himachal)"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Field 2: Duration */}
          <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-2xl border border-slate-200/80">
            <Calendar size={20} className="text-[#458393] shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] font-black uppercase text-slate-400">Duration</label>
              <select 
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="">Any Duration</option>
                <option value="3-5">3 - 5 Days</option>
                <option value="6-8">6 - 8 Days</option>
                <option value="9+">9+ Days</option>
              </select>
            </div>
          </div>

          {/* Field 3: Category */}
          <div className="flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-2xl border border-slate-200/80">
            <DollarSign size={20} className="text-[#a88a42] shrink-0" />
            <div className="w-full">
              <label className="block text-[10px] font-black uppercase text-slate-400">Tour Type</label>
              <select className="w-full bg-transparent text-xs sm:text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
                <option value="all">All Categories</option>
                <option value="hills">Hills & Mountains</option>
                <option value="beach">Beaches</option>
                <option value="heritage">Heritage & Royal</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full bg-[#458393] hover:bg-[#34A99D] text-white font-extrabold py-3.5 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <Search size={18} />
            <span>Search Tours</span>
          </button>
        </form>
      </div>

    </div>
  );
};

export default Hero;