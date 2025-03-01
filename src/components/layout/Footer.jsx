// src/components/layout/Footer.jsx
// Professional footer section with modern design and interactive elements
// Author: Rucha Goje

import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiExternalLink,
} from "react-icons/fi";
import { BiAnalyse, BiData } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ruchagoje",
      icon: <FiLinkedin size={18} />,
    },
    {
      name: "GitHub",
      href: "https://github.com/ruchagoje",
      icon: <FiGithub size={18} />,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: <FiMail size={18} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary dark:from-primary/50 dark:via-secondary/50 dark:to-primary/50" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <BiData className="text-2xl text-primary dark:text-secondary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rucha Goje
              </span>
            </motion.div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Data Analyst passionate about transforming data into meaningful
              insights
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200 text-sm"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Back to Top Section */}
          <div className="flex flex-col items-end justify-between">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
            >
              <FiArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Rucha Goje. All rights reserved.
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
