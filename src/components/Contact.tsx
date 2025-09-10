import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageCircle, Calendar, User, Sparkles, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Facial Treatment',
    'Hair Styling',
    'Makeup Service',
    'Bridal Package',
    'Manicure & Pedicure',
    'Spa Treatment',
    'Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const openWhatsApp = () => {
    const message = `Hi! I'd like to book an appointment at Glow & Grace Beauty Parlour.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-50 via-white to-blush-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blush-100 to-peach-100 text-blush-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar size={16} />
            <span>Book Appointment</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Ready to Begin Your
            <span className="block bg-gradient-to-r from-blush-400 to-peach-400 bg-clip-text text-transparent">
              Beauty Journey?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Contact us today to schedule your appointment. We're here to help you look and feel your absolute best.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cream-200 hover:shadow-lg hover:border-blush-200 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blush-100 to-peach-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="text-blush-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Mon-Sun: 9:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cream-200 hover:shadow-lg hover:border-blush-200 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-peach-100 to-gold-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="text-peach-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Visit Us</h4>
                      <p className="text-gray-600">123 Beauty Street, Fashion District</p>
                      <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cream-200 hover:shadow-lg hover:border-blush-200 transition-all duration-300">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-100 to-cream-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                      <p className="text-gray-600">hello@glowandgrace.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <MessageCircle size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2">Quick WhatsApp Booking</h4>
                  <p className="text-green-100 mb-4">Get instant responses and book your appointment via WhatsApp</p>
                  <button
                    onClick={openWhatsApp}
                    className="bg-white text-green-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Chat with Us
                  </button>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-cream-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blush-100 to-peach-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blush-500" size={18} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Opening Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Saturday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-800">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-cream-200">
                  <span className="text-gray-600">Emergency Services</span>
                  <span className="font-medium text-blush-600">By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-cream-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blush-100 to-peach-100 rounded-xl flex items-center justify-center">
                <Sparkles className="text-blush-500" size={20} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800">Book Your Appointment</h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Booking Submitted!</h4>
                <p className="text-gray-600">We'll contact you within 2 hours to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service *
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 appearance-none bg-white"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-cream-300 rounded-xl focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blush-400 to-peach-400 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Book My Appointment</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll contact you within 2 hours to confirm your appointment.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-cream-200">
            <div className="h-64 md:h-80 bg-gradient-to-br from-blush-100 to-peach-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-blush-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Find Us Here</h4>
                <p className="text-gray-600">123 Beauty Street, Fashion District</p>
                <p className="text-gray-600">Mumbai, Maharashtra 400001</p>
                <button className="mt-4 bg-gradient-to-r from-blush-400 to-peach-400 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;