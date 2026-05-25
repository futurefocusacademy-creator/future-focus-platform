import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Afrinsha',
    review: 'Future Focus Academy helped me improve my communication and technical skills with confidence.',
  },
  {
    name: 'Ramya',
    review: 'Future Focus Academy helped me improve my communication and technical skills with confidence.',
  },
  {
    name: 'Sofiya',
    review: 'Future Focus Academy helped me improve my communication and technical skills with confidence.',
  },
  {
    name: 'Kirudhay',
    review: 'Future Focus Academy helped me improve my communication and technical skills with confidence.',
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="success-stories" className="relative py-24 bg-soft overflow-hidden">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="glow-orb bg-royal/10 bottom-10 left-1/4 w-72 h-72"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-royal/10 text-royal rounded-full text-xs font-bold uppercase tracking-widest">
            <Star className="w-4 h-4 text-gold fill-gold" />
            Student Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight">
            Hear from Our <span className="text-royal">Students</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-6 sm:px-12">
          
          <div className="overflow-hidden relative h-[380px] sm:h-[300px]">
            {reviews.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full flex justify-center transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 pointer-events-auto' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full pointer-events-none'
                      : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                {/* Review Card */}
                <div className="w-full max-w-2xl glass-card p-8 sm:p-10 hover:shadow-2xl hover:glow-blue hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center">
                  <div className="flex flex-col items-center text-center space-y-8">
                    
                    {/* Stars */}
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-gold fill-gold drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Review Content */}
                    <div className="relative px-4">
                      <Quote className="absolute -top-6 -left-2 sm:-left-6 w-8 h-8 text-royal/20" />
                      <p className="text-xl sm:text-2xl text-slate-600 font-medium leading-relaxed italic z-10 relative">
                        "{item.review}"
                      </p>
                      <Quote className="absolute -bottom-6 -right-2 sm:-right-6 w-8 h-8 text-royal/20 rotate-180" />
                    </div>

                    {/* Reviewer Name Prominent */}
                    <div className="pt-4">
                      <h4 className="text-2xl font-extrabold text-navy-deep tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-navy-deep to-royal">
                        {item.name}
                      </h4>
                      <p className="text-sm text-royal font-bold tracking-widest mt-1">Academy Student</p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400 hover:text-royal hover:shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-400 hover:text-royal hover:shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-royal shadow-[0_0_10px_rgba(11,96,176,0.6)]' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-royal/50'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
