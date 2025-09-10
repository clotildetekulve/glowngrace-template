import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passionate Care",
      description: "Every treatment is delivered with genuine care and attention to your unique needs"
    },
    {
      icon: Award,
      title: "Expert Professionals",
      description: "Our certified beauticians bring years of experience and latest techniques"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Customized beauty solutions tailored to enhance your individual beauty"
    },
    {
      icon: Sparkles,
      title: "Premium Products",
      description: "We use only the finest, skin-friendly products for lasting results"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream-50 via-white to-blush-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blush-100 to-peach-100 text-blush-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart size={16} />
                <span>About Our Story</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
                Where Beauty Meets
                <span className="block bg-gradient-to-r from-blush-400 to-peach-400 bg-clip-text text-transparent">
                  Artistry
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Glow & Grace Beauty Parlour, we believe that true beauty comes from within, and our mission is to help you discover and enhance your natural radiance. Founded with a passion for excellence, we've been transforming lives through the art of beauty for over 5 years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our philosophy is simple: every woman deserves to feel confident, beautiful, and pampered. We combine traditional Indian beauty wisdom with modern techniques to create a sanctuary where you can relax, rejuvenate, and rediscover your inner glow.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-cream-200 hover:shadow-lg hover:border-blush-200 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blush-100 to-peach-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-blush-500" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Beauty Parlour Interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-cream-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center">
                  <Award className="text-gold-500" size={28} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blush-200/50 to-peach-200/50 rounded-full blur-xl"></div>
            <div className="absolute top-1/3 -left-6 w-16 h-16 bg-gradient-to-br from-gold-200/50 to-cream-200/50 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;