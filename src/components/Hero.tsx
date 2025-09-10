import React from 'react';
import { Sparkles, Calendar, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Beauty Parlour Ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-bounce-gentle hidden lg:block">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Sparkles className="text-gold-300" size={24} />
        </div>
      </div>
      
      <div className="absolute top-1/3 left-10 animate-bounce-gentle hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-blush-400/30 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Star className="text-white" size={16} />
        </div>
      </div>

      <div className="absolute bottom-1/4 right-20 animate-bounce-gentle hidden lg:block" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 bg-peach-400/30 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Calendar className="text-white" size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <span className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Premium Beauty Experience</span>
            </span>
          </div>
          
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-none">
              Unveil Your
              <span className="block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent">
                True Glow
              </span>
            </h1>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Experience the art of beauty at Glow & Grace, where every treatment is crafted to enhance your natural radiance and inner confidence.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group bg-gradient-to-r from-blush-400 to-peach-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Calendar className="group-hover:rotate-12 transition-transform duration-300" size={20} />
              <span>Book Appointment</span>
            </button>
            
            <button
              onClick={() => scrollToSection('#services')}
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Sparkles size={20} />
              <span>Our Services</span>
            </button>
          </div>

          {/* Stats */}
          <div className="animate-slide-up mt-12 pt-8 border-t border-white/20" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300 mb-1">500+</div>
                <div className="text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300 mb-1">5+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-300 mb-1">20+</div>
                <div className="text-sm text-white/70">Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;