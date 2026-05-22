import React, { useState, useEffect } from 'react';
import { X, Sparkles, Send, CheckCircle2 } from 'lucide-react';

export default function AdmissionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const courses = [
    'Full Stack Development',
    'Flutter App Development',
    'Artificial Intelligence',
    'UI/UX Design',
    'Spoken English',
    'Python Programming',
    'Data Science'
  ];

  useEffect(() => {
    const handleOpen = (e) => {
      setSubmitted(false);
      setFormData(prev => ({
        ...prev,
        course: e.detail?.course || ''
      }));
      setIsOpen(true);
    };
    window.addEventListener('open-admission', handleOpen);

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('admission_popup_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('open-admission', handleOpen);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('admission_popup_dismissed', 'true');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.course) return;
    
    // Simulate API registration
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white dark:bg-navy-deep p-6 sm:p-8 shadow-2xl border border-white/20 scale-100 transition-all duration-300">
        
        {/* Glow behind */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-royal/10 dark:bg-royal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/10 dark:bg-gold/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-1.5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-navy-deep dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-gold">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs uppercase tracking-wider font-bold">Limited Seats Available</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-deep dark:text-white mb-2 leading-tight">
              Admissions Open for <span className="text-royal dark:text-royal-light">2026 Batch</span>
            </h3>
            
            <p className="text-sm text-slate-500 dark:text-slate-300 mb-6">
              Apply today to receive career counseling, early-bird scholarships, and guaranteed placement training support.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-50 dark:bg-navy-dark/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-royal text-navy-deep dark:text-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 dark:bg-navy-dark/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-royal text-navy-deep dark:text-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-slate-50 dark:bg-navy-dark/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-royal text-navy-deep dark:text-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Preferred Program</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-slate-50 dark:bg-navy-dark/40 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-royal text-navy-deep dark:text-white transition-colors"
                >
                  <option value="" disabled>Select a course</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 bg-gradient-to-r from-royal to-royal-light text-white font-bold rounded-xl shadow-lg hover:shadow-royal/20 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-navy-deep dark:text-white mb-2">Application Submitted!</h3>
            <p className="text-sm text-slate-500 dark:text-slate-300 max-w-sm">
              Thank you, <span className="font-semibold text-royal dark:text-royal-light">{formData.name}</span>. An admissions counselor will call you within 24 hours to schedule your interview.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
