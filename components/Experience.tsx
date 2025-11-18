import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Professional Journey</h2>

        <div className="relative space-y-12">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-0 md:pl-20">
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-white border-4 border-blue-500 rounded-full items-center justify-center shadow-sm z-10">
                <Briefcase size={24} className="text-blue-600" />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{job.role}</h3>
                    <div className="flex items-center gap-2 text-lg text-blue-600 font-medium mt-1">
                      {job.company}
                      {job.website && (
                        <a href={job.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                    <span className="flex items-center gap-1 mt-1"><MapPin size={14} /> {job.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;