import React, { useState } from 'react';
import { Mail, MapPin, Facebook, Instagram, Send, Linkedin, Github } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form will be handled by Formspree
  };

  // Consolidated contact info data
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send me an email",
      content: "jaminliperalta87@gmail.com",
      href: "mailto:jaminliperalta87@gmail.com",
      isLink: true
    },
    {
      icon: MapPin,
      title: "Location", 
      subtitle: "Currently based in",
      content: "Nueva Ecija, Philippines",
      isLink: false
    }
  ];

  // Social media links
  const socialLinks = [
    {
      href: "https://www.facebook.com/jaminli.peralta.2024",
      icon: Facebook,
      label: "Visit my Facebook profile",
      hoverColor: "hover:bg-blue-600"
    },
    {
      href: "https://www.instagram.com/jaminnnl/",
      icon: Instagram,
      label: "Visit my Instagram profile",
      hoverColor: "hover:bg-pink-600"
    },
    {
      href: "https://www.linkedin.com/in/jaminli-peralta-7a18b9323/",
      icon: Linkedin,
      label: "Visit my LinkedIn profile",
      hoverColor: "hover:bg-blue-400"
    },
    {
      href: "https://github.com/jaminnnnnn?tab=repositories",
      icon: Github,
      label: "Visit my Github profile",
      hoverColor: "hover:bg-gray-400"
    }
  ];

  // Consolidated CSS classes
  const inputClasses = `w-full border rounded-lg py-4 px-4 focus:border-teal-500 focus:outline-none transition-all duration-200 ${
    isDark 
      ? 'bg-gray-800/10 border-gray-700 text-white focus:bg-gray-800 placeholder-gray-400' 
      : 'bg-white border-gray-300 text-gray-900 focus:bg-white placeholder-gray-500'
  }`;

  const cardClasses = `border rounded-xl p-4 md:p-5 hover:border-teal-500/50 transition-colors duration-200 ${
    isDark ? 'bg-gray-800/30 border-gray-700/50' : 'bg-white border-gray-200'
  }`;

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
            <form
              action="https://formspree.io/f/myzpqgzw"  // ← replace with your actual Formspree ID
              method="POST"
              className="space-y-6"
            >
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-4 px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none transition-all duration-200`}
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
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-4 px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none transition-all duration-200`}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full ${isDark ? 'bg-gray-800/10 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg py-4 px-4 focus:border-teal-500 ${isDark ? 'focus:bg-gray-800' : 'focus:bg-white'} ${isDark ? 'placeholder-gray-400' : 'placeholder-gray-500'} focus:outline-none resize-none transition-all duration-200`}
                />
              </div>

              <button
                aria-label="Send message"
                type="submit"
                className="w-full bg-teal-500 relative hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
             </div>

          {/* Contact Information */}
          <aside className=" relative space-y-4">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className={cardClasses}>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isDark ? 'bg-teal-500/10' : 'bg-teal-50'
                    }`}>
                      <IconComponent 
                        className={`w-4 h-4 md:w-5 md:h-5 ${isDark ? 'text-teal-200' : 'text-teal-600'}`} 
                      />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h4 className={`text-base md:text-lg font-semibold mb-1 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h4>
                      <p className={`text-xs relative md:text-sm mb-1 md:mb-2 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {info.subtitle}
                      </p>
                      {info.isLink ? (
                        <a 
                          href={info.href} 
                          className={`text-xs md:text-sm break-all transition-colors duration-200 ${
                            isDark ? 'text-teal-100 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'
                          }`}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className={`text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media Card */}
            <div className={cardClasses}>
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  isDark ? 'bg-teal-500/10' : 'bg-teal-100'
                }`}>
                  <span className={`w-4 h-4 md:w-5 md:h-5 rounded block ${
                    isDark ? 'bg-teal-200' : 'bg-teal-500'
                  }`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className={`text-left text-base md:text-lg font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Connect With Me
                  </h4>
                  <p className={` text-left text-xs md:text-sm mb-3 md:mb-4 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Follow me on social media
                  </p>
                  
                  <div className="flex gap-2 md:gap-3">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors duration-200 group ${
                            isDark ? `bg-gray-700/50 ${social.hoverColor}` : `bg-gray-100 ${social.hoverColor}`
                          }`}
                          aria-label={social.label}
                        >
                          <IconComponent className={`w-3.5 h-3.5 md:w-[18px] md:h-[18px] transition-colors duration-200 ${
                            isDark ? 'text-gray-200' : 'text-gray-600'
                          } group-hover:text-white`} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;