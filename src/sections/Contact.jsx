import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [activeField, setActiveField] = useState({ name: false, email: false, phone: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setActiveField(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setActiveField(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    // Save to LocalStorage for offline synchronization and persistence
    const existing = JSON.parse(localStorage.getItem('ffa_inquiries') || '[]');
    const newInquiry = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      date: new Date().toLocaleDateString(),
      status: 'Pending'
    };
    localStorage.setItem('ffa_inquiries', JSON.stringify([newInquiry, ...existing]));

    // Dispatch custom event for inquiry update notifications
    window.dispatchEvent(new Event('ffa_new_inquiry'));

    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setActiveField({ name: false, email: false, phone: false, message: false });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-soft dark:bg-navy-dark transition-colors duration-500 scroll-mt-16 overflow-hidden">

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-royal/10 dark:bg-royal/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-royal/10 dark:bg-royal/20 text-royal dark:text-royal-light rounded-full text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-gold" />
            Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-deep dark:text-white tracking-tight">
            Get in Touch with Our <span className="text-royal dark:text-royal-light">Advisors</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-300 font-medium">
            Submit your queries about fee structures, admission criteria, or syllabus configurations.
          </p>
        </div>

        {/* Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact details & Mock Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-extrabold text-navy-deep dark:text-white">Campus Information</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                Our administrative offices are open Monday to Saturday. Drop by for a cup of coffee and a face-to-face career session.
              </p>
            </div>

            {/* Icons list */}
            <div className="space-y-4 text-sm text-slate-500 dark:text-slate-300">

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-deep border border-navy-deep/5 dark:border-white/5">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <h4 className="font-extrabold text-navy-deep dark:text-white text-xs">
                    Our Address
                  </h4>
                  <p className="text-xs mt-0.5">
                    2/428 Ammans Nagar Teachers Colony, NGGO Colony,
                    Coimbatore, Tamil Nadu 641022
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-deep border border-navy-deep/5 dark:border-white/5">
                <Phone className="w-5 h-5 text-royal shrink-0" />
                <div>
                  <h4 className="font-extrabold text-navy-deep dark:text-white text-xs">
                    Call Us
                  </h4>
                  <p className="text-xs mt-0.5">
                    +91 9944787805
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-navy-deep border border-navy-deep/5 dark:border-white/5">
                <Clock className="w-5 h-5 text-green-500 shrink-0" />
                <div>
                  <h4 className="font-extrabold text-navy-deep dark:text-white text-xs">
                    Office Hours
                  </h4>
                  <p className="text-xs mt-0.5">
                    Mon - Sat: 9:00 AM - 7:00 PM (Sunday Closed)
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Mock SVG Panel */}
            <div className="relative rounded-3xl overflow-hidden border border-navy-deep/5 dark:border-white/5 h-48 bg-slate-100 dark:bg-navy-deep/30 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-[radial-gradient(#0b60b0_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

              <div className="text-center z-10 space-y-2">
                <Navigation className="w-8 h-8 text-royal mx-auto animate-bounce" />
                <h4 className="font-extrabold text-xs text-navy-deep dark:text-white">Bengaluru Tech Hub Center</h4>
                <p className="text-[10px] text-slate-400">12.9716° N, 77.5946° E</p>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] font-bold text-royal dark:text-royal-light uppercase tracking-wider hover:underline"
                >
                  Open in Maps App →
                </a>
              </div>

              {/* Glowing radar line */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-royal/20 animate-ping [animation-duration:4s]"></div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 border border-white/20 dark:border-white/5 shadow-2xl relative">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep dark:text-white text-left mb-2">Submit an Inquiry</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm text-left mb-8 font-medium">
                Our enrollment advisor will respond to your email or call you within 2-4 hours.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                  <h4 className="text-xl font-bold text-navy-deep dark:text-white">Inquiry Received!</h4>
                  <p className="text-xs text-slate-400 max-w-xs mt-1">
                    Thank you! Your submission was successful. Our enrollment team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">

                  {/* Name Input with Floating Label */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onFocus={() => handleFocus('name')}
                      onBlur={(e) => handleBlur('name', e.target.value)}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-navy-deep/20 dark:border-white/20 focus:border-royal text-navy-deep dark:text-white py-3 text-sm focus:outline-none transition-colors"
                    />
                    <label
                      className={`absolute left-0 top-3 text-xs sm:text-sm font-semibold text-slate-400 pointer-events-none transition-all duration-300 ${activeField.name || formData.name ? '-translate-y-6 text-[10px] text-royal font-bold uppercase' : ''
                        }`}
                    >
                      Your Full Name
                    </label>
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-navy-deep/20 dark:border-white/20 focus:border-royal text-navy-deep dark:text-white py-3 text-sm focus:outline-none transition-colors"
                    />
                    <label
                      className={`absolute left-0 top-3 text-xs sm:text-sm font-semibold text-slate-400 pointer-events-none transition-all duration-300 ${activeField.email || formData.email ? '-translate-y-6 text-[10px] text-royal font-bold uppercase' : ''
                        }`}
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onFocus={() => handleFocus('phone')}
                      onBlur={(e) => handleBlur('phone', e.target.value)}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-navy-deep/20 dark:border-white/20 focus:border-royal text-navy-deep dark:text-white py-3 text-sm focus:outline-none transition-colors"
                    />
                    <label
                      className={`absolute left-0 top-3 text-xs sm:text-sm font-semibold text-slate-400 pointer-events-none transition-all duration-300 ${activeField.phone || formData.phone ? '-translate-y-6 text-[10px] text-royal font-bold uppercase' : ''
                        }`}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onFocus={() => handleFocus('message')}
                      onBlur={(e) => handleBlur('message', e.target.value)}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full bg-transparent border-b border-navy-deep/20 dark:border-white/20 focus:border-royal text-navy-deep dark:text-white py-3 text-sm focus:outline-none transition-colors resize-none"
                    ></textarea>
                    <label
                      className={`absolute left-0 top-3 text-xs sm:text-sm font-semibold text-slate-400 pointer-events-none transition-all duration-300 ${activeField.message || formData.message ? '-translate-y-6 text-[10px] text-royal font-bold uppercase' : ''
                        }`}
                    >
                      Brief Message / Syllabus Request
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-royal hover:bg-royal-dark text-white font-extrabold rounded-xl shadow-lg hover:shadow-royal/20 transition-all duration-300 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4.5 h-4.5" /> Send Message
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
