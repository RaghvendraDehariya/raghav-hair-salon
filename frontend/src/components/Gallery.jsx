import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/mock';
import { Dialog, DialogContent } from './ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Gallery of Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of stunning hairstyles, creative colors, and
            satisfied clients
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-amber-600 text-white text-xs rounded-full uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors duration-300"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedImage.alt}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full uppercase font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
