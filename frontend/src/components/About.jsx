import React from 'react';
import { Award, Heart, Users, Sparkles } from 'lucide-react';
import { salonInfo } from '../data/mock';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Certified stylists with continuous education in latest techniques'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Every consultation is tailored to your unique style and needs'
    },
    {
      icon: Users,
      title: 'Inclusive Atmosphere',
      description: 'A welcoming space where everyone feels valued and comfortable'
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'Only the finest professional-grade products for optimal results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Journey Since 2020
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc3MDE1NTU3Nnww&ixlib=rb-4.1.0&q=85"
                alt="Salon interior"
                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Founded in 2020, Raghav Hair Salon has been transforming hair and boosting confidence in Rewa. Started by Raghvendra Dehariya, our passion for hair artistry and commitment to excellence has made us a trusted destination for quality hair care at affordable prices.
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              At Raghav Hair Salon, we believe that beautiful hair is an art form. Our mission is to provide exceptional service in a welcoming environment where every client feels valued, pampered, and leaves feeling their absolute best. We combine modern techniques with traditional care to deliver outstanding results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Expert craftsmanship and continuous learning</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Personalized service for every client</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">Quality products at affordable prices</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <p className="text-gray-700">A warm, friendly atmosphere for all</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
