import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import TourList from './pages/TourList';
import TourDetail from './pages/TourDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/tours" element={<TourList />} />
        <Route path="/tours/:slug" element={<TourDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        {/* Protected Admin Route */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;