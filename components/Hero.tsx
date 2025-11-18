import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white pt-32 pb-20 px-4 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image/Avatar Placeholder */}
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden flex-shrink-0 bg-gray-800 flex items-center justify-center">
             {/* Using a placeholder as per instructions, but styled to look premium */}
             <img src="https://picsum.photos/300/300" alt="Waleed Butt" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              {CONTACT_INFO.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-6 font-medium">
              {CONTACT_INFO.title}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed mx-auto md:mx-0">
              {CONTACT_INFO.summary}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors text-sm">
                <Mail size={16} /> {CONTACT_INFO.email}
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm">
                <Phone size={16} /> {CONTACT_INFO.phone}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm text-sm">
                <MapPin size={16} /> {CONTACT_INFO.location}
              </span>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-white" aria-label="GitHub">
                <Github size={24} />
              </a>
              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Download size={20} /> Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;