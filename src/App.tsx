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
        <Route path="/projects" element={<ServiceSection />} />
        <Route path="/about" element={<ServiceSection />} />
        <Route path="/contact" element={<ServiceSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
