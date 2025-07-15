// src/components/sections/Projects.jsx
// Data Analysis Portfolio Projects Section with interactive features and analytics-themed design
// Author: Rucha Goje

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  FiGithub, 
  FiExternalLink, 
  FiDatabase,
  FiPieChart,
  FiBarChart2,
  FiTrendingUp,
  FiGrid,
  FiMaximize2,
  FiX 
} from 'react-icons/fi';
import { 
  BiAnalyse, 
  BiLineChart, 
  BiBarChartAlt2, 
  BiStats 
} from 'react-icons/bi';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const filters = [
    {
      id: "all",
      label: "All Projects",
      icon: <BiStats className="text-lg" />,
    },
    {
      id: "analysis",
      label: "Data Analysis",
      icon: <BiAnalyse className="text-lg" />,
    },
    {
      id: "visualization",
      label: "Visualization",
      icon: <BiLineChart className="text-lg" />,
    },
    {
      id: "dashboards",
      label: "Dashboards",
      icon: <FiGrid className="text-lg" />,
    },
  ];

  const projects = [
    // {
    //   id: 1,
    //   title: "Sales Performance Analysis",
    //   description:
    //     "Analyzed e-commerce sales data to identify trends and provide actionable insights for business growth.",
    //   category: ["analysis", "visualization"],
    //   tools: ["SQL", "Tableau", "Excel"],
    //   stats: {
    //     dataPoints: "10K+",
    //     insights: "15+",
    //     duration: "2 weeks",
    //   },
    //   keyFindings: [
    //     "Identified top-performing products",
    //     "Analyzed seasonal trends",
    //     "Customer behavior insights",
    //     "Revenue growth opportunities",
    //   ],
    //   color: "from-[#4B79A1] to-[#283E51]",
    //   icon: <FiBarChart2 className="text-2xl" />,
    // },
    {
      id: 2,
      title: "HR Resources Dashboard",
      description:
      "Developed an interactive HR dashboard to track attrition, attendance, and hiring trends, automating data workflows and improving reporting efficiency by 40%.",
    category: ["dashboards", "visualization"],
      tools: ["Power BI", "SQL"],
      stats: {
        dataPoints: "5K+",
        segments: "4",
        duration: "3 weeks",
      },
      keyFindings: [
  "Detected high attrition in specific departments",
  "Revealed seasonal trends in employee attendance",
  "Highlighted recruitment peaks and gaps",
  "Enabled real-time HR performance tracking",
],

      color: "from-[#764BA2] to-[#667EEA]",
      icon: <FiPieChart className="text-2xl" />,
    },
    {
      id: 3,
      title: "Exploratory Data Analysis",
      description:
"Performed exploratory data analysis to uncover patterns, outliers, and trends, enhancing business insights through clear visual storytelling.",      category: ["analysis"],
      tools: ["Python", "Pandas", "Seaborn"],
      stats: {
        dataPoints: "8K+",
        categories: "12",
        duration: "2 weeks",
      },
     keyFindings: [
  "Detected outliers impacting overall data distribution",
  "Uncovered correlations between key business variables",
  "Identified missing values and resolved data inconsistencies",
  "Revealed trends that influenced strategic decisions"
],

      color: "from-[#2E3192] to-[#1BFFFF]",
      icon: <FiDatabase className="text-2xl" />,
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(selectedFilter));

  // Continue in Part 2...
  return (
    <section className="relative py-20 bg-[#FAFAFA] dark:bg-gray-900">
      {/* Analytics-themed Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(75,121,161,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(118,75,162,0.05),transparent_60%)]" />
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-200/20 dark:bg-gray-700/20 rounded-full"
              style={{
                width: Math.random() * 3 + "px",
                height: Math.random() * 3 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>
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
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#4B79A1]" />
            <span className="text-[#4B79A1] dark:text-[#667EEA] font-medium tracking-wider">
              DATA PROJECTS
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#4B79A1]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">
            Analytics Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring insights through data analysis and visualization projects
          </p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  selectedFilter === filter.id
                    ? "bg-white dark:bg-gray-800 shadow-lg scale-105 text-[#4B79A1] dark:text-[#667EEA]"
                    : "bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-800"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group h-[420px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Project Header */}
                <div
                  className={`h-32 bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                        {project.icon}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setSelectedProject(project);
                          setIsModalOpen(true);
                        }}
                        className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        <FiMaximize2 className="text-lg" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 py-2">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-semibold text-[#4B79A1] dark:text-[#667EEA]">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsModalOpen(false);
                  setSelectedProject(null);
                }
              }}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Modal Content */}
                <div
                  className={`h-48 bg-gradient-to-r ${selectedProject.color} p-8 relative`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-white/80">
                          {selectedProject.description}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setIsModalOpen(false);
                          setSelectedProject(null);
                        }}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <FiX className="text-2xl text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Key Findings */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                        Key Findings
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.keyFindings.map((finding, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <BiAnalyse className="text-[#4B79A1] dark:text-[#667EEA] mt-1" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {finding}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & Stats */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                          Tools Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tools.map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1.5 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                          Project Stats
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(selectedProject.stats).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
                              >
                                <div className="text-xl font-semibold text-[#4B79A1] dark:text-[#667EEA]">
                                  {value}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                  {key}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <BiAnalyse className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            </motion.div>
            <p className="text-gray-500 dark:text-gray-400">
              No projects found in this category yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;