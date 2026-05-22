import React from 'react';
import { Quote, Sparkles, CheckCircle2, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

export default function Founder() {
  const achievements = [
    'Senior Corporate Training Strategist',
    '15+ Years in Educational Excellence & Placement',
    'Mentored 10,000+ students and professionals',
    'Expert in Soft Skills, Aptitude, & Technical Coaching'
  ];

  return (
    <section className="relative py-24 bg-soft dark:bg-navy-dark transition-colors duration-500 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-royal/10 dark:bg-royal/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/5 dark:bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5 text-gold" />
            Leadership Vision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Message From Our <span className="text-royal dark:text-royal-light">Founder</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Learn the philosophy and purpose behind the establishment of Future Focus Academy, directly from our director.
          </p>
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Graphical Showcase Card (Founder Avatar) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm glass-card border border-white/20 dark:border-white/5 p-6 shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
              
              {/* Profile Card Header */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Academy Director</span>
                <span className="flex items-center gap-1.5 text-xs text-green-500 font-bold px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                  Active Advisor
                </span>
              </div>

              {/* Styled Digital Avatar Vector Visual */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-royal to-royal-light flex items-center justify-center shadow-lg relative mb-6">
                <span className="font-extrabold text-4xl text-white tracking-tight">PA</span>
                {/* Glow ring around avatar */}
                <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping [animation-duration:3s] pointer-events-none"></div>
              </div>

              {/* Founder Profile Details */}
              <div className="text-center space-y-2 mb-6">
                <h3 className="font-extrabold text-xl text-navy-deep dark:text-white">Prasanth Ayyappan</h3>
                <p className="text-xs text-royal dark:text-royal-light font-bold">Founder & Director</p>
                <div className="flex justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  <span className="text-[10px] text-slate-400 font-semibold">Ex-MNC Trainer / Tech Career Strategist</span>
                </div>
              </div>

              {/* Key Credentials List */}
              <div className="space-y-2.5 pt-4 border-t border-navy-deep/5 dark:border-white/5 text-left text-xs font-semibold text-slate-500 dark:text-slate-300">
                {achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Quick direct contact button */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 py-2.5 bg-royal/10 hover:bg-royal text-royal dark:text-royal-light hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" /> Book a Consultation
              </button>

            </div>
          </div>

          {/* Right Column: Emotionally Engaging Quote & Message */}
          <div className="lg:col-span-7 space-y-6 text-left relative">
            
            {/* Massive Quote Icon Overlay (absolute background) */}
            <div className="absolute -top-10 -left-6 text-royal/5 dark:text-white/5 select-none pointer-events-none">
              <Quote className="w-32 h-32" />
            </div>

            <div className="space-y-4 relative z-10">
              
              {/* Highlight Quote */}
              <h3 className="text-xl sm:text-2xl font-bold text-navy-deep dark:text-white leading-relaxed italic border-l-4 border-gold pl-4">
                "Our mission is to build a bridge between raw potential and career excellence. We don't just teach modules; we cultivate critical thinkers who excel in the real world."
              </h3>
              
              {/* Core message text */}
              <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                We founded Future Focus Academy as a response to the growing misalignment between standard academic curricula and the practical, interactive skillsets required in high-growth companies. Having spent years training professionals in communication and technical fields, I realized that true transformation happens when students receive personal validation, hands-on feedback, and rigorous structured training.
              </p>

              <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Every course we deliver, every classroom dynamic we foster, and every placement channel we coordinate is oriented around a single commitment: the student first. We are committed to accompanying you on your career journey, providing the precise discipline, direction, and mentorship required to secure your placements and realize your long-term ambitions.
              </p>
            </div>

            {/* Signature & Closing */}
            <div className="pt-4 border-t border-navy-deep/5 dark:border-white/5 flex items-center justify-between">
              <div>
                <p className="font-extrabold text-navy-deep dark:text-white text-base">Prasanth Ayyappan</p>
                <p className="text-xs text-slate-400">Founder & Director, Future Focus Academy</p>
              </div>
              
              {/* Handwritten Signature Block (Custom Web Design style font) */}
              <div className="font-serif italic text-xl sm:text-2xl text-gold select-none transform -rotate-3 tracking-wide">
                Prasanth Ayyappan
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
