import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BiAnalyse,
  BiData,
  BiBarChartAlt2,
  BiCodeAlt,
  BiLineChart,
} from "react-icons/bi";
import {
  FiDatabase,
  FiTrendingUp,
  FiAward,
  FiGrid,
  FiPieChart,
} from "react-icons/fi";
import { BsFileBarGraph, BsLightningCharge } from "react-icons/bs";
import { TbBrandPowershell } from "react-icons/tb";

const SkillsAndCertifications = () => {
  const [activeCategory, setActiveCategory] = useState("skills");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredCert, setHoveredCert] = useState(null);

  const categories = [
    { id: "skills", label: "Technical Skills", icon: <BiCodeAlt /> },
    { id: "tools", label: "Tools & Software", icon: <FiGrid /> },
    { id: "certifications", label: "Certifications", icon: <FiAward /> },
  ];

  const skills = [
    {
      id: 1,
      name: "Data Analysis",
      icon: <BiAnalyse className="text-2xl" />,
      level: "Basic to Intermediate",
      description:
        "Learning to analyze datasets and derive meaningful insights using various analytical tools and techniques.",
      tools: ["SQL", "Python", "Excel"],
      projects: 5,
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 2,
      name: "Data Visualization",
      icon: <BiBarChartAlt2 className="text-2xl" />,
      level: "Intermediate",
      description:
        "Creating basic dashboards and visual representations of data to communicate insights effectively.",
      tools: ["Tableau", "Power BI", "Excel Charts"],
      projects: 3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "Statistical Analysis",
      icon: <BiLineChart className="text-2xl" />,
      level: "Basic",
      description:
        "Learning fundamental statistical concepts and their application in data analysis.",
      tools: ["Excel", "Python (Basic Stats)"],
      projects: 2,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const tools = [
    {
      name: "SQL",
      icon: <FiDatabase className="text-2xl" />,
      proficiency: 65,
      experience: "6 months",
      description: "Basic querying and data manipulation",
      color: "from-orange-500 to-amber-500",
    },
    {
      name: "Python",
      icon: <BiCodeAlt className="text-2xl" />,
      proficiency: 65,
      experience: "4 months",
      description: "Basic data analysis with Pandas",
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Tableau",
      icon: <BsFileBarGraph className="text-2xl" />,
      proficiency: 60,
      experience: "5 months",
      description: "Creating basic dashboards",
      color: "from-teal-500 to-emerald-500",
    },
    {
      name: "Power BI",
      icon: <TbBrandPowershell className="text-2xl" />,
      proficiency: 50,
      experience: "3 months",
      description: "Basic dashboard creation",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Excel",
      icon: <FiGrid className="text-2xl" />,
      proficiency: 75,
      experience: "1 year",
      description: "Data analysis and visualization",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Python for Data Science",
      issuer: "NPTEL-SWAYAM",
      date: "2024",
      icon: <FiAward className="text-2xl" />,
      skills: ["Python", "Matplot", "Seaborn", "Pandas", "Numpy"],
      color: "from-blue-500 to-cyan-500",
      image: "images/certifications/nptel.png", // Add your image path here
    },
    {
      id: 1,
      name: "Getting Started with Data Analytics on AWS",
      issuer: "AWS",
      date: "Sep 4th, 2024",
      icon: <FiAward className="text-2xl" />,
      skills: ["Data Analysis"],
      color: "from-blue-500 to-cyan-500",
      image: "images/certifications/AWS.jpeg", // Add your image path here
    },
    {
      id: 1,
      name: "SQL and Relational Databases 101",
      issuer: "IBM",
      date: "Aug 13, 2024",
      icon: <FiAward className="text-2xl" />,
      skills: ["SQL"],
      color: "from-blue-500 to-cyan-500",
      image: "images/certifications/sql_ibm.png", // Add your image path here
    },
    {
      id: 1,
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Febraury 22nd, 2025",
      icon: <FiAward className="text-2xl" />,
      skills: ["Data Analysis", "Excel", "Tableau"],
      color: "from-blue-500 to-cyan-500",
      image: "images/certifications/deloitte.png", // Add your image path here
    },
    // Add more certifications as needed
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,77,230,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(5,191,219,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary dark:to-secondary" />
            <span className="text-primary dark:text-secondary font-medium tracking-wider">
              LEARNING JOURNEY
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary dark:to-secondary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Certifications
          </h2>
          <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
            Exploring the world of data analysis through continuous learning and
            practical application
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-background-dark shadow-lg border border-text-light/10 dark:border-text-dark/10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                      : "text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === "skills" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <motion.div key={skill.id} layout className="h-fit">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      onClick={() =>
                        setSelectedSkill(
                          selectedSkill === skill.id ? null : skill.id
                        )
                      }
                      className={`p-6 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-lg cursor-pointer
                        ${
                          selectedSkill === skill.id
                            ? "ring-2 ring-primary dark:ring-secondary"
                            : ""
                        }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 text-white mb-4`}
                      >
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
                        {skill.name}
                      </h3>
                      <div className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60">
                        {skill.level}
                      </div>

                      <AnimatePresence mode="sync">
                        {selectedSkill === skill.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 space-y-3"
                          >
                            <p className="text-sm text-text-light/80 dark:text-text-dark/80">
                              {skill.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {skill.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                            <div className="text-sm text-primary dark:text-secondary">
                              {skill.projects} Projects Completed
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === "tools" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-lg"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tool.color} p-3 text-white mb-4`}
                    >
                      {tool.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-text-light/60 dark:text-text-dark/60 mb-4">
                      {tool.description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-light/60 dark:text-text-dark/60">
                          Proficiency
                        </span>
                        <span className="text-primary dark:text-secondary">
                          {tool.proficiency}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-primary/10 dark:bg-primary/20 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tool.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${tool.color}`}
                        />
                      </div>
                      <div className="text-sm text-text-light/60 dark:text-text-dark/60">
                        {tool.experience} experience
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === "certifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredCert(cert.id)}
                    onHoverEnd={() => setHoveredCert(null)}
                    className="relative p-6 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-lg overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0`}
                      animate={{
                        opacity: hoveredCert === cert.id ? 0.05 : 0,
                      }}
                    />

                    <div className="relative z-10">
                      {cert.image && (
                        <div className="mb-6 rounded-lg overflow-hidden">
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}

                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} p-3 text-white flex-shrink-0`}
                        >
                          {cert.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">
                            {cert.name}
                          </h3>
                          <p className="mt-1 text-sm text-text-light/60 dark:text-text-dark/60">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsAndCertifications;
