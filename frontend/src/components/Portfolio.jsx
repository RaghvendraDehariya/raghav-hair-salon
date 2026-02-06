import React from 'react';
import { ExternalLink, Mail, Phone, MapPin, CheckCircle, Code, Smartphone, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Raghav Hair Salon",
      category: "Beauty & Wellness",
      description: "Professional salon website with booking system, gallery, customer reviews, and Google Maps integration",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&q=85",
      features: ["Online Booking", "Customer Reviews", "Gallery", "Mobile Responsive"],
      tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB"],
      link: "#"
    }
  ];

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technology",
      price: "Starting from ₹8,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Works perfectly on all devices - mobile, tablet, desktop",
      price: "Included in all packages"
    },
    {
      icon: Zap,
      title: "Fast & Modern",
      description: "Lightning-fast websites with beautiful designs",
      price: "Standard feature"
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹10,000",
      features: [
        "5-6 page website",
        "Mobile responsive",
        "Contact form",
        "Google Maps",
        "Social media links",
        "1 month support"
      ]
    },
    {
      name: "Standard",
      price: "₹25,000",
      popular: true,
      features: [
        "Everything in Basic",
        "Custom design",
        "Gallery & Testimonials",
        "Booking/Inquiry forms",
        "WhatsApp integration",
        "3 months support",
        "Basic SEO"
      ]
    },
    {
      name: "Premium",
      price: "₹50,000",
      features: [
        "Everything in Standard",
        "Admin panel",
        "Database integration",
        "Email notifications",
        "Advanced features",
        "6 months support",
        "Complete training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Website Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Creating Beautiful, Modern Websites for Local Businesses in Rewa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="w-5 h-5 mr-2" />
              +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-amber-600 text-amber-600">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>Anantpur, Rewa, Madhya Pradesh</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Me?</h2>
            <p className="text-xl text-gray-600">Affordable, Professional, Fast</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-amber-600 transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-amber-600 font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Work</h2>
            <p className="text-xl text-gray-600">Recent Projects</p>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <span className="text-sm text-amber-600 font-semibold">{project.category}</span>
                    <h3 className="text-3xl font-bold text-gray-900 mt-2 mb-4">{project.name}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Technology:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Website
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-600">Choose the package that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${
                  pkg.popular ? 'border-4 border-amber-600 shadow-2xl scale-105' : 'border-2'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-amber-600">{pkg.price}</div>
                  <p className="text-gray-500 text-sm">One-time payment</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create a beautiful website for your business today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 98765 43210
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-amber-600">
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Web Developer Rewa. All rights reserved.</p>
        <p className="text-gray-400 mt-2">Creating professional websites for local businesses</p>
      </footer>
    </div>
  );
};

export default Portfolio;