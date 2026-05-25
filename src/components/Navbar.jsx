import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navbarLogo from '../assets/navbar-logo.png';

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Features', id: 'features' },
    { label: 'Success Stories', id: 'success-stories' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  useEffect(() => {

    const handleScroll = () => {

      if (location.pathname === '/') {

        const scrollPosition = window.scrollY + 150;

        for (const item of navItems) {

          const el = document.getElementById(item.id);

          if (el) {

            const top = el.offsetTop;
            const height = el.offsetHeight;

            if (
              scrollPosition >= top &&
              scrollPosition < top + height
            ) {
              setActiveSection(item.id);
            }

          }

        }

      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [location.pathname]);

  const handleNavClick = (id) => {

    setIsOpen(false);

    if (location.pathname !== '/') {

      navigate('/');

      setTimeout(() => {

        const el = document.getElementById(id);

        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }

      }, 300);

    } else {

      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }

    }

  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center">
      <div className="w-auto glass rounded-full px-6 py-3 flex items-center justify-between gap-12 transition-all duration-300 hover:glow-blue">

        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer flex items-center mr-10"
          onClick={() => handleNavClick('home')}
        >
          <img
            src={navbarLogo}
            alt="Future Focus Academy"
            className="h-[34px] md:h-[38px] lg:h-[42px] w-auto object-contain hover:scale-[1.03] transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-[14px] font-semibold transition-all duration-300 hover:text-royal-light ${activeSection === item.id
                ? 'text-royal'
                : 'text-navy-deep'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1.5 h-1.5 rounded-full bg-royal shadow-[0_0_10px_rgba(11,96,176,0.8)]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-navy-deep" />
          ) : (
            <Menu className="w-6 h-6 text-navy-deep" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 glass-card p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-navy-deep hover:text-royal font-semibold text-base transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}