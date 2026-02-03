import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star key={index} className="w-5 h-5 fill-amber-400 text-amber-400" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Client Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about
            their experiences
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border-gray-200 hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(5)}
            </div>
            <p className="text-4xl font-bold text-gray-900 mb-2">4.9 / 5.0</p>
            <p className="text-gray-600">Based on 500+ verified reviews</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
                Google Reviews
              </span>
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
                Yelp
              </span>
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
