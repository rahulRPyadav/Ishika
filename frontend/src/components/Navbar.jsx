import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, User, Send, Menu, X, Compass } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Tours", path: "/tours" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50">
      
      {/* 1. TOP HEADER BAR */}
      <div className="bg-[#0F1923] text-slate-300 text-xs py-2 px-4 sm:px-8 flex justify-between items-center border-b border-slate-800">
        
        {/* Contact Info */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="tel:+917891604638"
            className="flex items-center gap-1.5 hover:text-[#FFF3C8] transition font-medium"
          >
            <Phone size={13} className="text-[#34A99D]" />
            <span>+91 7891604638</span>
          </a>
          <a
            href="mailto:rahulk37255@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#FFF3C8] transition font-medium"
          >
            <Mail size={13} className="text-[#34A99D]" />
            <span>rahulk37255@gmail.com</span>
          </a>
        </div>

        {/* Right Auth Link */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-1.5 bg-[#16232D] hover:bg-[#34A99D] hover:text-slate-950 px-3 py-1 rounded-full text-[11px] font-bold text-[#FFF3C8] transition border border-slate-700/80"
          >
            <User size={13} />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-[#34A99D]/15 shadow-sm py-3.5 px-4 sm:px-8 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-[#34A99D] to-[#458393] text-white p-2.5 rounded-2xl shadow-md group-hover:scale-105 transition-transform duration-300">
            <Compass size={22} className="text-white" />
          </div>
          <div>
            <span className="text-xl font-black text-slate-900 leading-none block">
              Ishika
            </span>
            <span className="text-[10px] tracking-widest text-[#34A99D] uppercase font-extrabold block">
              TOUR & TRAVELS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-7 font-bold text-xs sm:text-sm text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors py-1 relative ${
                isActive(link.path)
                  ? "text-[#34A99D] font-black"
                  : "hover:text-[#34A99D]"
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#34A99D] rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/tours"
            className="hidden sm:inline-flex items-center space-x-1.5 bg-[#458393] hover:bg-[#34A99D] text-white px-5 py-2.5 rounded-2xl font-extrabold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#458393]/20 hover:scale-105"
          >
            <span>Book Now</span>
            <span>🚀</span>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#34A99D] transition focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </nav>

      {/* 3. MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-5 flex flex-col space-y-4 font-bold text-sm text-slate-700 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-1.5 transition-colors ${
                isActive(link.path) ? "text-[#34A99D]" : "hover:text-[#34A99D]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/tours"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#458393] text-white text-center py-3 rounded-2xl font-extrabold text-xs shadow-md"
          >
            Book Now 🚀
          </Link>
        </div>
      )}

    </header>
  );
};

export default Navbar;