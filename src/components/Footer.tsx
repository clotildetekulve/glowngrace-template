import React from 'react';
import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Sparkles, Clock, Star } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Facial Treatments',
    'Hair Styling',
    'Bridal Packages',
    'Makeup Services',
    'Spa Treatments',
    'Manicure & Pedicure'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blush-200 to-peach-200 flex items-center justify-center">
                <span className="text-gold-400 font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">Glow & Grace</h3>
                <p className="text-sm text-gray-300">Beauty Parlour</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Where beauty meets artistry. We're dedicated to enhancing your natural radiance and helping you discover your most beautiful self.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blush-400 transition-colors duration-300 group">
                <Instagram size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 group">
                <Facebook size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 group">
                <Twitter size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <Sparkles size={18} className="text-gold-400" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blush-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <Star size={18} className="text-gold-400" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm hover:text-peach-300 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <Heart size={18} className="text-gold-400" />
              <span>Get in Touch</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blush-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">123 Beauty Street, Fashion District</p>
                  <p className="text-gray-300 text-sm">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-peach-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold-300 flex-shrink-0" />
                <p className="text-gray-300 text-sm">hello@glowandgrace.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={16} className="text-cream-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-2">Stay Beautiful with Our Newsletter</h4>
              <p className="text-gray-300 text-sm">Get beauty tips, special offers, and updates delivered to your inbox.</p>
            </div>
            <div className="flex space-x-3 w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blush-400 to-peach-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <p>&copy; 2025 Glow & Grace Beauty Parlour. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blush-300 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-peach-300 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-gold-300 transition-colors duration-300">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blush-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-bl from-peach-400/10 to-transparent rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;