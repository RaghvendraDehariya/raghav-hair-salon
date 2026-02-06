import React from 'react';
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
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
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
      <Toaster />
    </div>
  );
}

export default App;