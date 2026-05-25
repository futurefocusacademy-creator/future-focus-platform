import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import footerLogo from '../assets/footer-logo.png';

export default function Footer() {
  const socialLinks = [
    {
      label: 'Facebook',
      path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z'
    },
    {
      label: 'Twitter',
      path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    },
    {
      label: 'Linkedin',
      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      label: 'Instagram',
      path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'
    }
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Features', id: 'features' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
  ];

  const services = [
    'Corporate Training',
    'Placement Training',
    'Spoken English',
    'Communication Skills',
    'Power BI',
    'Full Stack Development',
    'Python'
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 pt-20 pb-8 border-t border-slate-100 rounded-t-[40px] shadow-[0_-10px_40px_rgba(11,96,176,0.03)] overflow-hidden">
      {/* Soft Glow Accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EAF4FF]/50 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={footerLogo} 
              alt="Future Focus Academy" 
              className="h-24 md:h-32 lg:h-36 w-auto object-contain hover:scale-[1.03] hover:drop-shadow-[0_0_12px_rgba(11,96,176,0.3)] transition-all duration-300" 
            />
            
            <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-[280px] md:max-w-none">
              Future Focus Academy empowers students through communication, placement, technical, and career-focused training programs.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-[#F8FBFF] hover:bg-royal text-royal hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-royal/20 active:scale-95 border border-royal/10"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                    <path d={link.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-navy-deep text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-royal"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center gap-2 text-slate-500 hover:text-royal text-sm font-medium transition-colors group cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4 text-royal/40 group-hover:text-royal group-hover:translate-x-1 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-extrabold text-navy-deep text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold"></div>
              Courses/Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                  <span className="hover:text-royal transition-colors cursor-pointer">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-extrabold text-navy-deep text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-royal"></div>
              Contact Us
            </h4>
            <ul className="space-y-5 text-slate-500 text-sm font-medium">
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FBFF] border border-[#EAF4FF] hover:border-royal/20 transition-colors group">
                <MapPin className="w-5 h-5 text-royal shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">
                  2/428 Ammans Nagar Teachers Colony, <br/>
                  NGGO Colony, Coimbatore, <br/>
                  Tamil Nadu – 641022
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0 group-hover:bg-royal transition-colors">
                  <Phone className="w-4 h-4 text-royal group-hover:text-white transition-colors" />
                </div>
                <span className="hover:text-royal transition-colors cursor-pointer">9944787805</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0 group-hover:bg-royal transition-colors">
                  <Mail className="w-4 h-4 text-royal group-hover:text-white transition-colors" />
                </div>
                <span className="hover:text-royal transition-colors cursor-pointer truncate">futurefocusacademy1991@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-slate-200/60 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F8FBFF] px-6 py-4 rounded-2xl">
          <p className="text-slate-500 text-sm font-medium text-center md:text-left">
            © 2025 Future Focus Academy. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-royal text-sm font-semibold hidden md:block">
              Designed for modern career-focused learning.
            </p>
            <button 
              onClick={scrollUp} 
              className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-royal transition-colors cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
