import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
      
      {/* Full-Width Background Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt="Academy Experience"
              className="w-full h-full object-cover transform transition-transform duration-[15000ms] ease-linear"
              style={{ transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
        ))}
      </div>
      
      {/* Subtle Dark Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center h-full pt-20">
        
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
            Future Focus Academy
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Shape Your Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64B5F6] to-[#E3F2FD]">With Confidence</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium max-w-2xl drop-shadow-md">
            Empowering students through communication, technical, placement and career-focused training.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={scrollToCourses}
              className="group px-8 py-4 bg-royal hover:bg-navy-deep text-white rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(11,96,176,0.3)] hover:shadow-[0_12px_35px_rgba(11,96,176,0.4)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white hover:bg-[#F8FBFF] text-navy-deep border border-slate-200 hover:border-royal/30 rounded-xl text-lg font-bold transition-all duration-300 shadow-sm hover:shadow-[0_8px_25px_rgba(11,96,176,0.1)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-80 z-20">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
          Scroll Down
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 relative flex justify-center bg-black/20 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-2 animate-scroll-down shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
        </div>
      </div>

    </section>
  );
}