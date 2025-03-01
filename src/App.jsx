// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SkillsAndCertifications from "./components/sections/SkillsAndCertifications";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./components/layout/Footer";
import { FiArrowUp } from "react-icons/fi";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Show/hide scroll to top button
      setShowScrollTop(window.pageYOffset > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Rucha Goje
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200"
          >
            {/* Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50"
              style={{ scaleX: scrollProgress / 100, transformOrigin: "0%" }}
            />

            <Navbar />

            <main className="relative">
              <section id="home" className="min-h-screen">
                <Hero />
              </section>
              <section id="about" className="min-h-screen">
                <About />
              </section>
              <section id="skills" className="min-h-screen">
                <SkillsAndCertifications />
              </section>
              <section id="projects" className="min-h-screen">
                <Projects></Projects>
              </section>
              <section id="contact" className="min-h-screen">
                <Contact/>

              </section>
            </main>

            {/* Scroll to Top Button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={scrollToTop}
                  className="fixed bottom-8 right-8 p-4 rounded-full bg-primary dark:bg-secondary text-white shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <FiArrowUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>

            <Footer/>
          </motion.div>
        </AnimatePresence>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
