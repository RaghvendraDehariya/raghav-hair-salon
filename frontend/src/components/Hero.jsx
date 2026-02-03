import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwyfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3MDE1NTU3Nnww&ixlib=rb-4.1.0&q=85"
          alt="Luxury hair salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white text-sm font-medium">
              Luxury Hair Care Since 2010
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Where Beauty
            <br />
            <span className="text-amber-400">Meets Artistry</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Experience transformation through expert styling, premium services, and
            personalized care in our elegant salon
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="bg-amber-600 hover:bg-amber-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-amber-400">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-amber-400">10K+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <div className="text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-300">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
