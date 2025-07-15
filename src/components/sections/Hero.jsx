// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiLinkedin, FiGithub } from "react-icons/fi";
import { BsDatabase, BsGraphUp, BsClipboardData } from "react-icons/bs";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={22} />,
      url: "https://www.linkedin.com/in/ruchagoje/",
    },
    {
      name: "GitHub",
      icon: <FiGithub size={22} />,
      url: "https://github.com/ruchagoje/",
    },
  ];

  const skillCards = [
    {
      icon: <BsDatabase className="text-3xl" />,
      title: "Data Analysis",
      description: "SQL • Python • Excel",
      delay: 0.2,
    },
    {
      icon: <BsGraphUp className="text-3xl" />,
      title: "Data Visualization",
      description: "Tableau • Power BI",
      delay: 0.4,
    },
    {
      icon: <BsClipboardData className="text-3xl" />,
      title: "Statistical Analysis",
      description: "Insights • Reporting",
      delay: 0.6,
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-background-light dark:bg-background-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,77,230,0.08),transparent_60%,transparent_100%),radial-gradient(circle_at_70%_30%,rgba(5,191,219,0.05),transparent_60%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Availability Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-primary dark:text-secondary">
                  Available for Projects
                </span>
              </div>

              {/* Headings */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block text-text-light dark:text-text-dark">
                    Hi, I'm{" "}
                  </span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Rucha Goje
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-text-light/80 dark:text-text-dark/80">
                  Data Analyst & Visualization Specialist
                </h2>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-xl leading-relaxed text-text-light/80 dark:text-text-dark/80 max-w-2xl">
                Transforming complex data into actionable insights through
                advanced analytics and compelling visualizations. Specialized in
                helping businesses make data-driven decisions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
              <motion.a
                  href="/Rucha_goje_Resume_2025.pdf" // Path to the file inside public folder
                  download="Rucha_Resume.pdf" // Name for the downloaded file
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-200"
                >
                  <FiDownload className="text-xl" />
                  Download Resume
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-background-dark text-primary dark:text-secondary rounded-xl font-medium border-2 border-primary/20 dark:border-secondary/20 hover:border-primary dark:hover:border-secondary transition-all duration-200"
                >
                  Explore Projects
                  <FiArrowRight className="text-xl" />
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4">
                <span className="text-text-light/60 dark:text-text-dark/60 font-medium">
                  Connect with me
                </span>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-xl bg-background-light dark:bg-background-dark text-text-light/60 dark:text-text-dark/60 hover:text-primary dark:hover:text-secondary border-2 border-text-light/10 dark:border-text-dark/10 hover:border-primary/30 dark:hover:border-secondary/30 transition-all duration-200"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Skill Cards */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="relative h-[600px] sm:h-[700px] lg:h-[800px]">
              {skillCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -15, 0],
                    transition: {
                      y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: card.delay,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className={`absolute w-72 p-8 bg-white dark:bg-background-dark rounded-3xl shadow-2xl dark:shadow-xl backdrop-blur-sm border border-text-light/10 dark:border-text-dark/10
                    ${
                      index === 0
                        ? "top-8 left-4 sm:top-24 sm:left-8"
                        : index === 1
                        ? "top-48 right-0 sm:top-64 sm:right-4"
                        : "bottom-8 left-12 sm:bottom-40 sm:left-24"
                    }`}
                  style={{ zIndex: 3 - index }}
                >
                  <div className="inline-block p-4 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary">
                    {card.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-text-light dark:text-text-dark">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-md text-text-light/60 dark:text-text-dark/60 font-medium">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
