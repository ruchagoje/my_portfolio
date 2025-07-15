import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { BiAnalyse } from "react-icons/bi";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ruchagoje",
      icon: <FiGithub size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ruchagoje/",
      icon: <FiLinkedin size={20} />,
    },
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.querySelector(sectionId);
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-lg py-2"
            : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="text-primary"
            >
              <BiAnalyse size={32} />
            </motion.div>
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Rucha Goje
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ y: -2 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium relative
                    ${
                      activeSection === link.href.slice(1)
                        ? "text-primary dark:text-secondary"
                        : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary"
                    }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary dark:bg-secondary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle & Social Links */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary"
              >
                {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
              </motion.button>

              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary"
                >
                  {link.icon}
                </motion.a>
              ))}

              {/* Resume Download Button */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
              >
                <FiDownload size={16} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
            >
              {isDarkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-light dark:text-text-dark"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background-light dark:bg-background-dark rounded-lg mt-2 shadow-lg">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    whileHover={{ x: 10 }}
                    className={`block px-3 py-2 rounded-md text-base font-medium
                      ${
                        activeSection === link.href.slice(1)
                          ? "text-primary dark:text-secondary bg-primary/10 dark:bg-secondary/10"
                          : "text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary"
                      }`}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="flex items-center space-x-4 px-3 py-2">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-secondary"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Resume Download Button */}
              <motion.a
  href="/Rucha_goje_Resume_2025.pdf"
  download="Rucha_Resume.pdf"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-200"
>
  <FiDownload className="text-xl" />
  Download Resume
</motion.a>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
