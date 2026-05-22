import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Award, Sparkles } from 'lucide-react';

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rohan Sharma',
      role: 'Full Stack Engineer at Google',
      course: 'Full Stack Development',
      rating: 5,
      comment: 'The placement support at Future Focus Academy is phenomenal. I transitioned from a non-CS background to a software engineer at Google in under 8 months. The 1-on-1 mock interviews and real-world database projects made the difference.',
      avatarInitials: 'RS',
      gradient: 'from-blue-500 to-royal'
    },
    {
      name: 'Priyanka Patel',
      role: 'Mobile Architect at Amazon',
      course: 'Flutter App Development',
      rating: 5,
      comment: 'The Flutter program was completely practical. Every single week we built and deployed native features. Prasanth Ayyappan\'s direct mentorship gave me the structural knowledge to clear Amazon\'s high-bar system design rounds.',
      avatarInitials: 'PP',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      name: 'Aditya Nair',
      role: 'AI Researcher at Microsoft',
      course: 'Artificial Intelligence',
      rating: 5,
      comment: 'Learning AI here wasn\'t just writing API calls. We built customized models, designed loss functions, and analyzed optimization vectors. The research-oriented mindset prepares you for true technical innovation.',
      avatarInitials: 'AN',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'Meera Deshmukh',
      role: 'UI Designer at TCS',
      course: 'UI/UX Design',
      rating: 5,
      comment: 'The design track changed my entire worldview on interfaces. Prototyping actual applications, testing with real students, and presenting to corporate clients at the academy built my industry confidence.',
      avatarInitials: 'MD',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const partners = [
    'Google', 'Amazon', 'Microsoft', 'TCS', 'Infosys', 'Cognizant', 'Wipro', 'Accenture'
  ];

  return (
    <section id="success-stories" className="relative py-24 bg-white dark:bg-navy-dark/50 transition-colors duration-500 scroll-mt-16 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-royal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-gold" />
            Alumni Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Our Alumni Build the <span className="text-royal dark:text-royal-light">Future</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Hear from our students who secured high-paying packages in top MNCs and startups.
          </p>
        </div>

        {/* Corporate Partners Logo Ticker (Auto-scrolling showcase) */}
        <div className="mb-20">
          <p className="text-center text-[10px] uppercase tracking-widest font-extrabold text-slate-400 dark:text-slate-500 mb-6">
            Where Our Students Work
          </p>
          <div className="relative w-full overflow-hidden py-4 border-y border-navy-deep/5 dark:border-white/5 bg-slate-50/50 dark:bg-navy-deep/10 rounded-2xl">
            <div className="flex gap-12 justify-around items-center flex-wrap md:flex-nowrap">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="text-base sm:text-lg font-black tracking-tight text-slate-400 dark:text-slate-500 hover:text-royal dark:hover:text-royal-light hover:scale-105 duration-300 cursor-default select-none"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Slider Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative / Callout */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="flex items-center gap-1.5 text-gold">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="text-xs uppercase font-extrabold tracking-wider">Placement Milestones</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep dark:text-white leading-tight">
              1,200+ Offers Secured in Prime Technologies
            </h3>
            <p className="text-slate-500 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Our career pipeline is designed to transition you seamlessly from classroom labs to corporate projects. We maintain strong recruitment pathways with enterprise hiring teams.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-navy-deep/10 dark:border-white/10 text-navy-deep dark:text-white hover:bg-royal hover:text-white flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-navy-deep/10 dark:border-white/10 text-navy-deep dark:text-white hover:bg-royal hover:text-white flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Block: Testimonial Sliding Cards */}
          <div className="lg:col-span-7 relative">
            
            {/* Absolute quote background icon */}
            <div className="absolute -top-12 -left-8 text-royal/5 dark:text-white/5 select-none pointer-events-none">
              <Quote className="w-28 h-28" />
            </div>

            {/* Carousel Item */}
            <div className="glass-card p-6 sm:p-8 border border-white/20 dark:border-white/5 shadow-2xl relative z-10 transition-all duration-500 animate-in fade-in slide-in-from-right-4">
              
              {/* Star Rating & Course Tag */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1 text-gold">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light px-2.5 py-1 rounded-full">
                  {testimonials[activeIndex].course}
                </span>
              </div>

              {/* Message text */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed italic text-sm sm:text-base text-left mb-6 font-medium">
                "{testimonials[activeIndex].comment}"
              </p>

              {/* Reviewer profile info */}
              <div className="flex items-center gap-4 pt-4 border-t border-navy-deep/5 dark:border-white/5">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[activeIndex].gradient} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                  {testimonials[activeIndex].avatarInitials}
                </div>
                <div className="text-left">
                  <h4 className="font-extrabold text-sm sm:text-base text-navy-deep dark:text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold mt-0.5">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>

            </div>

            {/* Slide Indicators dot indicators */}
            <div className="flex gap-2 justify-center lg:justify-start mt-6 pl-2 z-10 relative">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx ? 'bg-royal w-6' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
