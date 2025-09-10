import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      service: "Bridal Package",
      rating: 5,
      text: "Glow & Grace made my wedding day absolutely perfect! The team was so professional and caring. My makeup lasted the entire day and I felt like a princess. The pre-bridal treatments gave me such glowing skin. Highly recommend!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      location: "Mumbai"
    },
    {
      name: "Anita Patel",
      service: "Facial Treatment",
      rating: 5,
      text: "I've been coming here for 2 years now and the results are amazing! My skin has never looked better. The gold facial is my favorite - it gives such a natural glow. The staff is knowledgeable and the ambience is so relaxing.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      location: "Delhi"
    },
    {
      name: "Kavya Reddy",
      service: "Hair Styling",
      rating: 5,
      text: "The hair stylists here are true artists! They completely transformed my look for my sister's wedding. The color and cut were exactly what I wanted. Everyone complimented my hair that day. Will definitely be back!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      location: "Bangalore"
    },
    {
      name: "Meera Gupta",
      service: "Spa Treatment",
      rating: 5,
      text: "What a wonderful experience! The spa treatments here are heavenly. I came in feeling stressed and left feeling completely rejuvenated. The massage was therapeutic and the facial left my skin glowing. Pure bliss!",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      location: "Pune"
    },
    {
      name: "Riya Singh",
      service: "Makeup Service",
      rating: 5,
      text: "The makeup artist here is incredibly talented! She understood exactly what I wanted for my engagement party. The makeup was flawless and lasted all night. I received so many compliments. Thank you for making me feel beautiful!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      location: "Chennai"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-peach-50 via-white to-blush-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-peach-100 to-gold-100 text-peach-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart size={16} />
            <span>Client Love</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            What Our Clients
            <span className="block bg-gradient-to-r from-peach-400 to-gold-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our beautiful clients have to say about their transformative experiences at Glow & Grace.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-cream-200">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-peach-100 to-gold-100 rounded-full flex items-center justify-center">
                <Quote className="text-peach-500" size={20} />
              </div>

              {/* Navigation Buttons */}
              <div className="absolute top-6 right-6 flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                >
                  <ChevronLeft className="text-gray-600" size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                >
                  <ChevronRight className="text-gray-600" size={20} />
                </button>
              </div>

              {/* Testimonial Content */}
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-gradient-to-br from-peach-200 to-gold-200 shadow-lg">
                      <img
                        src={testimonials[currentSlide].image}
                        alt={testimonials[currentSlide].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Stars */}
                    <div className="flex justify-center md:justify-start space-x-1 mb-4">
                      {renderStars(testimonials[currentSlide].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                      "{testimonials[currentSlide].text}"
                    </blockquote>

                    {/* Client Info */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-peach-600 font-medium mb-1">
                        {testimonials[currentSlide].service}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentSlide].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-peach-400 to-gold-400 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-peach-100 to-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="text-gold-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blush-100 to-peach-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Heart className="text-blush-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-cream-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Quote className="text-gold-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">200+</div>
            <div className="text-sm text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-peach-100 to-blush-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="text-peach-500" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;