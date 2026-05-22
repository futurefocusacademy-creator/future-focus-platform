import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: 'What is the duration of the courses?',
      a: 'Our technical specialization programs range from 3 to 6 months. Foundations like Python Programming are 3 months, specialized paths like Flutter Development take 4 months, and comprehensive tracks like Full Stack Development or Data Science are 6 months. Detailed schedules are provided upon registration.'
    },
    {
      q: 'How does the placement support system work?',
      a: 'We offer a dedicated 1-on-1 placement support ecosystem. This includes technical resume reviews, LinkedIn profiling, mock interviews with industry architects, and direct entry into recruitment drives with our 120+ MNC and startup hiring partners.'
    },
    {
      q: 'Will I receive a completion certification?',
      a: 'Yes, upon successfully finishing your course modules and completing the mandatory capstone projects, you will receive a verifiable industry-accredited certificate from Future Focus Academy, along with a portfolio profile detailing your completed project repositories.'
    },
    {
      q: 'Do you offer online or offline classes?',
      a: 'We support a hybrid model. Students can attend fully immersive in-person sessions at our smart tech campus or choose live online classroom sessions. Both formats cover identical curriculums, offer direct mentor chats, and include local sandboxed lab access.'
    },
    {
      q: 'Are there internship opportunities during training?',
      a: 'Absolutely. We collaborate with startup incubation labs and corporate partners to provide structured 2 to 3-month internships during or immediately after the training program, giving you real-world commercial experience to show on your resume.'
    },
    {
      q: 'What is the fee structure and payment options?',
      a: 'Our course fees are structured competitively, matching premium training standards. We offer early-bird discounts, student scholarships based on performance assessments, and flexible monthly EMI payment options through our partner banks with 0% interest.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative py-24 bg-white dark:bg-navy-dark/50 transition-colors duration-500 scroll-mt-16 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-royal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-3.5 h-3.5 text-gold" />
            Support Desk
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Frequently Asked <span className="text-royal dark:text-royal-light">Questions</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Find immediate answers regarding program schedules, career pipelines, and learning layouts.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="glass border border-navy-deep/5 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-extrabold text-sm sm:text-base text-navy-deep dark:text-white transition-colors hover:text-royal dark:hover:text-royal-light cursor-pointer select-none"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-royal shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} />
                </button>

                {/* Smooth Expand Container using CSS grid-rows transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-semibold border-t border-navy-deep/5 dark:border-white/5">
                      {faq.a}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* FAQ Contact Prompt */}
        <div className="mt-12 p-6 glass-card border border-white/20 dark:border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-royal/10 dark:bg-royal/20 text-royal flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-navy-deep dark:text-white">Still have questions?</h4>
              <p className="text-xs text-slate-400 mt-0.5">Connect with our support executives for immediate assistance.</p>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary py-2.5 px-5 text-xs cursor-pointer whitespace-nowrap"
          >
            Ask a Question
          </button>
        </div>

      </div>
    </section>
  );
}
