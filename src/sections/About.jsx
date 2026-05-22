import React from 'react';
import { Target, Eye, Compass, Heart, GraduationCap, Laptop, Briefcase, Award } from 'lucide-react';

export default function About() {
  const corePillars = [
    {
      title: 'Our Mission',
      description: 'To bridge the gap between academic theory and industry demands by delivering futuristic, high-end technical training and career development.',
      icon: Target,
      color: 'text-royal bg-royal/10'
    },
    {
      title: 'Our Vision',
      description: 'To become the premier global ecosystem for tech education, fostering innovators, coding professionals, and creative thinkers who lead modern industries.',
      icon: Eye,
      color: 'text-gold bg-gold/10'
    },
    {
      title: 'Student-First Philosophy',
      description: 'We believe learning is active. Our curriculum centers around actual project production, interactive coding environments, and 1-on-1 industry mentoring.',
      icon: Compass,
      color: 'text-green-500 bg-green-500/10'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Academy Inception', desc: 'Started with a vision of high-impact bootcamps.' },
    { year: '2023', title: 'AI Integration', desc: 'Introduced adaptive AI learning workflows.' },
    { year: '2024', title: '100+ Hiring Partners', desc: 'Established partnerships with leading MNCs.' },
    { year: '2026', title: 'Futuristic Hub', desc: 'Launched fully immersive smart learning campus.' }
  ];

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-navy-dark/50 transition-colors duration-500 scroll-mt-10 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-royal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            Academy Legacy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Redefining Technical <span className="text-royal dark:text-royal-light">Education</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Future Focus Academy isn't just an institute; it's a launchpad for next-generation tech professionals. We build careers, not just credentials.
          </p>
        </div>

        {/* Content Layout (Alternating content sections) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep dark:text-white leading-tight">
              An Immersive Learning Ecosystem Designed for Growth
            </h3>
            
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              At Future Focus Academy, we understand that traditional educational methods are no longer sufficient to keep pace with the rapidly evolving technology landscape. That's why we have built a modern learning framework centered around real-world projects, live collaboration, and expert industry mentors.
            </p>
            
            <p className="text-slate-500 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Whether you are an aspiring software engineer, a mobile app developer, or looking to master the complexities of Artificial Intelligence and Data Science, we provide the resources, the environment, and the community to turn your ambitions into achievements.
            </p>

            {/* Achievement blocks */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { title: 'Project-Based', desc: '100% Practical', icon: Laptop },
                { title: 'Placements', desc: '96% Success Rate', icon: Briefcase },
                { title: 'Accredited', desc: 'Global Certificate', icon: Award }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-soft dark:bg-navy-deep/40 rounded-2xl text-center border border-navy-deep/5 dark:border-white/5">
                  <item.icon className="w-5 h-5 mx-auto text-royal dark:text-royal-light mb-1.5" />
                  <h4 className="text-xs font-bold text-navy-deep dark:text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Milestones / History Timeline */}
          <div className="lg:col-span-5 relative bg-soft dark:bg-navy-deep/30 rounded-3xl p-6 sm:p-8 border border-navy-deep/5 dark:border-white/5 shadow-inner">
            <h4 className="font-extrabold text-lg text-navy-deep dark:text-white mb-6 text-left">Our Milestone Timeline</h4>
            
            {/* Timeline */}
            <div className="relative border-l-2 border-royal/30 pl-6 space-y-6 text-left">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-navy-deep border-2 border-royal group-hover:bg-gold transition-colors duration-300"></span>
                  
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-royal dark:text-royal-light uppercase">{milestone.year}</span>
                    <h5 className="font-bold text-sm text-navy-deep dark:text-white">{milestone.title}</h5>
                    <p className="text-xs text-slate-400 dark:text-slate-400">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Grid: Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-navy-deep/5 dark:border-white/5">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 text-left border border-white/20 dark:border-white/5 hover:scale-[1.02] duration-300 relative group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-base text-navy-deep dark:text-white mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {pillar.description}
                </p>
                {/* Underline decorative glow */}
                <span className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-royal to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
