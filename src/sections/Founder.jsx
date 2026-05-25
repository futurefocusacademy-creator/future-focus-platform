import React from 'react';
import { Quote, ShieldCheck, Mail, Award, CheckCircle2, Star, TrendingUp } from 'lucide-react';
import founderImage from '../assets/founder.png.jpeg';

export default function Founder() {
  const achievements = [
    { label: 'Career Development Mentor', icon: <TrendingUp className="w-4 h-4 text-royal" /> },
    { label: 'Corporate Training Expert', icon: <Award className="w-4 h-4 text-royal" /> },
    { label: 'Placement Guidance Specialist', icon: <Star className="w-4 h-4 text-royal" /> },
    { label: 'Communication Coach', icon: <CheckCircle2 className="w-4 h-4 text-royal" /> }
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden" id="founder">
      {/* Background Soft Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EAF4FF] rounded-full blur-[100px] opacity-60 pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Founder Image */}
          <div className="order-2 lg:order-1 relative group mx-auto w-full max-w-md lg:max-w-full">
            {/* Animated Glow Behind Image */}
            <div className="absolute inset-0 bg-royal/10 blur-[50px] rounded-full group-hover:bg-royal/20 transition-all duration-700 animate-pulse-slow"></div>
            
            {/* Premium Frame & Image */}
            <div className="relative p-3 bg-white/50 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-[0_20px_50px_rgba(11,96,176,0.15)] group-hover:shadow-[0_30px_60px_rgba(11,96,176,0.25)] transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="overflow-hidden rounded-[2rem] bg-[#F8FBFF] relative">
                <img 
                  src={founderImage} 
                  alt="Prasanth Ayyappan - Founder & Director" 
                  className="w-full h-auto max-h-[650px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Highlight Banner */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/60 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 hidden md:flex items-center justify-between">
                  <div>
                    <p className="text-navy-deep font-bold">Prasanth Ayyappan</p>
                    <p className="text-royal text-sm font-semibold">Founder & Director</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-royal/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-royal" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Content */}
          <div className="order-1 lg:order-2 space-y-10 lg:pl-4 text-center lg:text-left">
            
            {/* Header Area */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F8FBFF] border border-[#EAF4FF] text-royal rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                <Quote className="w-3.5 h-3.5 text-royal" />
                Message from the Founder
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-navy-deep tracking-tight leading-tight">
                Prasanth Ayyappan
              </h2>
              <p className="text-lg md:text-xl text-royal font-bold tracking-wide">
                Founder & Director
              </p>
            </div>

            {/* Premium Quote Box */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-royal/10 rotate-180" />
              <div className="pl-6 md:pl-8 border-l-4 border-royal">
                <h3 className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic bg-gradient-to-r from-navy-deep to-slate-600 bg-clip-text text-transparent">
                  “Success begins with confidence, learning, discipline, and the courage to move forward.”
                </h3>
              </div>
            </div>

            {/* Founder Message */}
            <div className="space-y-5 text-slate-500 font-medium leading-relaxed text-[16px]">
              <p>
                At Future Focus Academy, our vision is to transform potential into excellence. We believe that every individual holds the power to shape a remarkable career, provided they have the right guidance, training, and self-belief.
              </p>
              <p>
                My mission has always been to build a platform that bridges the gap between ambition and achievement. We are dedicated to providing world-class training in communication, placement readiness, and cutting-edge technical skills to prepare our students for the demands of the modern corporate world.
              </p>
            </div>

            {/* Achievements/Badges */}
            <div className="pt-4 flex flex-wrap gap-3 justify-center lg:justify-start">
              {achievements.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] rounded-full text-[13px] font-semibold text-navy-deep hover:bg-[#F8FBFF] hover:border-[#EAF4FF] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(11,96,176,0.1)] transition-all duration-300 cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#EAF4FF] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  {item.label}
                </div>
              ))}
            </div>

            {/* Elegant CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-royal hover:bg-navy-deep text-white rounded-xl font-bold transition-all duration-300 shadow-[0_8px_25px_rgba(11,96,176,0.3)] hover:shadow-[0_10px_30px_rgba(11,96,176,0.4)] hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                Connect with the Team
                <Mail className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}