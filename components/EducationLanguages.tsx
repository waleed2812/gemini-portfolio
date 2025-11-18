import React from 'react';
import { EDUCATION, LANGUAGES } from '../constants';
import { GraduationCap, Globe } from 'lucide-react';

const EducationLanguages: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
              <GraduationCap className="text-blue-400" /> Education
            </h2>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-blue-300 font-medium mt-1">{edu.school}</p>
                <div className="flex justify-between mt-4 text-gray-400 text-sm">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div>
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-8 border-b border-gray-700 pb-4">
              <Globe className="text-green-400" /> Languages
            </h2>
            <div className="space-y-4">
              {LANGUAGES.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-700">
                  <span className="font-semibold text-lg">{lang.name}</span>
                  <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-200">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationLanguages;