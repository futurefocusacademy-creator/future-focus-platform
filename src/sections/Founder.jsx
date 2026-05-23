import React from 'react';
import {
  Quote,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Mail
} from 'lucide-react';

export default function Founder() {

  const achievements = [
    'Corporate Training Expert',
    'Placement & Career Development Mentor',
    'Communication & Leadership Coach',
    'Industry-Focused Skill Development Specialist'
  ];

  return (

    <section className="relative py-24 bg-soft overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-royal/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-royal/10 text-royal rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">

            <Quote className="w-3.5 h-3.5 text-gold" />

            Message from the Founder

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep tracking-tight">

            Leadership Vision of
            <span className="text-royal"> Future Focus Academy</span>

          </h2>

          <p className="text-slate-500 font-medium leading-relaxed">

            A message dedicated to inspiring students, empowering careers, and shaping confident professionals for the future.

          </p>

        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CARD */}
          <div className="lg:col-span-5 flex justify-center">

            <div className="w-full max-w-sm bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_0_40px_rgba(11,96,176,0.08)] relative overflow-hidden hover:scale-[1.02] transition-all duration-500">

              {/* Header */}
              <div className="flex justify-between items-center mb-6">

                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Founder & Director
                </span>

                <span className="flex items-center gap-1.5 text-xs text-green-500 font-bold px-2 py-1 rounded-full bg-green-500/10 border border-green-500/10">

                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>

                  Active Mentor

                </span>

              </div>

              {/* Avatar */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-tr from-royal to-royal-light flex items-center justify-center shadow-lg relative mb-6">

                <span className="font-extrabold text-4xl text-white tracking-tight">
                  PA
                </span>

                <div className="absolute inset-0 rounded-full border-2 border-gold/40 animate-ping [animation-duration:3s] pointer-events-none"></div>

              </div>

              {/* Founder Details */}
              <div className="text-center space-y-2 mb-6">

                <h3 className="font-extrabold text-2xl text-navy-deep">
                  Prasanth Ayyappan
                </h3>

                <p className="text-sm text-royal font-bold">
                  Founder & Director
                </p>

                <div className="flex justify-center gap-1 items-center">

                  <ShieldCheck className="w-4 h-4 text-gold" />

                  <span className="text-[11px] text-slate-400 font-semibold">
                    Career Mentor & Training Strategist
                  </span>

                </div>

              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-5 border-t border-slate-100 text-left text-sm font-semibold text-slate-500">

                {achievements.map((ach, idx) => (

                  <div key={idx} className="flex items-center gap-2">

                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />

                    <span>{ach}</span>

                  </div>

                ))}

              </div>

              {/* Contact Button */}
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="w-full mt-8 py-3 bg-royal/10 hover:bg-royal text-royal hover:text-white rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >

                <Mail className="w-4 h-4" />

                Connect with Us

              </button>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7 space-y-8 text-left relative">

            {/* Quote Icon */}
            <div className="absolute -top-10 -left-6 text-royal/5 select-none pointer-events-none">

              <Quote className="w-32 h-32" />

            </div>

            <div className="space-y-6 relative z-10">

              {/* Main Quote */}
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-deep leading-relaxed italic border-l-4 border-gold pl-5">

                "Success begins with learning, confidence, determination, and the courage to move forward despite challenges."

              </h3>

              {/* Message */}
              <div className="space-y-5 text-slate-500 leading-relaxed text-sm sm:text-base">

                <p>
                  Welcome to Future Focus Academy.
                </p>

                <p>
                  At Future Focus Academy, we believe that every student carries the power to build a successful future with the right guidance, confidence, and opportunities. Our mission is to inspire young minds, develop essential skills, and prepare individuals to face the competitive world with courage and clarity.
                </p>

                <p>
                  We are committed to creating a learning environment that encourages growth, discipline, leadership, communication, and career excellence. Every session, every activity, and every interaction at our academy is designed to shape students into confident professionals and responsible individuals.
                </p>

                <p>
                  Success does not happen overnight. It begins with learning, determination, and the willingness to move forward despite challenges. We are here to support that journey and help students discover their true potential.
                </p>

                <p>
                  Together, let us build a brighter future where dreams turn into achievements.
                </p>

                <p>
                  Thank you for being a part of Future Focus Academy.
                </p>

              </div>

            </div>

            {/* Signature */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">

              <div>

                <p className="font-extrabold text-navy-deep text-lg">
                  Prasanth Ayyappan
                </p>

                <p className="text-sm text-slate-400">
                  Founder & Director, Future Focus Academy
                </p>

              </div>

              <div className="font-serif italic text-2xl text-gold select-none transform -rotate-3 tracking-wide">

                “Career Starts Here”

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}