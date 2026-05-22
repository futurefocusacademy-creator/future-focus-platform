import React from 'react';
import { UserCheck, Terminal, Briefcase, Award, Compass, BookOpen, Activity, Users, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Expert Trainers',
      desc: 'Learn directly from industry leaders, elite career advisors, and corporate training executives.',
      icon: UserCheck,
      color: 'from-blue-500/10 to-royal/10 text-royal'
    },
    {
      title: 'Real-Time Training',
      desc: 'Immerse yourself in production-level project setups, live scenario simulations, and interactive coding labs.',
      icon: Terminal,
      color: 'from-amber-500/10 to-gold/10 text-gold'
    },
    {
      title: 'Placement Assistance',
      desc: 'Maximize career prospects with professional profile reviews, resume engineering, and mock interviews.',
      icon: Briefcase,
      color: 'from-green-500/10 to-emerald-500/10 text-green-500'
    },
    {
      title: 'Corporate Training Programs',
      desc: 'Custom skill transformations, enterprise bootcamps, and executive professional workshops.',
      icon: Award,
      color: 'from-purple-500/10 to-indigo-500/10 text-indigo-500'
    },
    {
      title: 'Career Guidance',
      desc: 'Complete personalized counseling sessions to map corporate trajectories and select optimal tech paths.',
      icon: Compass,
      color: 'from-cyan-500/10 to-royal/10 text-cyan-500'
    },
    {
      title: 'Industry-Focused Curriculum',
      desc: 'Continuously updated syllabus crafted in alignment with the specific hiring requirements of leading companies.',
      icon: BookOpen,
      color: 'from-teal-500/10 to-green-500/10 text-teal-500'
    },
    {
      title: 'Hands-On Learning',
      desc: 'Ditch passive lecture listening; learn active skills by continuously building, testing, and iterating solutions.',
      icon: Activity,
      color: 'from-rose-500/10 to-orange-500/10 text-rose-500'
    },
    {
      title: 'Professional Mentorship',
      desc: 'Directly match with elite domain veterans for active supervision, weekly reviews, and guidance.',
      icon: Users,
      color: 'from-pink-500/10 to-royal/10 text-pink-500'
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-soft dark:bg-navy-dark transition-colors duration-500 scroll-mt-16 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-royal/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Academy Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Why Choose Future Focus <span className="text-royal dark:text-royal-light">Academy</span>?
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            We provide a unique blend of industry immersion, modern resources, and career acceleration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 border border-white/20 dark:border-white/5 hover:scale-[1.03] hover:border-royal/30 dark:hover:border-royal-light/20 hover:shadow-2xl hover:shadow-royal/10 dark:hover:shadow-royal/15 transition-all duration-500 text-left relative group overflow-hidden"
              >
                {/* Visual Glow Spotlight inside card */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-tr from-royal/10 to-transparent rounded-full group-hover:scale-[2.5] duration-700 pointer-events-none"></div>

                {/* Icon Wrapper */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-5 shadow-inner transition-transform group-hover:-translate-y-1 duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-navy-deep dark:text-white mb-2 relative z-10 group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium relative z-10">
                  {feat.desc}
                </p>

                {/* Bottom line decor */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal group-hover:w-full transition-all duration-500"></span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
