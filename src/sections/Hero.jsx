import React, { useState, useEffect } from 'react';
import { Award, Users, BookOpen, Star, ArrowRight } from 'lucide-react';
import focusLogo from '../assets/focus-logo.png';

export default function Hero() {
  const [activeCounter, setActiveCounter] = useState({
    students: 1000,
    placement: 90,
    partners: 50,
    mentors: 25
  });

  useEffect(() => {
    const intervals = [];
    const targets = {
      students: 2500,
      placement: 96,
      partners: 120,
      mentors: 45
    };

    Object.keys(targets).forEach((key) => {
      let current = activeCounter[key];
      const target = targets[key];
      const step = Math.ceil((target - current) / 30);

      const timer = setInterval(() => {
        current += step;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        setActiveCounter((prev) => ({
          ...prev,
          [key]: current
        }));
      }, 50);

      intervals.push(timer);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const scrollToCourses = () => {
    document
      .getElementById('courses')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-soft dark:bg-navy-dark transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-royal/10 dark:bg-royal/20 rounded-full blur-[100px] animate-pulse-glow pointer-events-none"></div>

      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-gold/5 dark:bg-gold/15 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s] pointer-events-none"></div>

      {/* Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0b60b0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-[0.15] pointer-events-none"></div>

      {/* Main Container */}
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 text-left animate-in fade-in slide-in-from-left-8 duration-1000">

            {/* Premium Logo */}
            <div className="flex justify-center mb-4">

              <div className="relative group">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-royal/30 to-gold/30 blur-3xl rounded-full scale-110 opacity-70 group-hover:scale-125 transition-all duration-700"></div>

                {/* Logo */}
                <img
                  src={focusLogo}
                  alt="Future Focus Academy Logo"
                  className="relative w-70 sm:w-40 lg:w-[300px] object-contain drop-shadow-[0_20px_60px_rgba(11,96,176,0.35)] animate-float hover:scale-105 transition-all duration-700"
                />

              </div>

            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">

              {[
                {
                  text: 'Placement Support',
                  color:
                    'border-royal/30 bg-royal/5 text-royal dark:text-royal-light'
                },
                {
                  text: 'Industry-Focused Training',
                  color:
                    'border-gold/30 bg-gold/5 text-gold'
                },
                {
                  text: 'Corporate Training',
                  color:
                    'border-royal/30 bg-royal/5 text-royal dark:text-royal-light'
                },
                {
                  text: 'Skill Development',
                  color:
                    'border-gold/30 bg-gold/5 text-gold'
                }
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border shadow-sm hover:scale-105 transition-all duration-300 select-none ${badge.color}`}
                >
                  {badge.text}
                </div>
              ))}

            </div>

            {/* Heading */}
            <div className="space-y-4">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-deep dark:text-white leading-tight">
                Shape Your Future <br />

                <span className="bg-clip-text text-transparent bg-gradient-to-r from-royal via-royal-light to-gold dark:from-white dark:via-royal-light dark:to-gold-light">
                  with Confidence
                </span>
              </h1>

              <p className="max-w-xl text-base sm:text-lg text-slate-500 dark:text-slate-300 leading-relaxed font-medium">
                Future Focus Academy empowers students and professionals with career-focused learning, communication excellence, technical expertise, and placement-oriented training.
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">

              <button
                onClick={scrollToCourses}
                className="btn-gold px-8 py-4 text-base"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={scrollToContact}
                className="btn-secondary px-8 py-4 text-base"
              >
                Contact Us
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-navy-deep/5 dark:border-white/5">

              {[
                {
                  value: activeCounter.students,
                  suffix: '+',
                  label: 'Students Trained',
                  icon: Users
                },
                {
                  value: activeCounter.placement,
                  suffix: '%',
                  label: 'Placement Rate',
                  icon: Award
                },
                {
                  value: activeCounter.partners,
                  suffix: '+',
                  label: 'Hiring Partners',
                  icon: Star
                },
                {
                  value: activeCounter.mentors,
                  suffix: '+',
                  label: 'Expert Trainers',
                  icon: BookOpen
                }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-1">

                  <div className="flex items-center gap-1.5 text-royal dark:text-royal-light">

                    <stat.icon className="w-4 h-4 text-gold" />

                    <span className="text-2xl sm:text-3xl font-extrabold text-navy-deep dark:text-white">
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </span>

                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center lg:justify-end z-10">

            <div className="relative w-full max-w-xl">

              <div className="glass-card rounded-[32px] p-8 border border-white/10 shadow-2xl bg-white/70 dark:bg-navy-dark/70 backdrop-blur-xl overflow-hidden">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-royal/10 text-royal font-bold text-xs mb-6">
                  Premium Training Institute
                </div>

                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-navy-deep dark:text-white mb-4">
                  Future Focus Academy
                </h2>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-300 text-base leading-relaxed mb-8">
                  Empowering students and professionals with placement-focused training, communication excellence, technical expertise, and career development programs.
                </p>

                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden mb-8">

                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="Students Learning"
                    className="w-full h-[320px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 text-white">

                    <p className="text-sm font-semibold uppercase tracking-wider">
                      Career-Focused Learning
                    </p>

                    <h3 className="text-2xl font-bold">
                      Learn. Grow. Get Placed.
                    </h3>

                  </div>

                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl bg-royal/10 p-5 border border-royal/10">
                    <h4 className="text-3xl font-extrabold text-royal">
                      120+
                    </h4>

                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                      Hiring Partners
                    </p>
                  </div>

                  <div className="rounded-2xl bg-gold/10 p-5 border border-gold/10">
                    <h4 className="text-3xl font-extrabold text-gold">
                      96%
                    </h4>

                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                      Placement Support
                    </p>
                  </div>

                  <div className="rounded-2xl bg-green-500/10 p-5 border border-green-500/10">
                    <h4 className="text-lg font-extrabold text-green-500">
                      Corporate Training
                    </h4>

                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                      Industry-Focused Programs
                    </p>
                  </div>

                  <div className="rounded-2xl bg-purple-500/10 p-5 border border-purple-500/10">
                    <h4 className="text-lg font-extrabold text-purple-500">
                      Power BI | Python
                    </h4>

                    <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">
                      Technical Excellence
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 pointer-events-none">

        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-400">
          Scroll Down
        </span>

        <div className="w-5 h-8 rounded-full border-2 border-slate-300 dark:border-slate-600 relative">

          <div className="w-1.5 h-1.5 rounded-full bg-royal dark:bg-royal-light absolute top-1.5 left-1/2 -translate-x-1/2 animate-scroll-down"></div>

        </div>

      </div>

    </section>
  );
}