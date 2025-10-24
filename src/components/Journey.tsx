import { motion } from 'motion/react';
import { Trophy, Award,  Calendar, Medal } from 'lucide-react';
import { journey } from '../constants';
import { ImageWithFallback } from './figma/ImageWithFallback';

const typeIcons = {
  milestone: Trophy,
  achievement: Medal,
  award: Award,
};

const typeColors = {
  milestone: 'from-orange-500 to-yellow-500',
  education: 'from-purple-500 to-pink-500',
  achievement: 'from-cyan-500 to-blue-500'
};

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full mb-4">
            <Trophy className="text-cyan-400" size={20} />
            <span className="text-cyan-400">Achievements</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            My Journey as a Student
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hackathons, competitions, and achievements that shaped my developer journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Vertical Timeline Line - Mobile */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = typeIcons[item.type as keyof typeof typeIcons];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 pl-12 lg:pl-0 pr-4 lg:pr-0 ${isEven ? 'lg:text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all shadow-xl group relative overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                        <ImageWithFallback 
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {/* Date Badge Overlay */}
                        <div className="absolute top-4 left-4">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${typeColors[item.type as keyof typeof typeColors]} text-white rounded-full text-sm sm:text-base shadow-lg backdrop-blur-sm`}>
                            <Calendar size={14} className="sm:w-4 sm:h-4" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        {/* Position Badge Overlay */}
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 backdrop-blur-md text-yellow-400 rounded-full text-sm sm:text-base shadow-lg border border-yellow-400/30">
                            <span className="flex items-center gap-1.5">
                              {/* <Trophy size={14} className="sm:w-4 sm:h-4" /> */}
                              {(() => {
                                  const Icon = typeIcons[item.type as keyof typeof typeIcons];
                                  return Icon ? <Icon size={14} className="sm:w-4 sm:h-4" /> : null;
                                  })()}

                              {item.position}
                            </span>
                          </div>
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        {/* Title */}
                        <h3 className="mb-3 text-white group-hover:text-cyan-400 transition-colors break-words">
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 break-words text-sm sm:text-base leading-relaxed text-left">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </motion.div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-2 sm:left-8 lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      {/* Icon Container */}
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${typeColors[item.type as keyof typeof typeColors]} rounded-full flex items-center justify-center border-4 border-gray-950 z-10 relative  shadow-lg`}>
                        <Icon className="text-white " size={20} />
                      </div>
                      
                      {/* Pulse Animation */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${typeColors[item.type as keyof typeof typeColors]} rounded-full animate-ping opacity-20`}></div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline End Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative mt-12 flex justify-center"
        >
          <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Want to be part of my next milestone?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
