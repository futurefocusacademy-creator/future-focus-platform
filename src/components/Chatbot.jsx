import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Welcome to Future Focus Academy! 🚀 I am your AI learning assistant. How can I help you shape your future today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  const quickReplies = [
    { text: '📚 Explore Courses', key: 'courses' },
    { text: '💼 Placement Records', key: 'placements' },
    { text: '🎯 Admission Details', key: 'admissions' },
    { text: '📍 Academy Location', key: 'location' }
  ];

  const handleQuickReply = (reply) => {
    sendMessage(reply.text, reply.key);
  };

  const sendMessage = (text, key = null) => {
    if (!text.trim()) return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate Bot response
    setTimeout(() => {
      let botResponse = '';
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      if (key === 'courses' || text.toLowerCase().includes('course') || text.toLowerCase().includes('program')) {
        botResponse = 'We offer premium, industry-focused programs including: Full Stack Web Development, Flutter App Development, Artificial Intelligence, UI/UX Design, Python/Java, Data Science, and Placement Training. All courses come with hands-on projects!';
      } else if (key === 'placements' || text.toLowerCase().includes('placement') || text.toLowerCase().includes('job') || text.toLowerCase().includes('recruit')) {
        botResponse = 'Future Focus Academy has a 96% placement success rate. Our students are placed in top companies like Google, Amazon, Microsoft, and TCS. We offer dedicated career guidance, mock interviews, and resume reviews!';
      } else if (key === 'admissions' || text.toLowerCase().includes('admission') || text.toLowerCase().includes('apply') || text.toLowerCase().includes('join') || text.toLowerCase().includes('fee')) {
        botResponse = 'Admissions are open for our upcoming batch! You can click the "Apply Now" button at the top of the page, fill out the Contact form, or drop by for a career counseling session. Scholarship opportunities are also available based on performance.';
      } else if (key === 'location' || text.toLowerCase().includes('location') || text.toLowerCase().includes('where') || text.toLowerCase().includes('address')) {
        botResponse = 'Our main campus is located in the technology hub, featuring smart classrooms and modern lab facilities. Check out the interactive map in the Contact section below for exact directions!';
      } else {
        botResponse = "Thank you for reaching out! A dedicated career counselor will contact you shortly to answer your specific questions in detail. Feel free to explore our courses or apply directly using our enrollment and contact forms.";
      }

      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: 'bot',
        text: botResponse,
        time: timeStr
      }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-royal hover:bg-royal-dark text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-royal/40 transition-all duration-300 hover:scale-110 active:scale-95 glow-blue"
          aria-label="Open AI Assistant"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[500px] rounded-2xl glass-card border border-white/20 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-deep to-royal p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy-deep rounded-full"></span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">FFA AI Advisor</h3>
                <p className="text-xs text-white/70">Online & Ready</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-navy-dark/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.sender === 'user'
                      ? 'bg-royal text-white rounded-tr-none'
                      : 'bg-white dark:bg-navy-card text-navy-deep dark:text-white border border-slate-100 dark:border-white/5 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 bg-white dark:bg-navy-card px-4 py-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-white/5 w-16">
                <span className="w-2.5 h-2.5 bg-royal/40 rounded-full animate-bounce"></span>
                <span className="w-2.5 h-2.5 bg-royal/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2.5 h-2.5 bg-royal/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-slate-50/30 dark:bg-navy-dark/10 border-t border-slate-100 dark:border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            {quickReplies.map((reply, i) => (
              <button
                key={i}
                onClick={() => handleQuickReply(reply)}
                className="text-xs font-semibold text-royal dark:text-royal-light bg-royal/10 hover:bg-royal/20 px-3 py-1.5 rounded-full border border-royal/10 whitespace-nowrap transition-colors"
              >
                {reply.text}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputText);
            }}
            className="p-3 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-navy-card flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-slate-50 dark:bg-navy-deep/50 border border-slate-100 dark:border-white/5 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-royal text-navy-deep dark:text-white"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 bg-royal hover:bg-royal-dark text-white rounded-xl disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
