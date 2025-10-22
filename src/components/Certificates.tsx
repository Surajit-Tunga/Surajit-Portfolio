import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../constants';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
            Certificates
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications and courses I've completed to enhance my skills and knowledge.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all shadow-xl">
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  
                  {/* Award Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30">
                    <Award className="text-cyan-400" size={20} />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-5">
                  <h3 className="mb-2 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-purple-400 mb-2">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">{cert.date}</span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </div>

                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ transform: 'skewX(-20deg)' }}
                ></motion.div>
              </div>

              {/* 3D Shadow */}
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 rounded-xl"></div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
