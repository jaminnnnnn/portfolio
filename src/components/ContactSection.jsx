import React, { useState } from 'react';
import { Mail, MapPin, Facebook, Instagram, Twitter, Send, Linkedin, Github } from 'lucide-react';

const ContactSection = ({ isDark = true }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
          Contact<span className="text-teal-500"> Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-end">
          
          {/* Left side - Contact Form */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Get In Touch</h3>
              <div className="w-12 sm:w-16 h-1 bg-teal-500 mb-6 md:mb-8"></div>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm sm:text-base">
                Let's work together! Send me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* ✅ Formspree Contact Form */}
            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-3 md:py-4 px-3 md:px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none transition-all duration-200 text-sm sm:text-base`}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-3 md:py-4 px-3 md:px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none transition-all duration-200 text-sm sm:text-base`}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-3 md:py-4 px-3 md:px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none resize-none transition-all duration-200 text-sm sm:text-base`}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-500 relative hover:bg-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <Send size={16} className="sm:hidden group-hover:translate-x-1 transition-transform" />
                <Send size={18} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </div>
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-4 md:space-y-6">
            
            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className={`${isDark ? 'bg-gray-800/30 border-gray-700/50 relative' : 'bg-white border-gray-300'} border rounded-xl p-4 md:p-5 hover:border-teal-500/50 transition-all duration-200`}>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${isDark ? 'bg-teal-800/10' : 'bg-teal-50'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Mail size={18} className={`sm:hidden ${isDark ? 'text-teal-200' : 'text-teal-600'}`} />
                    <Mail size={20} className={`hidden sm:block ${isDark ? 'text-teal-200' : 'text-teal-600'}`} />
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <h4 className={`text-base md:text-lg font-semibold mb-1 md:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                    <p className={`text-xs md:text-sm mb-1 md:mb-2 ${isDark ? 'text-white' : 'text-gray-600'}`}>Send me an email</p>
                    <a href="mailto:jaminliperalta87@gmail.com" className={`${isDark ? 'text-teal-100 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'} transition-colors text-xs md:text-sm break-all`}>
                      jaminliperalta87@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className={`${isDark ? 'bg-gray-800/30 border-gray-700/50 relative' : 'bg-white border-gray-200'} border rounded-xl p-4 md:p-5 hover:border-teal-500/50 transition-all duration-200`}>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${isDark ? 'bg-teal-500/10' : 'bg-teal-50'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <MapPin size={18} className={`sm:hidden ${isDark ? 'text-teal-200' : 'text-teal-600'}`} />
                    <MapPin size={20} className={`hidden sm:block ${isDark ? 'text-teal-200' : 'text-teal-600'}`} />
                  </div>
                  <div className="text-left">
                    <h4 className={`text-base md:text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                    <p className={`text-xs md:text-sm mb-1 md:mb-2 ${isDark ? 'text-white' : 'text-gray-600'}`}>Currently based in</p>
                    <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm md:text-base`}>Nueva Ecija, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className={`${isDark ? 'bg-gray-800/30 border-gray-700/50 relative' : 'bg-white border-gray-200'} border rounded-xl p-4 md:p-5 hover:border-teal-500/50 transition-all duration-200`}>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${isDark ? 'bg-teal-500/10' : 'bg-teal-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'bg-teal-200' : 'bg-teal-500'} rounded`}></div>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h4 className={`text-base md:text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect With Me</h4>
                    <p className={`text-xs md:text-sm mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-gray-600'}`}>Follow me on social media</p>
                    <div className="flex flex-wrap gap-2 md:space-x-3 md:gap-0">
                      <a
                        href="https://www.facebook.com/jaminli.peralta.2024"
                        className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'bg-gray-700/50 hover:bg-blue-600' : 'bg-gray-100 hover:bg-blue-600'} rounded-lg flex items-center justify-center transition-all duration-200 group`}
                      >
                        <Facebook size={14} className={`md:hidden ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                        <Facebook size={18} className={`hidden md:block ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                      </a>
                      <a
                        href="https://www.instagram.com/jaminnnl/"
                        className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'bg-gray-700/50 hover:bg-pink-600' : 'bg-gray-100 hover:bg-pink-600'} rounded-lg flex items-center justify-center transition-all duration-200 group`}
                      >
                        <Instagram size={14} className={`md:hidden ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                        <Instagram size={18} className={`hidden md:block ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/jaminli-peralta-7a18b9323/"
                        className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'bg-gray-700/50 hover:bg-blue-400' : 'bg-gray-100 hover:bg-blue-400'} rounded-lg flex items-center justify-center transition-all duration-200 group`}
                      >
                        <Linkedin size={14} className={`md:hidden ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                        <Linkedin size={18} className={`hidden md:block ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                      </a>
                      <a
                        href="https://github.com/jaminnnnnn?tab=repositories"
                        className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'bg-gray-700/50 hover:bg-blue-400' : 'bg-gray-100 hover:bg-blue-400'} rounded-lg flex items-center justify-center transition-all duration-200 group`}
                      >
                        <Github size={14} className={`md:hidden ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                        <Github size={18} className={`hidden md:block ${isDark ? 'text-gray-200' : 'text-gray-600'} group-hover:text-white`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;