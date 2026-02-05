import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { salonInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to see you! Drop by our salon or reach out to us with any
            questions
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  {salonInfo.address}
                  <br />
                  {salonInfo.city}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
                >
                  {salonInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href={`mailto:${salonInfo.email}`}
                  className="text-gray-700 hover:text-amber-600 transition-colors duration-300"
                >
                  {salonInfo.email}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business Hours
                </h3>
                <div className="text-gray-700 space-y-1">
                  <p>{salonInfo.hours.weekday}</p>
                  <p>{salonInfo.hours.weekend}</p>
                  <p>{salonInfo.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href={salonInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber-100 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Instagram className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </a>
                <a
                  href={salonInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber-100 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <Facebook className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.1234567890123!2d81.29!3d24.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398418b7d5555555%3A0x1234567890123456!2sAnantpur%2C%20Rewa%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
