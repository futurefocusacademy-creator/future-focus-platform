import React from 'react';
import { Quote, Target, Users, TrendingUp, Lightbulb, Star } from 'lucide-react';
import cofounderImage from '../assets/cofounder.png.png';

export default function CoFounder() {
  const statCards = [
    { label: 'Leadership Development', icon: <Target className="w-5 h-5 text-royal" /> },
    { label: 'Student Mentorship', icon: <Users className="w-5 h-5 text-royal" /> },
    { label: 'Career Planning', icon: <TrendingUp className="w-5 h-5 text-royal" /> },
    { label: 'Technical Excellence', icon: <Lightbulb className="w-5 h-5 text-royal" /> }
  ];

  return (
    <section className="relative py-28 bg-[#FFFFFF] overflow-hidden" id="co-founder">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EAF4FF] rounded-full blur-[120px] opacity-70 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1E88E5]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* REVERSED LAYOUT: Content Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          {/* LEFT SIDE: Content */}
          <div className="w-full lg:w-1/2 flex relative">
            
            {/* Special Design Element: Vertical Glowing Timeline Accent */}
            <div className="hidden sm:flex flex-col items-center mr-8 md:mr-12 relative pt-2">
              <div className="w-12 h-12 rounded-full bg-white shadow-[0_0_20px_rgba(11,96,176,0.2)] flex items-center justify-center relative z-10 border border-royal/10">
                <div className="w-4 h-4 rounded-full bg-royal animate-pulse"></div>
              </div>
              <div className="w-px h-[85%] bg-gradient-to-b from-royal/50 via-royal/20 to-transparent mt-2"></div>
            </div>

            <div className="flex-1 space-y-10">
              
              {/* Heading & Role */}
              <div className="space-y-4 text-center sm:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight leading-tight">
                  Kaviya Slevaraj
                </h2>
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#F8FBFF] to-[#EAF4FF] border border-royal/10 text-[#0B60B0] rounded-full text-sm font-bold uppercase tracking-widest shadow-sm">
                  Co-Founder & Strategic Mentor
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/80 shadow-[0_10px_40px_rgba(11,96,176,0.05)] hover:shadow-[0_15px_50px_rgba(11,96,176,0.08)] transition-all duration-500 text-center sm:text-left group">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-royal/5 group-hover:text-royal/10 transition-colors duration-500 -rotate-12" />
                <h3 className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic relative z-10">
                  “Great leadership inspires confidence, innovation, and lifelong growth.”
                </h3>
              </div>

              {/* Vision Statement */}
              <div className="text-slate-500 font-medium leading-relaxed text-[16px] text-center sm:text-left">
                <p>
                  As a strategic mentor, the focus is placed heavily on nurturing an ecosystem of innovation and excellence. We dedicate ourselves to empowering the next generation of professionals by instilling not just technical prowess, but the resilient mindset required for lifelong success.
                </p>
              </div>

              {/* Animated Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {statCards.map((card, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-2xl shadow-sm hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(11,96,176,0.12)] hover:border-royal/30 transition-all duration-300 cursor-default group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-royal/10 transition-all duration-300">
                      {card.icon}
                    </div>
                    <span className="font-semibold text-navy-deep text-[15px] leading-tight">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            
            {/* Background Layered Glow for Image */}
            <div className="absolute inset-0 bg-[#0B60B0]/15 blur-[60px] rounded-full mix-blend-multiply animate-pulse-slow"></div>
            
            {/* Floating Glass Frame */}
            <div className="relative w-full max-w-md lg:max-w-lg p-4 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white shadow-[0_25px_60px_rgba(11,96,176,0.15)] group hover:shadow-[0_35px_70px_rgba(11,96,176,0.25)] transition-all duration-700 transform hover:-translate-y-3 cursor-default">
              
              {/* Inner Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8FBFF] w-full aspect-[4/5]">
                <img 
                  src={cofounderImage} 
                  alt="Meet Our Co-Founder" 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.04]"
                />
                
                {/* Subtle overlay gradient to prevent harsh contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B60B0]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Floating Highlight Banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/60 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 hidden md:flex items-center justify-between z-20">
                  <div>
                    <p className="text-navy-deep font-bold text-lg">Kaviya Slevaraj</p>
                    <p className="text-royal text-sm font-semibold">Co-Founder & Strategic Mentor</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-royal" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
