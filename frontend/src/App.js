import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "@/App.css";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import { Toaster } from "@/components/ui/sonner";

// Main Salon Website
const SalonSite = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Portfolio Page - Your Business Card */}
          <Route path="/portfolio" element={<Portfolio />} />
          
          {/* Main Salon Website */}
          <Route path="/" element={<SalonSite />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;