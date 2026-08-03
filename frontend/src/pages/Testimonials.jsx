import React from 'react';
import { 
  Star, MapPin, Heart, Quote, Compass, 
  CheckCircle2, Camera, ShieldCheck, ThumbsUp, Sparkles 
} from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "New Delhi, India",
      review: "Our trip to Bali was absolutely fantastic! Every detail was perfectly planned. The team made our vacation stress-free and truly memorable.",
      rating: 5,
      tag: "Family Trip",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
    },
    {
      name: "Rohit Verma",
      location: "Mumbai, India",
      review: "The Leh-Ladakh trip was the best experience of my life. Stunning landscapes, great hotels, and amazing support throughout the journey.",
      rating: 5,
      tag: "Adventure Tour",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    },
    {
      name: "Ankita Mehra",
      location: "Bangalore, India",
      review: "From booking to the final day of our trip to Switzerland, everything was smooth and delightful. Highly recommended for anyone who loves to travel!",
      rating: 5,
      tag: "Honeymoon Package",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    }
  ];

  const travelerMemories = [
    {
      title: "Paragliding in Solang",
      location: "Manali",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "Shikara Ride in Dal Lake",
      location: "Kashmir",
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "Sunset at Havelock Beach",
      location: "Andaman",
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=500&auto=format&fit=crop&q=80"
    },
    {
      title: "Camel Safari at Night",
      location: "Jaisalmer",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=500&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#E5CB90]/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none"></div>

      {/* BACKGROUND MOUNTAIN WATERMARK OVERLAY */}
      <div 
        className="absolute inset-x-0 bottom-0 h-64 sm:h-96 bg-cover bg-bottom opacity-10 pointer-events-none mix-blend-multiply"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop&q=80')` 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION WITH DOODLES */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 relative">
          
          {/* Left Floating Compass Doodle */}
          <div className="hidden lg:block absolute -left-20 top-2 text-[#34A99D]/40 transform -rotate-12">
            <Compass size={40} strokeWidth={1.5} />
          </div>

          {/* Right Floating Heart Outline Doodle */}
          <div className="hidden lg:block absolute -right-20 top-12 text-[#E5CB90]/60">
            <Heart size={36} strokeWidth={1.5} className="rotate-12 fill-[#FFF3C8]/50" />
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/50 px-3.5 sm:px-4 py-1.5 rounded-full text-[#458393] text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles size={14} className="text-[#34A99D]" />
            <span>TESTIMONIALS & REVIEWS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3 sm:mb-4 leading-tight">
            What Our <span className="text-[#34A99D]">Happy Travelers</span> Say
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
            We take pride in creating unforgettable experiences.<br className="hidden sm:inline" />
            Real stories from real travelers who explored the world with us.
          </p>
        </div>

        {/* ------------------- FOLD 1: TRUST HIGHLIGHTS BAR ------------------- */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#34A99D]/20 shadow-xs sm:shadow-sm mb-10 sm:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
          
          <div className="flex items-center justify-start sm:justify-center space-x-3 border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0">
            <div className="bg-[#FFF3C8] text-[#a88a42] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xs flex-shrink-0">
              <Star size={20} className="sm:w-6 sm:h-6" fill="currentColor" stroke="none" />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-lg font-black text-slate-900">4.9 / 5.0 Rating</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Over 1,200+ Google Reviews</p>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center space-x-3 border-b sm:border-b-0 sm:border-r border-slate-100 pb-3 sm:pb-0">
            <div className="bg-[#34A99D]/10 text-[#34A99D] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xs flex-shrink-0">
              <ThumbsUp size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-lg font-black text-slate-900">98% Satisfaction</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Verified Happy Travelers</p>
            </div>
          </div>

          <div className="flex items-center justify-start sm:justify-center space-x-3">
            <div className="bg-[#458393]/10 text-[#458393] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-xs flex-shrink-0">
              <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-lg font-black text-slate-900">100% Guaranteed</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Safe & Hassle-Free Bookings</p>
            </div>
          </div>

        </div>

        {/* ------------------- FOLD 2: TESTIMONIAL CARDS GRID ------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#34A99D]/20 shadow-xs sm:shadow-sm hover:shadow-xl hover:border-[#34A99D] transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Floating Quote Icon Tag */}
              <div className="absolute top-5 sm:top-6 right-5 sm:right-6 bg-[#FFF3C8] text-[#458393] p-2 sm:p-2.5 rounded-xl sm:rounded-2xl group-hover:bg-[#34A99D] group-hover:text-white transition duration-300 shadow-xs">
                <Quote size={16} className="sm:w-4 sm:h-4 transform rotate-180" />
              </div>

              <div>
                {/* Tour Category Badge */}
                <div className="inline-flex items-center space-x-1.5 bg-slate-100 text-slate-700 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider mb-4">
                  <CheckCircle2 size={12} className="text-[#34A99D]" />
                  <span>{rev.tag}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-medium italic">
                  "{rev.review}"
                </p>
              </div>

              {/* Bottom Profile Section */}
              <div className="pt-4 sm:pt-5 border-t border-slate-100 flex items-center space-x-3.5 sm:space-x-4">
                
                {/* Avatar with Teal Ring */}
                <div className="relative flex-shrink-0">
                  <img 
                    src={rev.img} 
                    alt={rev.name} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md ring-2 ring-[#34A99D]/30 group-hover:ring-[#34A99D] transition duration-300"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 bg-[#34A99D] text-white rounded-full p-0.5 border-2 border-white">
                    <CheckCircle2 size={8} className="sm:w-2.5 sm:h-2.5" />
                  </div>
                </div>

                {/* User Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-0.5 group-hover:text-[#34A99D] transition-colors truncate">
                    {rev.name}
                  </h3>

                  {/* Location Pin */}
                  <div className="flex items-center text-[10px] sm:text-[11px] text-slate-400 mb-1 font-medium truncate">
                    <MapPin size={11} className="text-[#34A99D] mr-1 flex-shrink-0" />
                    <span className="truncate">{rev.location}</span>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex text-[#a88a42] space-x-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={11} className="sm:w-3 sm:h-3" fill="currentColor" stroke="none" />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* ------------------- FOLD 3: TRAVEL MEMORIES PHOTO STRIP ------------------- */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center max-w-lg mx-auto mb-6 sm:mb-8">
            <div className="inline-flex items-center space-x-1.5 bg-[#FFF3C8] text-[#458393] px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 border border-[#E5CB90]/40">
              <Camera size={13} className="text-[#34A99D]" />
              <span>SNAPS FROM OUR TRAVELERS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Unfiltered Vacation Moments</h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {travelerMemories.map((mem, idx) => (
              <div key={idx} className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-36 sm:h-52 shadow-xs border border-[#34A99D]/20">
                <img 
                  src={mem.image} 
                  alt={mem.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-3 sm:p-4 text-white">
                  <p className="text-[11px] sm:text-xs font-bold truncate">{mem.title}</p>
                  <p className="text-[9px] sm:text-[10px] text-slate-300 flex items-center gap-1 font-medium truncate">
                    <MapPin size={9} className="text-[#34A99D] flex-shrink-0" /> <span className="truncate">{mem.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM HANDWRITTEN TAGLINE */}
        <div className="text-center relative z-10">
          <div className="inline-block relative">
            <span className="font-serif italic text-[#34A99D] font-bold text-base sm:text-2xl tracking-wide">
              Trusted by thousands of travelers around the world. ♡
            </span>
            <svg className="w-full h-2.5 sm:h-3 text-[#E5CB90] absolute -bottom-1.5 sm:-bottom-2 left-0" viewBox="0 0 300 12" fill="none">
              <path d="M2 8 C 80 2, 220 12, 298 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;