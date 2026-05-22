import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    { label: 'Gallery', id: 'gallery' },
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

    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">

      <div className="max-w-4xl mx-auto">
        {/* Main Navbar */}
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-[22px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-[64px] px-6 flex items-center justify-center transition-all duration-300">

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (

              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-[15px] font-semibold transition-all duration-300 ${activeSection === item.id
                    ? 'text-[#0B60B0]'
                    : 'text-slate-600 hover:text-[#0B60B0]'
                  }`}
              >

                {item.label}

                {activeSection === item.id && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1.5 h-1.5 rounded-full bg-[#0B60B0]"></span>
                )}

              </button>

            ))}

          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute right-5 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >

            {isOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}

          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <div className="lg:hidden mt-3 bg-white rounded-[24px] border border-slate-200 shadow-2xl p-6 animate-in fade-in slide-in-from-top-4 duration-300">

            <div className="flex flex-col gap-5">

              {navItems.map((item) => (

                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-slate-700 hover:text-[#0B60B0] font-semibold text-base transition-colors"
                >
                  {item.label}
                </button>

              ))}

            </div>

          </div>

        )}

      </div>

    </nav>
  );
}