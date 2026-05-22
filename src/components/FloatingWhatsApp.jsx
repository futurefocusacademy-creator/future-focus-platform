import React from 'react';

export default function FloatingWhatsApp() {
  const phoneNumber = "+919876543210"; // Sample Academy WhatsApp Number
  const prefilledMessage = encodeURIComponent("Hello Future Focus Academy, I would like to know more about the available courses and placement support.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      {/* Tooltip */}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-navy-deep text-navy-deep dark:text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md border border-white/20 opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with our advisor
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25d366]/40 text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.01-5.048-2.846-6.886C16.6 2.146 14.16 1.13 11.56 1.129c-5.439 0-9.867 4.375-9.87 9.742 0 1.721.459 3.401 1.329 4.898L2.04 21.982l6.23-1.63a9.74 9.74 0 0 0 4.377 1.05z" />
          <path d="M15.35 12.56c-.285-.143-1.688-.833-1.947-.928-.26-.095-.448-.143-.637.143-.19.285-.733.928-.897 1.117-.164.19-.328.214-.613.071-.285-.143-1.202-.443-2.29-1.413-.847-.756-1.42-1.69-1.586-1.975-.166-.285-.018-.44.124-.58.128-.126.285-.333.428-.5.143-.167.19-.286.285-.476.095-.19.048-.357-.024-.5-.071-.143-.637-1.536-.873-2.107-.23-.554-.483-.48-.637-.488-.147-.008-.316-.01-.486-.01-.17 0-.448.064-.682.316-.234.254-.894.873-.894 2.13s.914 2.47 1.042 2.64c.128.17 1.8 2.75 4.36 3.856.61.263 1.085.42 1.456.538.613.195 1.17.168 1.61.102.49-.074 1.688-.69 1.925-1.356.237-.666.237-1.237.166-1.356-.07-.12-.256-.19-.54-.333z" />
        </svg>
      </a>
    </div>
  );
}
