import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-teal-500" />
              <span className="text-2xl font-bold">Mostafa Mohamed</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Front-end developer passionate about creating beautiful, responsive, and user-focused web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5, color: '#14b8a6' }}
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-teal-500" />
                <span className="text-slate-300">mostafatop126@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://github.com/mostafa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mostafa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Mostafa Mohamed. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;