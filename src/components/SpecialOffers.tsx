import React from 'react';
import { Gift, Calendar, Crown, Sparkles, Clock, Star } from 'lucide-react';

const SpecialOffers = () => {
  const offers = [
    {
      icon: Crown,
      title: "Bridal Bliss Package",
      subtitle: "Complete Wedding Makeover",
      description: "Pre-bridal treatments, trial makeup, wedding day styling, and post-wedding glow session",
      originalPrice: "₹25,000",
      offerPrice: "₹18,000",
      validity: "Valid till March 2025",
      features: ["3 Pre-bridal facials", "Hair & makeup trial", "Wedding day styling", "Mehendi design", "Post-wedding facial"],
      gradient: "from-rose-400 to-pink-400",
      bgGradient: "from-rose-50 to-pink-50",
      popular: true
    },
    {
      icon: Sparkles,
      title: "Festive Glow Special",
      subtitle: "Perfect for Celebrations",
      description: "Get festival-ready with our signature facial, hair styling, and makeup combo",
      originalPrice: "₹4,500",
      offerPrice: "₹3,200",
      validity: "Valid till February 2025",
      features: ["Gold facial treatment", "Hair wash & styling", "Party makeup", "Complimentary nail art", "Free touch-up kit"],
      gradient: "from-gold-400 to-yellow-400",
      bgGradient: "from-gold-50 to-yellow-50"
    },
    {
      icon: Gift,
      title: "New Client Welcome",
      subtitle: "First Visit Special",
      description: "Experience our premium services with exclusive discounts for new clients",
      originalPrice: "₹2,000",
      offerPrice: "₹1,200",
      validity: "Valid for 30 days",
      features: ["Choice of any facial", "Hair consultation", "Eyebrow shaping", "Hand & foot massage", "Product samples"],
      gradient: "from-peach-400 to-orange-400",
      bgGradient: "from-peach-50 to-orange-50"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 via-white to-blush-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-100 to-peach-100 text-gold-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gift size={16} />
            <span>Special Offers</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Exclusive Beauty
            <span className="block bg-gradient-to-r from-gold-400 to-peach-400 bg-clip-text text-transparent">
              Packages & Deals
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated packages designed to give you the ultimate beauty experience at incredible value.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br ${offer.bgGradient} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                offer.popular ? 'lg:scale-105 border-2 border-gold-200' : ''
              }`}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gold-400 to-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Star size={12} />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${offer.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <offer.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{offer.title}</h3>
                  <p className="text-white/90 text-sm">{offer.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-gray-800">{offer.offerPrice}</span>
                  <span className="text-lg text-gray-400 line-through">{offer.originalPrice}</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                    Save {Math.round(((parseInt(offer.originalPrice.replace('₹', '').replace(',', '')) - parseInt(offer.offerPrice.replace('₹', '').replace(',', ''))) / parseInt(offer.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {offer.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blush-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Validity */}
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-6">
                  <Clock size={14} />
                  <span>{offer.validity}</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${offer.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-cream-200">
          <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to create a custom package tailored to your specific beauty needs and budget.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blush-400 to-peach-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;