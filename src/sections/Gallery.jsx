import React, { useState } from 'react';
import { Camera, X, ZoomIn, Eye, Sparkles, GraduationCap } from 'lucide-react';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      id: 1,
      title: 'Smart Classroom Labs',
      category: 'Classrooms',
      desc: 'Modern lab setups with dual screens, cloud machines, and collaborative layouts.',
      icon: GraduationCap,
      gradient: 'from-navy-deep via-navy-light to-royal'
    },
    {
      id: 2,
      title: 'AI Workshop 2026',
      category: 'Workshops',
      desc: 'Hands-on bootcamp training sessions compiling custom neural network weights.',
      icon: Sparkles,
      gradient: 'from-royal via-royal-light to-cyan-500'
    },
    {
      id: 3,
      title: 'Hiring Partners Seminar',
      category: 'Seminars',
      desc: 'Interaction panel sessions with senior architects and directors from top MNCs.',
      icon: Eye,
      gradient: 'from-gold via-gold-light to-yellow-600'
    },
    {
      id: 4,
      title: '24-Hour Code Hackathon',
      category: 'Events',
      desc: 'Student teams building and deploying complete micro-services applications.',
      icon: Camera,
      gradient: 'from-purple-900 via-indigo-700 to-royal'
    },
    {
      id: 5,
      title: 'Collaborative Group Study',
      category: 'Activities',
      desc: 'Peer learning and code review sessions in our open glass-atrium spaces.',
      icon: GraduationCap,
      gradient: 'from-slate-800 via-navy-light to-slate-900'
    },
    {
      id: 6,
      title: 'Graduation Ceremony',
      category: 'Events',
      desc: 'Celebrating academic milestones and distribution of job placement offers.',
      icon: Sparkles,
      gradient: 'from-navy-deep via-gold-dark to-gold'
    }
  ];

  const filters = ['All', 'Classrooms', 'Workshops', 'Seminars', 'Events', 'Activities'];

  const filteredItems = galleryItems.filter(item => 
    activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="relative py-24 bg-soft dark:bg-navy-dark transition-colors duration-500 scroll-mt-16 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-90 h-90 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-gold" />
            Campus Life
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Academy Experience in <span className="text-royal dark:text-royal-light">Focus</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Take a visual tour through our state-of-the-art campus, active hackathons, and seminar sessions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex gap-2 overflow-x-auto justify-start sm:justify-center pb-8 mb-4 no-scrollbar">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter
                  ? 'bg-royal text-white shadow-md shadow-royal/10'
                  : 'bg-white dark:bg-navy-deep/40 text-navy-deep/70 dark:text-white/70 hover:bg-royal/10 border border-navy-deep/5 dark:border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-lg border border-white/20 dark:border-white/5 bg-white dark:bg-navy-deep cursor-pointer group hover:scale-[1.01] hover:shadow-2xl duration-500"
              >
                
                {/* Visual card content (futuristic geometric pattern) */}
                <div className={`w-full h-56 bg-gradient-to-tr ${item.gradient} p-6 flex flex-col justify-between relative`}>
                  
                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

                  <div className="flex justify-between items-center text-white/90">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                      {item.category}
                    </span>
                    <Icon className="w-5 h-5 opacity-80" />
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ZoomIn className="w-5 h-5" />
                  </div>

                  <div className="text-left text-white mt-auto">
                    <h3 className="font-extrabold text-base tracking-tight">{item.title}</h3>
                  </div>

                </div>

                {/* Subtitle / Description beneath visual */}
                <div className="p-4 text-left">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-md animate-in fade-in duration-300">
          
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-3xl w-full rounded-3xl overflow-hidden glass border border-white/20 shadow-2xl p-6 text-center animate-in zoom-in-95 duration-300">
            
            {/* Visual pattern card expanded */}
            <div className={`w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-tr ${selectedItem.gradient} p-8 flex flex-col justify-between relative mb-6 shadow-inner`}>
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/10 text-white">
                  {selectedItem.category}
                </span>
                <selectedItem.icon className="w-6 h-6 text-white opacity-85" />
              </div>

              <div className="text-left text-white mt-auto">
                <h3 className="font-black text-2xl tracking-tight mb-2">{selectedItem.title}</h3>
                <p className="text-white/80 text-sm font-medium">{selectedItem.desc}</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-bold text-slate-400">
              <span>Campus Showcase Archive</span>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  window.dispatchEvent(new Event('open-admission'));
                }}
                className="text-royal hover:text-gold transition-colors flex items-center gap-1 cursor-pointer"
              >
                Explore Admissions →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
