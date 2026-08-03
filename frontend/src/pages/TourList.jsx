import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Building2, 
  Utensils, 
  Camera, 
  Car, 
  ArrowRight, 
  Compass,
  Sparkles,
  TrendingUp,
  Tag
} from 'lucide-react';
import axios from 'axios';

const TourList = () => {
  const [tours, setTours] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Default fallback items matching the provided image aesthetics
  const dummyTours = [
    {
      _id: '1',
      title: 'Andaman Escape',
      slug: 'andaman-escape',
      location: 'Port Blair • Havelock • Neil Island',
      duration: '5 Days / 4 Nights',
      price: 24999,
      category: 'Beach',
      isPopular: true,
      badge: '15% OFF',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=800'
    },
    {
      _id: '2',
      title: 'Amazing Himachal',
      slug: 'amazing-himachal',
      location: 'Shimla • Manali • Solang Valley',
      duration: '6 Days / 5 Nights',
      price: 19999,
      category: 'Hills',
      isPopular: false,
      badge: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800'
    },
    {
      _id: '3',
      title: 'Kashmir Paradise',
      slug: 'kashmir-paradise',
      location: 'Srinagar • Gulmarg • Pahalgam',
      duration: '5 Days / 4 Nights',
      price: 22999,
      category: 'Hills',
      isPopular: true,
      badge: 'Top Rated',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=800'
    },
    {
      _id: '4',
      title: 'Royal Rajasthan',
      slug: 'royal-rajasthan',
      location: 'Jaipur • Udaipur • Jodhpur',
      duration: '3 Days / 2 Nights',
      price: 16999,
      category: 'Heritage',
      isPopular: false,
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800'
    }
  ];

  // Quick Category Filter Options
  const categories = ['All', 'Hills', 'Beach', 'Heritage'];

  // Popular Hotspots Preview List (Extra Fold)
  const quickDestinations = [
    { name: 'Kashmir', count: '12+ Packages', img: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=300&auto=format&fit=crop&q=80' },
    { name: 'Goa Beaches', count: '8+ Packages', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&auto=format&fit=crop&q=80' },
    { name: 'Himachal', count: '15+ Packages', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&auto=format&fit=crop&q=80' },
    { name: 'Kerala Backwaters', count: '10+ Packages', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&auto=format&fit=crop&q=80' }
  ];

  const handleViewAllTours = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/tours');
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/tours')
      .then(res => {
        if (res.data && res.data.length > 0) setTours(res.data);
        else setTours(dummyTours);
      })
      .catch(() => setTours(dummyTours));
  }, []);

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredTours = tours.filter(t => selectedCategory === 'All' || t.category === selectedCategory);

  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC] relative overflow-hidden font-sans">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#E5CB90]/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 relative">
          
          <div className="inline-flex items-center space-x-2 bg-[#FFF3C8] border border-[#E5CB90]/50 px-3.5 sm:px-4 py-1.5 rounded-full text-[#458393] text-[10px] sm:text-xs font-extrabold tracking-widest uppercase mb-2.5 sm:mb-3 shadow-xs">
            <Sparkles size={13} className="text-[#34A99D]" />
            <span>OUR TOP POPULAR TOURS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3 leading-tight">
            Explore Our <span className="text-[#34A99D]">Top Popular Tours</span>
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto font-medium">
            Handpicked destinations, curated comfort, and unforgettable travel experiences.
          </p>
        </div>

        {/* ------------------- FOLD 1: QUICK CATEGORY BADGES ------------------- */}
        <div className="flex justify-start sm:justify-center items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10 overflow-x-auto no-scrollbar py-1.5 px-1 -mx-4 sm:mx-0 px-4 sm:px-0 snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs font-extrabold tracking-wide transition-all duration-300 cursor-pointer flex-shrink-0 snap-align-start active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#34A99D] text-slate-950 shadow-md shadow-[#34A99D]/20 scale-105'
                  : 'bg-white text-slate-600 border border-[#34A99D]/20 hover:bg-[#FFF3C8]/50 hover:text-slate-900'
              }`}
            >
              {cat === 'All' ? '🌟 All Destinations' : cat}
            </button>
          ))}
        </div>

        {/* ------------------- FOLD 2: TOURS CARDS GRID ------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {filteredTours.map((tour) => {
            const isLiked = wishlist.includes(tour._id);
            return (
              <div 
                key={tour._id} 
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#34A99D]/20 shadow-xs sm:shadow-sm hover:shadow-xl hover:border-[#34A99D] sm:hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Image Section with Floating Badges */}
                <div className="relative h-48 sm:h-60 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 bg-[#458393]/90 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg sm:rounded-xl shadow-xs">
                    {tour.duration}
                  </div>

                  {/* Special Discount / Tag Badge */}
                  {tour.badge && (
                    <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-3.5 bg-[#E5CB90] text-slate-950 font-black text-[9px] sm:text-[10px] px-2 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg shadow-xs flex items-center gap-1 uppercase tracking-wider">
                      <Tag size={9} className="sm:w-2.5 sm:h-2.5" />
                      <span>{tour.badge}</span>
                    </div>
                  )}

                  {/* Wishlist Heart Icon */}
                  <button 
                    onClick={() => toggleWishlist(tour._id)}
                    className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-950/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 active:scale-90 transition-all"
                  >
                    <Heart size={15} className="sm:w-4 sm:h-4" fill={isLiked ? "currentColor" : "none"} className={isLiked ? "text-red-500" : ""} />
                  </button>
                </div>

                {/* Tour Info Section */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-0.5 sm:mb-1 group-hover:text-[#34A99D] transition-colors truncate">
                      {tour.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] sm:text-[11px] mb-3 sm:mb-4 truncate font-medium">
                      {tour.location}
                    </p>

                    {/* Features Icons Row */}
                    <div className="grid grid-cols-4 gap-1 py-2 sm:py-3 border-y border-slate-100 mb-3 sm:mb-4 text-center">
                      <div className="flex flex-col items-center">
                        <Building2 size={14} className="sm:w-4 sm:h-4 text-[#34A99D] mb-1" />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">Hotels</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Utensils size={14} className="sm:w-4 sm:h-4 text-[#34A99D] mb-1" />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">Meals</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Camera size={14} className="sm:w-4 sm:h-4 text-[#34A99D] mb-1" />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">Sightseeing</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Car size={14} className="sm:w-4 sm:h-4 text-[#34A99D] mb-1" />
                        <span className="text-[9px] sm:text-[10px] text-slate-500 font-bold">Transfers</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="flex items-center justify-between pt-0.5">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 block -mb-0.5 font-medium">Starting from</span>
                      <p className="text-sm sm:text-lg font-black text-[#34A99D]">
                        ₹{tour.price.toLocaleString('en-IN')}
                        <span className="text-[9px] sm:text-[10px] font-normal text-slate-400 ml-0.5">/person</span>
                      </p>
                    </div>

                    <Link 
                      to={`/tours/${tour.slug || tour._id}`} 
                      className="inline-flex items-center space-x-1 text-xs font-extrabold text-[#458393] hover:text-[#34A99D] active:scale-95 group/link transition-all"
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ------------------- FOLD 3: POPULAR HOTSPOTS QUICK STRIP ------------------- */}
        <div className="bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#34A99D]/20 shadow-xs sm:shadow-sm mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-1 sm:gap-2">
            <div className="flex items-center space-x-2">
              <TrendingUp size={18} className="sm:w-5 sm:h-5 text-[#34A99D]" />
              <h3 className="text-base sm:text-lg font-black text-slate-900">Top Trending Destinations</h3>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">Explore handpicked spots across India</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {quickDestinations.map((dest, idx) => (
              <div 
                key={idx}
                onClick={handleViewAllTours}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-24 sm:h-32 cursor-pointer shadow-xs border border-slate-100 active:scale-95 transition-transform"
              >
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-2.5 sm:p-3 flex flex-col justify-end text-white">
                  <p className="text-xs sm:text-sm font-extrabold truncate">{dest.name}</p>
                  <p className="text-[9px] sm:text-[10px] text-[#FFF3C8] font-bold">{dest.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Tours Bottom CTA Button */}
        <div className="text-center">
          <button 
            onClick={handleViewAllTours}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#458393] hover:bg-[#34A99D] active:scale-95 text-white font-extrabold text-xs sm:text-sm px-8 py-3.5 rounded-xl sm:rounded-2xl shadow-md shadow-[#458393]/20 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Compass size={18} />
            <span>View All Tours Catalog</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TourList;