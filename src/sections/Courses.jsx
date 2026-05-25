import React, { useState } from 'react';
import { 
  Search, Code, MessageSquare, Target, Briefcase, Terminal, 
  BarChart4, Clock, GraduationCap, ArrowUpRight, 
  TrendingUp, Sparkles, Shield, Languages, CheckCircle2 
} from 'lucide-react';

export default function Courses() {
  const [activePane, setActivePane] = useState('services'); // 'services' or 'technical'
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    {
      title: 'Corporate Training',
      icon: Briefcase,
      desc: 'Customized talent transformation programs and skill-alignment bootcamps engineered to optimize enterprise productivity.',
      features: ['Tailored Curriculum', 'MNC Trainers', 'Flexible Schedules']
    },
    {
      title: 'Soft Skills Training',
      icon: Sparkles,
      desc: 'Refine personality dynamics, emotional intelligence, leadership traits, and behavioral ethics for absolute workplace synergy.',
      features: ['Leadership Dynamics', 'Public Presentation', 'Group Ethics']
    },
    {
      title: 'Placement Training',
      icon: GraduationCap,
      desc: 'Rigorous preparation involving simulated coding assessments, mock panels, and customized placement strategy guidance.',
      features: ['Mock Interviews', 'Resume Engineering', 'HR Preparation']
    },
    {
      title: 'Communication',
      icon: MessageSquare,
      desc: 'Develop persuasive expression, absolute clarity, and confident body language to command influence in professional meetings.',
      features: ['Voice Modulation', 'Confidence Drills', 'Public Speaking']
    },
    {
      title: 'Spoken English',
      icon: Languages,
      desc: 'Elevate fluency, pronunciation, grammar construction, and conversational poise from absolute foundation levels.',
      features: ['Accent Correction', 'Fluency Drills', 'Grammar Excellence']
    },
    {
      title: 'Business Communication',
      icon: Shield,
      desc: 'Master executive corporate emails, formal reports, boardroom protocols, and client interaction strategies.',
      features: ['Executive Writing', 'Boardroom Protocols', 'Client Relations']
    },
    {
      title: 'Aptitude and Logical Reasoning',
      icon: Target,
      desc: 'Accelerate mental math, analytical deductions, quantitative capabilities, and logical puzzle resolution speeds.',
      features: ['Quantitative Shortcuts', 'Logical Mapping', 'Speed Drills']
    },
    {
      title: 'Placement Services',
      icon: TrendingUp,
      desc: 'Exclusive access to our corporate recruitment pipeline, active hiring events, and interview schedules.',
      features: ['Direct Hiring Drives', 'Salary Negotiation', 'MNC Networks']
    }
  ];

  const technicalPrograms = [
    {
      title: 'Power BI',
      icon: BarChart4,
      duration: '3 Months',
      level: 'All Levels',
      desc: 'Transform raw datasets into stunning interactive intelligence dashboards. Learn industrial business analysis from data integration to analytics.',
      topics: ['Dashboards', 'Data Visualization', 'Reports', 'Business Analytics', 'Data Insights'],
      badgeColor: 'bg-amber-500/10 text-amber-600  border-amber-500/20',
      glowClass: 'hover:shadow-amber-500/10 hover:border-amber-500/30'
    },
    {
      title: 'Full Stack Development',
      icon: Code,
      duration: '6 Months',
      level: 'Beginner to Pro',
      desc: 'Construct robust modern web ecosystems from database nodes to interactive frontend UI. Complete immersive industry-grade curriculum.',
      topics: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'APIs'],
      badgeColor: 'bg-royal/10 text-royal  border-royal/20',
      glowClass: 'hover:shadow-royal/10 hover:border-royal/30'
    },
    {
      title: 'Python Programming',
      icon: Terminal,
      duration: '3 Months',
      level: 'Beginner to Pro',
      desc: 'Establish solid logical fundamentals using the world\'s most popular language. Master scripting, data structures, and automation algorithms.',
      topics: ['Python Basics', 'Functions', 'File Handling', 'Data Structures', 'Mini Projects'],
      badgeColor: 'bg-green-500/10 text-green-600  border-green-500/20',
      glowClass: 'hover:shadow-green-500/10 hover:border-green-500/30'
    }
  ];

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTech = technicalPrograms.filter((tech) =>
    tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tech.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const triggerEnroll = (title) => {
    window.dispatchEvent(new CustomEvent('open-admission', { detail: { course: title } }));
  };

  return (
    <section id="courses" className="relative py-24 bg-white  transition-colors duration-500 scroll-mt-16 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-royal/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10  text-royal  rounded-full text-xs font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            Academy Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep  tracking-tight">
            Explore Our Comprehensive <span className="text-royal ">Offerings</span>
          </h2>
          <p className="text-slate-500  font-medium">
            Unlock professional competence with our dual-pane spectrum of corporate solutions and future-ready engineering training.
          </p>
        </div>

        {/* Double-Pane Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 pb-6 border-b border-navy-deep/5 ">
          
          {/* Double-Pane Switcher Tabs */}
          <div className="flex bg-soft  p-1.5 rounded-full border border-navy-deep/5  w-full md:w-auto">
            <button
              onClick={() => {
                setActivePane('services');
                setSearchQuery('');
              }}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activePane === 'services'
                  ? 'bg-royal text-white shadow-md shadow-royal/20'
                  : 'text-navy-deep/60  hover:text-navy-deep :text-white'
              }`}
            >
              Services We Provide
            </button>
            <button
              onClick={() => {
                setActivePane('technical');
                setSearchQuery('');
              }}
              className={`flex-1 md:flex-initial px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activePane === 'technical'
                  ? 'bg-royal text-white shadow-md shadow-royal/20'
                  : 'text-navy-deep/60  hover:text-navy-deep :text-white'
              }`}
            >
              Technical Training
            </button>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={activePane === 'services' ? "Search services..." : "Search topics (e.g. React)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-soft  border border-navy-deep/5  rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-royal text-navy-deep  transition-colors"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>

        </div>

        {/* Double-Pane Display */}
        {activePane === 'services' ? (
          /* PANE 1: Services We Provide (8 items) */
          filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card flex flex-col justify-between p-6 border border-white/20  hover:scale-[1.02] hover:shadow-xl hover:shadow-royal/5 hover:border-royal/30 :border-royal-light/20 duration-500 text-left relative overflow-hidden group"
                  >
                    <div>
                      {/* Service Icon */}
                      <div className="w-12 h-12 bg-royal/10  text-royal  rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Service Title */}
                      <h3 className="font-extrabold text-base sm:text-lg text-navy-deep  mb-3 group-hover:text-royal :text-royal-light transition-colors">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-slate-500  text-xs sm:text-sm leading-relaxed font-medium mb-6">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-4 border-t border-navy-deep/5  mt-auto">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400 ">
                          <CheckCircle2 className="w-3.5 h-3.5 text-royal  shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                      
                      <button
                        onClick={() => triggerEnroll(service.title)}
                        className="w-full mt-4 py-2 bg-royal/5 hover:bg-royal text-royal  hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        Inquire Service <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-royal/5 rounded-full flex items-center justify-center text-royal mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-lg text-navy-deep ">No services match your query</h4>
              <p className="text-sm text-slate-400 mt-1">Try adapting your search keyword.</p>
            </div>
          )
        ) : (
          /* PANE 2: Technical Training Programs (3 items) */
          filteredTech.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {filteredTech.map((tech, idx) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={idx}
                    className={`glass-card flex flex-col justify-between p-8 border border-white/20  hover:scale-[1.01] hover:shadow-2xl duration-500 text-left relative overflow-hidden group ${tech.glowClass}`}
                  >
                    <div>
                      {/* Header details */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 bg-royal/10  text-royal  rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 bg-royal/5  text-royal  rounded-full border border-royal/10">
                            {tech.duration}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {tech.level}
                          </span>
                        </div>
                      </div>

                      {/* Technical Title */}
                      <h3 className="font-black text-xl sm:text-2xl text-navy-deep  mb-4 group-hover:text-royal :text-royal-light transition-colors">
                        {tech.title}
                      </h3>

                      {/* Technical Description */}
                      <p className="text-slate-500  text-xs sm:text-sm leading-relaxed font-medium mb-6">
                        {tech.desc}
                      </p>
                    </div>

                    {/* Topics Showcase */}
                    <div className="space-y-4 pt-6 border-t border-navy-deep/5  mt-auto">
                      <div>
                        <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-3">
                          Program Curriculum Topics:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {tech.topics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md border ${tech.badgeColor}`}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => triggerEnroll(tech.title)}
                        className="w-full py-3 bg-royal hover:bg-royal-dark text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-royal/10"
                      >
                        Enroll in Program <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-royal/5 rounded-full flex items-center justify-center text-royal mb-4">
                <Search className="w-8 h-8" />
              </div>
              <h4 className="font-extrabold text-lg text-navy-deep ">No technical programs match your query</h4>
              <p className="text-sm text-slate-400 mt-1">Try typing a keyword like "React" or "Basics".</p>
            </div>
          )
        )}

      </div>
    </section>
  );
}
