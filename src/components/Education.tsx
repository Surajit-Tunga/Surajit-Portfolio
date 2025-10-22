import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../constants';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.03, rotateY: 5 }}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all shadow-xl group"
                  >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 mx-2">
                      <GraduationCap className="text-cyan-400" size={24} />
                    </div>

                    {/* Duration */}
                    <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full ml-2 mb-3">
                      {edu.duration}
                    </span>

                    {/* Degree */}
                    <h3 className="mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-purple-400 mb-3">
                      {edu.institution}
                    </p>


                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-500 pointer-events-none"></div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="relative"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full border-4 border-gray-950 z-10 relative"></div>
                    <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-20"></div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
