import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Features', id: 'features' },
    { label: 'Success Stories', id: 'success-stories' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' }
  ];

  // Track scrolling to add solid shadow/blur background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Spy for Active Section (only on landing page)
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 150;
        for (const item of navItems) {
          const el = document.getElementById(item.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
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
      navigate('/', { replace: false });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const triggerAdmission = () => {
    window.dispatchEvent(new Event('open-admission'));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 py-4 md:px-8 ${scrolled ? 'pt-2' : 'pt-4'}`}>
      <div className={`mx-auto max-w-7xl rounded-full transition-all duration-500 glass shadow-lg border border-white/20 px-6 py-3 flex items-center justify-between ${scrolled ? 'bg-white/90 dark:bg-navy-deep/80 shadow-royal/5' : 'bg-white/40 dark:bg-navy-deep/30'}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-royal to-royal-light flex items-center justify-center shadow-md shadow-royal/20 transition-transform group-hover:rotate-12 duration-300">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy-deep dark:text-white">
            Future<span className="text-royal dark:text-royal-light">Focus</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                location.pathname === '/' && activeSection === item.id
                  ? 'text-royal dark:text-royal-light'
                  : 'text-navy-deep/70 dark:text-white/70 hover:text-royal dark:hover:text-royal-light'
              }`}
            >
              {item.label}
              {location.pathname === '/' && activeSection === item.id && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-royal dark:bg-royal-light rounded-full shadow-[0_0_8px_#0B60B0]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Action Buttons: Theme Toggle, CTA */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full hover:bg-royal/10 text-navy-deep/80 dark:text-white/80 transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA */}
          <button
            onClick={triggerAdmission}
            className="btn-primary py-2 px-5 text-sm cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile controls: Theme Toggle + Menu Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-royal/10 text-navy-deep/80 dark:text-white/80 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-royal/10 text-navy-deep dark:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Glass overlay) */}
      {isOpen && (
        <div className="fixed inset-x-4 top-24 z-50 lg:hidden rounded-3xl glass-card border border-white/20 p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-base font-semibold text-navy-deep dark:text-white hover:text-royal dark:hover:text-royal-light py-2 border-b border-navy-deep/5 dark:border-white/5 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                setIsOpen(false);
                triggerAdmission();
              }}
              className="btn-primary w-full mt-2 cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
