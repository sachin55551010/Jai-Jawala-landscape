import { X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { useDataStore } from "./store/useDataStore";
import { Link } from "react-router-dom";
export const MenuPage = () => {
  const { closeMenu } = useDataStore();
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleResize = () => {
      if (media.matches) {
        closeMenu(); // close menu on desktop
      }
    };

    handleResize(); // run once

    media.addEventListener("change", handleResize);

    return () => {
      media.removeEventListener("change", handleResize);
    };
  }, [closeMenu]);
  return (
    <motion.div
      className="fixed inset-0 z-100 bg-[rgb(55,72,54)]"
      initial={{ x: "-100%" }} // start off-screen (left)
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{
        duration: 0.4,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div>Logo</div>
        <X
          onClick={closeMenu}
          size={40}
          strokeWidth={3}
          className="text-gray-300 cursor-pointer"
        />
      </div>

      {/* Menu icons */}

      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.5 }}
        onClick={closeMenu}
        className="p-4 text-gray-200 flex flex-col gap-4 mt-6"
      >
        <Link to="/">
          <div className="text-3xl border-b pb-6 font-bold border-white/40 hover:border-white cursor-pointer transition-all duration-300">
            Home
          </div>
        </Link>

        <Link to="/services">
          <div className="text-3xl border-b pb-6 font-bold border-white/40 hover:border-white cursor-pointer transition-all duration-300">
            Services
          </div>
        </Link>

        <Link to="projects">
          <div className="text-3xl border-b pb-6 font-bold border-white/40 hover:border-white cursor-pointer transition-all duration-300">
            Projects
          </div>
        </Link>

        <Link to="about">
          <div className="text-3xl border-b pb-6 font-bold border-white/40 hover:border-white cursor-pointer transition-all duration-300">
            About
          </div>
        </Link>

        <Link to="contact">
          <div className="text-3xl border-b pb-6 font-bold border-white/40 hover:border-white cursor-pointer transition-all duration-300">
            Contact
          </div>
        </Link>
      </motion.div>

      {/* icons */}
      <div></div>
    </motion.div>
  );
};
