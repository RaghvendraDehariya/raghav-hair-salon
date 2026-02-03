import React from 'react';
import { Card, CardContent } from './ui/card';
import { team } from '../data/mock';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Meet Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Expert Stylists, Passionate Artists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team brings years of experience, creativity, and dedication
            to every appointment
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <Card
              key={member.id}
              className="group overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-semibold text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-700 font-medium text-sm mb-3">
                  {member.specialty}
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">{member.experience}</span> of
                    expertise
                  </p>
                  <p className="text-sm text-gray-600 italic leading-relaxed">
                    "{member.bio}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Talented Team
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate, skilled stylists who share our
            commitment to excellence and client satisfaction
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View Career Opportunities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;
