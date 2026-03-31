import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HeroSection } from "./pages/HeroSection";
import { NavBar } from "./components/NavBar";
import { MenuPage } from "./components/MenuPage";
import { useDataStore } from "./components/store/useDataStore";
import { AnimatePresence } from "motion/react";
import { ServiceSection } from "./pages/ServiceSection";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { ContactSection } from "./pages/ContactSection";
import { AboutSection } from "./pages/AboutSection";
import { ProjectSection } from "./pages/ProjectSection";
import { Toaster } from "react-hot-toast";
function App() {
  const { isMenuOpen } = useDataStore();
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);
  return (
    <div className="bg-(--base-color)">
      {/* navbar */}
      <NavBar />
      <AnimatePresence>{isMenuOpen && <MenuPage />}</AnimatePresence>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/projects" element={<ProjectSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
