// src/components/sections/Contact.jsx
// Enhanced contact section with modern animations and data-themed design
// Author: Rucha Goje

import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
  FiMessageSquare,
  FiArrowUpRight,
} from "react-icons/fi";
import { BiAnalyse, BiLineChart, BiNetworkChart, BiData } from "react-icons/bi";
import { useRef } from "react";

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="text-2xl" />,
      href: "https://linkedin.com/in/ruchagoje",
      color: "from-[#0A66C2] to-[#0077B5]",
      description: "Connect for professional opportunities",
      username: "ruchagoje",
      stats: "Professional Network",
    },
    {
      name: "GitHub",
      icon: <FiGithub className="text-2xl" />,
      href: "https://github.com/ruchagoje",
      color: "from-[#2D333B] to-[#22272E]",
      description: "Explore my data analysis projects",
      username: "ruchagoje",
      stats: "Code Repository",
    },
    {
      name: "Email",
      icon: <FiMail className="text-2xl" />,
      href: "mailto:your.email@example.com",
      color: "from-[#4B79A1] to-[#283E51]",
      description: "Direct professional contact",
      username: "your.email@example.com",
      stats: "Direct Contact",
    },
  ];

  const interests = [
    {
      title: "Data Analysis",
      description:
        "Passionate about transforming raw data into actionable insights",
      icon: <BiAnalyse className="text-xl" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Visualization",
      description: "Creating impactful visual stories from complex datasets",
      icon: <BiLineChart className="text-xl" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Collaboration",
      description:
        "Open to innovative data-driven projects and learning opportunities",
      icon: <BiNetworkChart className="text-xl" />,
      color: "from-teal-500 to-emerald-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#FAFAFA] dark:bg-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(75,121,161,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(118,75,162,0.05),transparent_60%)]" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/10 dark:bg-primary/20 rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="h-px w-12 bg-gradient-to-r from-transparent to-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
            />
            <span className="text-primary dark:text-secondary font-medium tracking-wider">
              GET IN TOUCH
            </span>
            <motion.span
              className="h-px w-12 bg-gradient-to-l from-transparent to-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on data analysis projects or discuss
            opportunities
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(to right, ${link.color})`,
                }}
              />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${link.color} text-white`}
                  >
                    {link.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {link.username}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {link.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {link.stats}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-sm text-primary dark:text-secondary font-medium"
                  >
                    Connect
                    <FiArrowUpRight className="ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Interests Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20"
            >
              <BiData className="text-2xl text-primary dark:text-secondary" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Areas of Interest
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 rounded-xl bg-gray-50 dark:bg-gray-700/50 overflow-hidden"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${interest.color} opacity-5`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md inline-block mb-4"
                  >
                    {interest.icon}
                  </motion.div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
