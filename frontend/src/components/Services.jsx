import React from 'react';
import { Scissors, User, Palette, Wind, Sparkles, Crown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { services } from '../data/mock';

const iconMap = {
  Scissors,
  User,
  Palette,
  Wind,
  Sparkles,
  Crown
};

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From precision cuts to transformative color, we offer a full range of
            services to help you look and feel your absolute best
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-gray-200 hover:border-amber-400 overflow-hidden"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-2xl font-bold text-amber-600">
                        {service.price}
                      </p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <Button
                      onClick={scrollToBooking}
                      variant="outline"
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service Is Right for You?
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Book a complimentary consultation with one of our expert stylists to
            discuss your hair goals and find the perfect service
          </p>
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
