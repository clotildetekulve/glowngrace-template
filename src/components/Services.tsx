import React from 'react';
import { Sparkles, Scissors, Palette, Crown, Hand, Waves, Star, ArrowRight } from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blush-50 via-white to-peach-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-peach-100 to-blush-100 text-peach-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star size={16} />
            <span>Our Services</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Discover Your Perfect
            <span className="block bg-gradient-to-r from-peach-400 to-blush-400 bg-clip-text text-transparent">
              Beauty Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From rejuvenating facials to stunning bridal makeovers, we offer a complete range of beauty services designed to make you look and feel your absolute best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Facial Treatments */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gold-400 to-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </div>
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3997349/pexels-photo-3997349.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Facial Treatments"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Facial Treatments
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Rejuvenating facials using premium products for glowing, healthy skin
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹1,500
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Hair Styling */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Hair Styling"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Scissors className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Hair Styling
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Expert cuts, colors, and styling for every occasion and hair type
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹800
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Makeup Services */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Makeup Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Palette className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Makeup Services
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Professional makeup for parties, events, and special occasions
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹2,000
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Bridal Packages - Featured */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:col-span-2">
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blush-400 to-peach-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured Package
            </div>
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop"
                alt="Bridal Packages"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Crown className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Bridal Packages
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Complete bridal makeover packages for your special day
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹15,000
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Manicure & Pedicure */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Manicure & Pedicure"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Hand className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Manicure & Pedicure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Luxurious nail care treatments for beautiful hands and feet
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹600
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Spa Treatments */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                alt="Spa Treatments"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Waves className="text-blush-500" size={20} />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blush-600 transition-colors">
                Spa Treatments
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Relaxing body treatments and massages for complete wellness
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-peach-600">
                  Starting ₹2,500
                </div>
                <button
                  onClick={scrollToContact}
                  className="flex items-center space-x-1 text-blush-600 font-medium text-sm hover:text-blush-700 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blush-100 to-peach-100 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
            Ready to Transform Your Look?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your appointment today and let our expert team help you discover your most beautiful self. We're here to make every visit a luxurious experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blush-400 to-peach-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Sparkles size={20} />
              <span>Book Consultation</span>
            </button>
            <button className="border-2 border-blush-300 text-blush-600 px-8 py-4 rounded-full font-semibold hover:bg-blush-50 transition-all duration-300 hover:scale-105">
              View Price List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;