import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  Award,
  Users,
  ChevronRight,
  ArrowUp,
  Sparkles,
  X,
  Compass,
} from "lucide-react";

const Footer = () => {
  // State for "Feature Coming Soon" Modal
  const [comingSoonModal, setComingSoonModal] = useState({
    isOpen: false,
    title: "",
    category: "",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFutureFeatureClick = (e, itemTitle, categoryName) => {
    e.preventDefault();
    setComingSoonModal({
      isOpen: true,
      title: itemTitle,
      category: categoryName,
    });
  };

  const closeComingSoonModal = () => {
    setComingSoonModal({ isOpen: false, title: "", category: "" });
  };

  return (
    <footer className="bg-[#F8FAFC] pt-8 sm:pt-12 font-sans border-t border-slate-200/60 relative overflow-hidden">
      {/* Background Pastel Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-64 sm:w-80 h-64 sm:h-80 bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[#E5CB90]/15 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10"></div>

      {/* 1. Newsletter Section (Teal-Ocean Gradient Banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="bg-gradient-to-r from-[#458393] via-[#34A99D] to-[#458393] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl shadow-[#34A99D]/15 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden text-white">
          <div className="max-w-xl z-10 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-black tracking-widest text-[#FFF3C8] uppercase mb-2.5 sm:mb-3 border border-white/20">
              <Mail size={12} />
              <span>STAY UPDATED</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
              Let's Stay in Touch!
            </h3>
            <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed">
              Subscribe to our newsletter for exclusive travel deals, curated
              itineraries & seasonal discounts directly in your inbox.
            </p>
          </div>

          <form
            className="w-full md:w-auto flex flex-col sm:flex-row gap-2.5 sm:gap-3 z-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative flex-1">
              <Mail
                className="absolute left-4 top-3.5 sm:top-4 text-slate-400"
                size={16}
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:w-72 md:w-80 pl-11 pr-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border border-white/30 focus:outline-none focus:border-[#E5CB90] bg-white text-slate-900 text-xs sm:text-sm font-medium shadow-xs"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#FFF3C8] hover:bg-[#E5CB90] active:scale-95 text-slate-950 font-extrabold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl transition duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md hover:scale-105 cursor-pointer"
            >
              <span>Subscribe</span>
              <Send size={15} className="text-slate-950" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="bg-gradient-to-br from-[#34A99D] to-[#458393] text-white p-2.5 rounded-2xl shadow-md">
                <Send size={20} />
              </div>
              <div>
                <span className="text-lg font-black text-slate-900 leading-none block">
                  Ishika
                </span>
                <span className="text-[10px] tracking-widest text-[#34A99D] uppercase font-extrabold">
                  Tour & Travels
                </span>
              </div>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed font-medium">
              Ishika Tour and Travels is your trusted travel partner for
              unforgettable journeys around the world.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-3 sm:mb-4 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#34A99D] flex items-center gap-1.5 transition"
                >
                  <ChevronRight size={14} className="text-[#34A99D]" /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#34A99D] flex items-center gap-1.5 transition"
                >
                  <ChevronRight size={14} className="text-[#34A99D]" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="hover:text-[#34A99D] flex items-center gap-1.5 transition"
                >
                  <ChevronRight size={14} className="text-[#34A99D]" /> Our
                  Tours
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#34A99D] flex items-center gap-1.5 transition"
                >
                  <ChevronRight size={14} className="text-[#34A99D]" /> Contact
                  Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Top Destinations */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-3 sm:mb-4 tracking-wider">
              Top Destinations
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {[
                "Himachal Pradesh",
                "Kashmir",
                "Rajasthan",
                "Kerala",
                "Uttarakhand",
                "Goa",
              ].map((dest, i) => (
                <li key={i}>
                  <button
                    onClick={(e) =>
                      handleFutureFeatureClick(e, dest, "Destination")
                    }
                    className="hover:text-[#34A99D] flex items-center gap-1.5 transition text-left cursor-pointer"
                  >
                    <ChevronRight size={14} className="text-[#34A99D]" /> {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Travel Services */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-3 sm:mb-4 tracking-wider">
              Travel Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {[
                "Flight Booking",
                "Hotel Booking",
                "Holiday Packages",
                "Custom Tours",
                "Group Tours",
                "Travel Insurance",
              ].map((service, i) => (
                <li key={i}>
                  <button
                    onClick={(e) =>
                      handleFutureFeatureClick(e, service, "Service")
                    }
                    className="hover:text-[#34A99D] flex items-center gap-1.5 transition text-left cursor-pointer"
                  >
                    <ChevronRight size={14} className="text-[#34A99D]" />{" "}
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-slate-900 font-extrabold text-xs uppercase mb-3 sm:mb-4 tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#34A99D] shrink-0 mt-0.5" />
                <a
                  href="tel:+917357121156"
                  className="hover:text-[#34A99D] font-semibold"
                >
                  +91 7357121156
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#34A99D] shrink-0 mt-0.5" />
                <a
                  href="mailto:ranand.tech@gmail.com"
                  className="hover:text-[#34A99D] break-all"
                >
                  ranand.tech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#34A99D] shrink-0 mt-0.5" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-[#34A99D] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  <p className="text-[10px] text-slate-400 font-semibold">
                    Sunday: Closed
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Value Badges Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80">
          <div className="flex items-center justify-start gap-2.5 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#34A99D]/20 shadow-xs">
            <Award className="text-[#34A99D] shrink-0" size={20} />
            <div className="text-left min-w-0">
              <p className="font-extrabold text-[11px] sm:text-xs text-slate-900 truncate">
                Best Price Guarantee
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">
                Get the best deals
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#458393]/20 shadow-xs">
            <Headphones className="text-[#458393] shrink-0" size={20} />
            <div className="text-left min-w-0">
              <p className="font-extrabold text-[11px] sm:text-xs text-slate-900 truncate">
                24/7 Support
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">
                We are here to help
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#E5CB90]/40 shadow-xs">
            <ShieldCheck className="text-[#a88a42] shrink-0" size={20} />
            <div className="text-left min-w-0">
              <p className="font-extrabold text-[11px] sm:text-xs text-slate-900 truncate">
                Safe & Secure
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">
                Your safety is priority
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2.5 bg-white p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#FFF3C8] shadow-xs">
            <Users className="text-[#34A99D] shrink-0" size={20} />
            <div className="text-left min-w-0">
              <p className="font-extrabold text-[11px] sm:text-xs text-slate-900 truncate">
                Trusted Travelers
              </p>
              <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">
                1000+ happy clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-[#0F1923] text-slate-400 py-4 sm:py-5 text-xs font-medium border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-[11px] sm:text-xs">
            <p>
              © {new Date().getFullYear()} Ishika Tour & Travels. All Rights
              Reserved.
            </p>
            <span className="hidden sm:inline text-slate-700">|</span>

            {/* Developer Credit Tag with LinkedIn Link */}
            <p className="text-slate-400 flex items-center gap-1">
              Developed by
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#34A99D] hover:text-[#FFF3C8] font-bold underline underline-offset-2 flex items-center gap-1 transition"
              >
                <span>Rahul RP Yadav</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px]">
            <a href="#" className="hover:text-[#FFF3C8] transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#FFF3C8] transition">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#FFF3C8] transition">
              Refund Policy
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 sm:p-2.5 bg-[#16232D] hover:bg-[#34A99D] text-white rounded-xl transition duration-300 border border-slate-700/80 cursor-pointer active:scale-90"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* 4. FUTURE SERVICE / DESTINATION ANNOUNCEMENT MODAL */}
      {comingSoonModal.isOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center relative shadow-2xl border border-[#34A99D]/30">
            {/* Close Button */}
            <button
              onClick={closeComingSoonModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Icon & Sparkles Header */}
            <div className="bg-[#FFF3C8] text-[#458393] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#E5CB90]/50 shadow-xs">
              <Compass size={28} className="text-[#34A99D] animate-spin-slow" />
            </div>

            <div className="inline-flex items-center space-x-1.5 bg-[#FFF3C8] border border-[#E5CB90]/50 px-3 py-1 rounded-full text-[#458393] text-[10px] font-extrabold uppercase tracking-widest mb-2">
              <Sparkles size={11} className="text-[#34A99D]" />
              <span>COMING SOON</span>
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-1">
              {comingSoonModal.title}
            </h3>

            <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">
              This dedicated {comingSoonModal.category.toLowerCase()} page and
              customized packages will be launched in future updates! Stay
              tuned.
            </p>

            <button
              onClick={closeComingSoonModal}
              className="w-full bg-[#458393] hover:bg-[#34A99D] active:scale-95 text-white font-extrabold py-3 rounded-2xl text-xs transition-all duration-300 shadow-md shadow-[#458393]/20 cursor-pointer"
            >
              Got It, Thanks!
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
