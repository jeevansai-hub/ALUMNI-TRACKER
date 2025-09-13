import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Connect': [
      { name: 'Alumni Directory', href: '/directory' },
      { name: 'Wall of Fame', href: '/wall-of-fame' },
      { name: 'Mentorship', href: '/mentorship' },
      { name: 'Events', href: '/events' },
    ],
    'Resources': [
      { name: 'Career Services', href: '#' },
      { name: 'Job Board', href: '#' },
      { name: 'Newsletter', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
    'About': [
      { name: 'Our Story', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-slate-900 dark:bg-slate-950 text-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <UserGroupIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Alumni Tracker</span>
            </motion.div>
            <p className="text-slate-400 mb-6">
              Connecting alumni worldwide, fostering mentorship, and celebrating achievements.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-400">
                <EnvelopeIcon className="w-4 h-4" />
                <span>alumni@university.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPinIcon className="w-4 h-4" />
                <span>123 University Ave, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 text-sm">
            © {currentYear} Alumni Tracker. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Facebook
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
