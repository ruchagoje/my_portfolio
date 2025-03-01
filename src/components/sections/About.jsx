// src/components/sections/About.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BsFileEarmarkBarGraph,
  BsLightbulb,
  BsCodeSlash,
  BsGraphUp,
} from "react-icons/bs";
import { FiDatabase, FiTrendingUp, FiActivity } from "react-icons/fi";
import { BiAnalyse } from "react-icons/bi";
import { TbChartArcs, TbSql } from "react-icons/tb";
import { PiChartLineUpBold } from "react-icons/pi";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const tabs = [
    { id: "skills", label: "Technical Skills" },
    { id: "tools", label: "Tools & Software" },
    { id: "interests", label: "Learning Interests" },
  ];

  const skills = [
    {
      name: "Data Analysis",
      icon: <BiAnalyse className="text-2xl" />,
      details: [
        "SQL Queries",
        "Data Cleaning",
        "Statistical Analysis",
        "Pattern Recognition",
      ],
      color: "from-primary to-secondary",
    },
    {
      name: "Visualization",
      icon: <BsGraphUp className="text-2xl" />,
      details: [
        "Dashboard Creation",
        "Interactive Charts",
        "Data Storytelling",
        "Visual Analytics",
      ],
      color: "from-secondary to-primary",
    },
    {
      name: "Programming",
      icon: <BsCodeSlash className="text-2xl" />,
      details: ["Python", "Pandas", "NumPy", "Matplotlib"],
      color: "from-primary via-secondary to-primary",
    },
  ];

  const tools = [
    {
      name: "SQL",
      proficiency: "Intermediate",
      icon: <TbSql className="text-2xl" />,
      projects: 15,
    },
    {
      name: "Tableau",
      proficiency: "Advanced",
      icon: <BsFileEarmarkBarGraph className="text-2xl" />,
      projects: 8,
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      icon: <BsCodeSlash className="text-2xl" />,
      projects: 12,
    },
    {
      name: "Excel",
      proficiency: "Expert",
      icon: <PiChartLineUpBold className="text-2xl" />,
      projects: 25,
    },
  ];

  const interests = [
    "Predictive Analytics",
    "Machine Learning Basics",
    "Business Intelligence",
    "Data Storytelling",
  ];

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(107,77,230,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(5,191,219,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-4 justify-center">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary dark:to-secondary" />
              <span className="text-primary dark:text-secondary font-medium tracking-widest">
                ABOUT ME
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary dark:to-secondary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Data-Driven Insights Specialist
            </h2>
            <p className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">
              Transforming raw data into actionable strategies through
              analytical expertise and visual storytelling
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Interactive Skills */}
            <div className="space-y-8">
              {/* Profile Image */}
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-text-light/10 dark:border-text-dark/10">
                  <img
                    src="/images/profile.jpg"
                    alt="Rucha Goje"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Animated Decorative Elements */}
                <motion.div
                  animate={pulseAnimation}
                  className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 dark:border-secondary/20 rounded-xl"
                />
                <motion.div
                  animate={pulseAnimation}
                  className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/20 dark:border-primary/20 rounded-xl"
                />
              </motion.div>

              {/* Interactive Skill Cards */}
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    onClick={() =>
                      setHoveredSkill(
                        hoveredSkill === skill.name ? null : skill.name
                      )
                    }
                    className="cursor-pointer"
                  >
                    <div
                      className={`p-4 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-lg transition-all
                        ${
                          hoveredSkill === skill.name
                            ? "ring-2 ring-primary dark:ring-secondary"
                            : ""
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white`}
                        >
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-light dark:text-text-dark">
                            {skill.name}
                          </h4>
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="mt-2 grid grid-cols-2 gap-2"
                            >
                              {skill.details.map((detail, index) => (
                                <motion.div
                                  key={detail}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-center gap-2 text-sm text-text-light/60 dark:text-text-dark/60"
                                >
                                  <FiActivity className="text-primary dark:text-secondary" />
                                  {detail}
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Technical Skills & Tabs */}
            <div className="space-y-8">
              {/* About Content */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark flex items-center gap-3">
                  <TbChartArcs className="text-primary dark:text-secondary" />
                  Technical Proficiencies
                </h3>
                <p className="text-text-light/80 dark:text-text-dark/80 leading-relaxed">
                  Equipped with modern data analysis tools and programming
                  languages, I specialize in:
                </p>

                {/* Technical Badges */}
                <div className="flex flex-wrap gap-3">
                  {[
                    "SQL",
                    "Python",
                    "Tableau",
                    "Power BI",
                    "Pandas",
                    "Excel",
                    "Statistics",
                    "Data Modeling",
                  ].map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary text-sm"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Tabs Section */}
              <div className="space-y-6">
                <div className="flex gap-2 p-1 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                        ${
                          activeTab === tab.id
                            ? "bg-gradient-to-r from-primary to-secondary text-white"
                            : "text-text-light/60 dark:text-text-dark/60 hover:bg-primary/5 dark:hover:bg-secondary/5"
                        }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Tab Content */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {activeTab === "skills" && (
                    <div className="grid gap-4">
                      {[
                        {
                          name: "Data Analysis",
                          level: 85,
                          icon: <BiAnalyse />,
                          color: "from-primary to-secondary",
                        },
                        {
                          name: "SQL",
                          level: 80,
                          icon: <TbSql />,
                          color: "from-secondary to-primary",
                        },
                        {
                          name: "Python",
                          level: 75,
                          icon: <BsCodeSlash />,
                          color: "from-primary via-secondary to-primary",
                        },
                        {
                          name: "Data Visualization",
                          level: 90,
                          icon: <BsGraphUp />,
                          color: "from-secondary via-primary to-secondary",
                        },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-secondary">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between mb-2">
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-primary dark:text-secondary">
                                  {skill.level}%
                                </span>
                              </div>
                              <div className="h-2 rounded-full bg-primary/10 dark:bg-primary/20">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "tools" && (
                    <div className="grid grid-cols-2 gap-4">
                      {tools.map((tool) => (
                        <motion.div
                          key={tool.name}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10"
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary">
                              {tool.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-text-light dark:text-text-dark">
                                {tool.name}
                              </h4>
                              <p className="text-sm text-text-light/60 dark:text-text-dark/60">
                                {tool.proficiency}
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 text-sm text-primary dark:text-secondary">
                            Applied in {tool.projects}+ projects
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "interests" && (
                    <div className="grid grid-cols-2 gap-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={interest}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="p-4 rounded-xl bg-white dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-primary dark:bg-secondary" />
                            <span className="text-text-light/80 dark:text-text-dark/80">
                              {interest}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
