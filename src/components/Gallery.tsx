import React, { useState } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Relaxing Spa Treatment",
      category: "Spa"
    },
    {
      src: "https://images.pexels.com/photos/3997349/pexels-photo-3997349.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Professional Facial Treatment",
      category: "Facial"
    },
    {
      src: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Hair Styling Session",
      category: "Hair"
    },
    {
      src: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Bridal Makeup",
      category: "Bridal"
    },
    {
      src: "https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Professional Makeup",
      category: "Makeup"
    },
    {
      src: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Nail Art Design",
      category: "Nails"
    },
    {
      src: "https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Beauty Parlour Interior",
      category: "Ambience"
    },
    {
      src: "https://images.pexels.com/photos/3997357/pexels-photo-3997357.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Skincare Treatment",
      category: "Skincare"
    },
    {
      src: "https://images.pexels.com/photos/3997355/pexels-photo-3997355.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      alt: "Hair Treatment",
      category: "Hair"
    }
  ];

  const categories = ["All", "Facial", "Hair", "Makeup", "Bridal", "Spa", "Nails", "Ambience"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blush-50 via-white to-cream-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blush-100 to-peach-100 text-blush-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera size={16} />
            <span>Our Gallery</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Beauty in Every
            <span className="block bg-gradient-to-r from-blush-400 to-peach-400 bg-clip-text text-transparent">
              Moment Captured
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of transformations, treatments, and the serene ambience that makes Glow & Grace your perfect beauty destination.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blush-400 to-peach-400 text-white shadow-lg'
                  : 'bg-white/70 text-gray-600 hover:bg-blush-50 hover:text-blush-600 border border-cream-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Camera className="text-blush-500" size={20} />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs mt-1">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center bg-gradient-to-r from-blush-100 to-peach-100 rounded-3xl p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blush-400 to-peach-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="text-white" size={24} />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Follow Us on Instagram
          </h3>
          <p className="text-gray-600 mb-6">
            Stay updated with our latest work, beauty tips, and behind-the-scenes moments.
          </p>
          <button className="bg-gradient-to-r from-blush-400 to-peach-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            @glowandgracebeauty
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white text-lg font-medium mb-1">{filteredImages[selectedImage].alt}</p>
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {filteredImages[selectedImage].category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;