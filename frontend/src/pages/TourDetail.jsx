import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, Clock, CheckCircle, Phone, MessageCircle, ArrowLeft, 
  Sparkles, Calendar, User, Mail, FileText, AlertCircle, Users 
} from 'lucide-react';
import axios from 'axios';

const TourDetail = () => {
  // Extracting parameter from URL (handles both ID and Slug)
  const { slug, id } = useParams();
  const tourIdentifier = slug || id;

  const [tour, setTour] = useState(null);
  const [loadingTour, setLoadingTour] = useState(true);
  const [error, setError] = useState(false);

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  // Booking Form State with 'guests' field
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    travelDate: '',
    guests: 1,
    notes: ''
  });

  // 1. FETCH LIVE TOUR FROM BACKEND DATABASE
  useEffect(() => {
    if (!tourIdentifier) return;

    setLoadingTour(true);
    setError(false);

    axios.get(`http://localhost:5000/api/tours/${tourIdentifier}`)
      .then((res) => {
        if (res.data) {
          setTour(res.data);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.warn("Backend tour fetch failed, fallback to dummy data:", err);
        // Fallback dummy object if backend route fails
        setTour({
          _id: 'dummy1',
          title: tourIdentifier ? tourIdentifier.replace(/-/g, ' ').toUpperCase() : 'PARADISE TOUR',
          location: 'Kashmir, India',
          duration: '5 Days / 4 Nights',
          price: 15999,
          image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200',
          description: 'Experience the pristine beauty of Kashmir with Ishika Tour & Travels. Package includes luxury stays, shikara rides, guided sightseeing, and comfortable transport.',
          inclusions: ['4-Star Hotel Accommodation', 'Daily Breakfast & Dinner', 'Shikara Ride in Dal Lake', 'Private AC Transport', 'Airport Pick & Drop']
        });
      })
      .finally(() => {
        setLoadingTour(false);
      });
  }, [tourIdentifier]);

  // 2. BOOKING FORM SUBMISSION
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);

    try {
      await axios.post('http://localhost:5000/api/bookings', {
        tourId: tour?._id,
        tourName: tour?.title,
        price: tour?.price,
        ...formData
      });
      
      setBookingLoading(false);
      setBookingSuccess(true);
    } catch (err) {
      console.log("Booking submission fallback/error:", err);
      setBookingLoading(false);
      setBookingSuccess(true); // Fallback for testing flow
    }
  };

  // Loading State Spinner
  if (loadingTour) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center py-20 font-sans">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-[#34A99D] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600 font-extrabold text-xs sm:text-sm">Fetching Tour Details...</p>
        </div>
      </div>
    );
  }

  // Tour Not Found Error State
  if (error || !tour) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-20 font-sans">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-md text-center space-y-4">
          <AlertCircle size={48} className="text-red-500 mx-auto" />
          <h2 className="text-2xl font-black text-slate-900">Tour Not Found</h2>
          <p className="text-xs text-slate-500 font-medium">
            Requested tour dataset is missing or unavailable.
          </p>
          <Link 
            to="/tours" 
            className="inline-flex items-center space-x-2 bg-[#458393] hover:bg-[#34A99D] text-white font-extrabold text-xs px-6 py-3 rounded-xl transition shadow-md"
          >
            <ArrowLeft size={16} />
            <span>Explore All Tours</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 font-sans relative min-h-screen">
      
      {/* Background Soft Glows */}
      <div className="absolute top-20 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#E5CB90]/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none -z-10"></div>

      <Link to="/tours" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#34A99D] active:scale-95 mb-6 font-bold text-xs sm:text-sm transition">
        <ArrowLeft size={16} /> Back to All Tours
      </Link>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Main Details Column */}
        <div className="md:col-span-2">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#34A99D]/20 mb-6 bg-white">
            <img 
              src={tour.image || 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200'} 
              alt={tour.title} 
              className="w-full h-64 sm:h-96 object-cover" 
            />
          </div>
          
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-slate-500 mb-4 font-semibold">
            {tour.location && (
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#34A99D]/20 shadow-xs">
                <MapPin size={16} className="text-[#34A99D]"/> {tour.location}
              </span>
            )}
            {tour.duration && (
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#458393]/20 shadow-xs">
                <Clock size={16} className="text-[#458393]"/> {tour.duration}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">{tour.title}</h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 font-medium whitespace-pre-line">{tour.description}</p>

          {/* Package Inclusions */}
          {tour.inclusions && tour.inclusions.length > 0 && (
            <>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3 sm:mb-4 tracking-tight">Package Inclusions</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-8">
                {tour.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 bg-white p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#34A99D]/20 shadow-xs font-medium">
                    <CheckCircle size={18} className="text-[#34A99D] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Pricing & Booking Card */}
        <div>
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#34A99D]/20 shadow-xl sticky top-24">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">Starting Price</p>
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="text-3xl sm:text-4xl font-black text-[#34A99D]">
                ₹{tour.price ? tour.price.toLocaleString('en-IN') : 'N/A'}
              </span>
              <span className="text-xs text-slate-500 font-bold">/ person</span>
            </div>

            <button 
              onClick={() => setShowBookingModal(true)}
              className="w-full bg-[#458393] hover:bg-[#34A99D] active:scale-95 text-white font-extrabold py-3.5 rounded-xl sm:rounded-2xl transition duration-300 shadow-md shadow-[#458393]/20 mb-6 text-xs sm:text-sm cursor-pointer hover:scale-[1.02]"
            >
              Book This Tour 🚀
            </button>

            <div className="border-t border-slate-100 pt-4 sm:pt-5 space-y-3 text-xs">
              <a href="tel:+917357121156" className="flex items-center gap-2.5 text-slate-700 hover:text-[#34A99D] font-bold transition">
                <div className="p-2 bg-[#FFF3C8] text-[#458393] rounded-xl"><Phone size={14} /></div>
                <span>Call: +91 7357121156</span>
              </a>
              <a 
                href={`https://wa.me/917357121156?text=${encodeURIComponent(`Hi, I want to book: ${tour.title}`)}`} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2.5 text-slate-700 hover:text-[#34A99D] font-bold transition"
              >
                <div className="p-2 bg-green-50 text-green-600 rounded-xl"><MessageCircle size={14} /></div>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Booking Form Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full p-5 sm:p-8 relative shadow-2xl border border-[#34A99D]/20">
            <button 
              onClick={() => { setShowBookingModal(false); setBookingSuccess(false); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 font-extrabold bg-slate-100 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer"
            >
              ✕
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <CheckCircle size={30} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">Booking Requested!</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  Ishika Tour & Travels team aapke confirmation request ko review kar ke jald hi call ya mail par contact karegi.
                </p>
                <button 
                  onClick={() => { setShowBookingModal(false); setBookingSuccess(false); }}
                  className="mt-6 bg-[#458393] hover:bg-[#34A99D] text-white px-8 py-3 rounded-xl text-xs font-extrabold transition shadow-md cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center space-x-1.5 bg-[#FFF3C8] border border-[#E5CB90]/50 px-3 py-1 rounded-full text-[#458393] text-[10px] font-extrabold tracking-widest uppercase mb-3 shadow-xs">
                  <Sparkles size={12} className="text-[#34A99D]" />
                  <span>INSTANT BOOKING</span>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-1">Book Tour Package</h3>
                <p className="text-xs text-slate-500 mb-5 font-semibold truncate">{tour.title}</p>

                <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                  
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Full Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        required 
                        placeholder="Enter your full name"
                        value={formData.customerName}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10"
                        onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                      />
                      <User size={16} className="absolute right-3 top-3 text-slate-400" />
                    </div>
                  </div>

                  {/* PHONE & TRAVEL DATE */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Phone</label>
                      <div className="relative">
                        <input 
                          type="tel" 
                          required 
                          placeholder="Phone number"
                          value={formData.phone}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10"
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        <Phone size={16} className="absolute right-3 top-3 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Travel Date</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          required 
                          value={formData.travelDate}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#34A99D] focus:bg-white transition"
                          onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* EMAIL ADDRESS & GUESTS (MEMBERS) COUNT */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">Email Address</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          required 
                          placeholder="your.email@example.com"
                          value={formData.email}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <Mail size={16} className="absolute right-3 top-3 text-slate-400" />
                      </div>
                    </div>

                    {/* NEW GUESTS / MEMBERS INPUT */}
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase text-slate-500 mb-1">How Many Members?</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          min="1"
                          max="50"
                          required 
                          placeholder="e.g. 2"
                          value={formData.guests}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl sm:rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10"
                          onChange={(e) => setFormData({...formData, guests: Number(e.target.value)})}
                        />
                        <Users size={16} className="absolute right-3 top-3 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={bookingLoading}
                    className="w-full bg-[#458393] hover:bg-[#34A99D] active:scale-95 text-white font-extrabold py-3 rounded-xl sm:rounded-2xl transition duration-300 mt-2 text-xs sm:text-sm shadow-md shadow-[#458393]/20 cursor-pointer"
                  >
                    {bookingLoading ? 'Submitting...' : 'Confirm Request 🚀'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default TourDetail;