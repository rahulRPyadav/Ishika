import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Lock, User, Phone, Eye, EyeOff, 
  Plane, ArrowRight, Compass, ShieldCheck, Sparkles 
} from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords match nahi ho rahe hain!");
      return;
    }

    if (isLogin) {
      alert("Login Successfully!");
    } else {
      alert("Account Created Successfully!");
    }
    
    // Redirect to Home after authentication
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#34A99D]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E5CB90]/15 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Background Flight Path Doodles */}
      <div className="hidden lg:block absolute -left-10 top-20 text-[#34A99D]/30 transform -rotate-12">
        <Compass size={120} strokeWidth={1} />
      </div>
      <div className="hidden lg:block absolute -right-10 bottom-20 text-[#E5CB90]/40 transform rotate-12">
        <Plane size={140} strokeWidth={1} />
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-[#34A99D]/20 w-full max-w-4xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative z-10">
        
        {/* LEFT HERO / BRANDING SECTION */}
        <div 
          className="lg:col-span-5 relative bg-cover bg-center p-8 sm:p-10 text-white flex flex-col justify-between min-h-[250px] lg:min-h-[580px]"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(15, 25, 35, 0.85), rgba(69, 131, 147, 0.90)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80')` 
          }}
        >
          {/* Logo & Brand Header */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 text-white group">
              <div className="bg-[#34A99D] p-2 rounded-2xl group-hover:scale-105 transition shadow-sm">
                <Compass size={22} className="text-white" />
              </div>
              <span className="font-black text-lg tracking-tight">Ishika Tour & Travels</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="my-auto pt-6 lg:pt-0">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-extrabold text-[#FFF3C8] uppercase tracking-widest mb-3 border border-white/20">
              <Sparkles size={12} className="text-[#34A99D]" />
              <span>EXPLORE THE WORLD WITH US</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-black leading-snug tracking-tight mb-2">
              {isLogin ? "Welcome Back, Traveler!" : "Start Your Journey With Us"}
            </h2>
            
            <p className="text-slate-200 text-xs leading-relaxed font-medium">
              {isLogin 
                ? "Login to access your saved itineraries, wishlists, and exclusive member discounts." 
                : "Create an account to unlock custom tour packages, special deals, and seamless booking support."
              }
            </p>
          </div>

          {/* Trust Floating Badge */}
          <div className="hidden lg:flex items-center space-x-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
            <ShieldCheck size={24} className="text-[#FFF3C8] flex-shrink-0" />
            <p className="text-[11px] text-slate-100 font-medium leading-snug">
              100% Safe & Verified Booking Platform
            </p>
          </div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
          
          {/* Toggle Tabs (Login / Register Switcher) */}
          <div>
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-8">
              <button 
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  isLogin ? 'bg-[#34A99D] text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Sign In
              </button>
              <button 
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                  !isLogin ? 'bg-[#34A99D] text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Create Account
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {isLogin ? "Sign In to Your Account" : "Register New Account"}
              </h3>
              <p className="text-xs text-slate-400 font-medium mt-1">
                {isLogin ? "Enter your credentials to continue" : "Fill in your details to get started"}
              </p>
            </div>

            {/* AUTH FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name Field (Register Only) */}
              {!isLogin && (
                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10 font-medium"
                  />
                  <User size={18} className="absolute right-3.5 top-3.5 text-slate-400" />
                </div>
              )}

              {/* Email Address */}
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10 font-medium"
                />
                <Mail size={18} className="absolute right-3.5 top-3.5 text-slate-400" />
              </div>

              {/* Phone Number Field (Register Only) */}
              {!isLogin && (
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10 font-medium"
                  />
                  <Phone size={18} className="absolute right-3.5 top-3.5 text-slate-400" />
                </div>
              )}

              {/* Password */}
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10 font-medium"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Confirm Password (Register Only) */}
              {!isLogin && (
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-[#34A99D] focus:bg-white transition pr-10 font-medium"
                  />
                  <Lock size={18} className="absolute right-3.5 top-3.5 text-slate-400" />
                </div>
              )}

              {/* Forgot Password Link (Login Only) */}
              {isLogin && (
                <div className="flex justify-end">
                  <button 
                    type="button" 
                    className="text-xs font-bold text-[#458393] hover:text-[#34A99D] transition cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#458393] hover:bg-[#34A99D] text-white font-extrabold py-3.5 rounded-2xl text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-[#458393]/20 hover:scale-[1.02] cursor-pointer mt-2"
              >
                <span>{isLogin ? "Sign In" : "Create Account"}</span>
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Divider */}
            <div className="relative my-6 text-center">
              <span className="absolute inset-x-0 top-1/2 h-[1px] bg-slate-200 -translate-y-1/2"></span>
              <span className="relative bg-white px-3 text-[11px] text-slate-400 font-extrabold uppercase tracking-wider">
                OR CONTINUE WITH
              </span>
            </div>

            {/* Social Login Button */}
            <button 
              type="button"
              className="w-full bg-slate-50 hover:bg-[#FFF3C8]/50 border border-slate-200/90 text-slate-700 font-bold py-3 rounded-2xl text-xs flex items-center justify-center space-x-2 transition cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Footer Switch Text */}
          <div className="text-center mt-6">
            <p className="text-xs text-slate-500 font-medium">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#34A99D] font-extrabold hover:underline cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AuthPage;