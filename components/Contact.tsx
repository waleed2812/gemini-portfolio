import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 text-center border-t border-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-white font-bold mb-6">Let's Build Something Amazing</h2>
        <p className="mb-8 max-w-lg mx-auto">
          I'm currently open to new opportunities in Node.js development and Cloud Integration.
        </p>
        <div className="flex justify-center gap-6 mb-8">
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-blue-400 transition-colors">Email Me</a>
            <a href={CONTACT_INFO.linkedin} className="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href={CONTACT_INFO.github} className="text-white hover:text-blue-400 transition-colors">GitHub</a>
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} {CONTACT_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;