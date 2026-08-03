import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from './Testimonials';
import TourList from './TourList';

const Home = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Soft Glows for Seamless Section Blending */}
      <div className="absolute top-40 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-[#34A99D]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[40%] right-0 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-[#E5CB90]/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10"></div>

      {/* Hero Banner Top Par */}
      <section className="relative w-full">
        <Hero />
      </section>

      {/* Featured Tours Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 relative z-10">
        {/* Tour Cards Grid */}
        <TourList isHomePage={true} />
      </section>

      {/* Landing Page Sections with Seamless Stacking */}
      <section className="relative z-10 space-y-6 sm:space-y-12">
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
      </section>

    </div>
  );
};

export default Home;