import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 flex items-center gap-2"
          >
            © {new Date().getFullYear()} {personalInfo.name}.
          </motion.p>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            {'</>'}
          </motion.div>

          {/* Tech Stack */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            Built with Figma Make AI.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
