import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./FloatingContactPanel.module.css";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Home,
  GraduationCap,
  Hammer,
  Sparkles,
} from "lucide-react";

const sections = [
  { id: "hero", icon: <Home size={20} />, label: "Home" },
  { id: "skills", icon: <Sparkles size={20} />, label: "Skills" },
  { id: "projects", icon: <Hammer size={20} />, label: "Projects" },
  { id: "education", icon: <GraduationCap size={20} />, label: "Education" },
  { id: "contact", icon: <Mail size={20} />, label: "Contact" },
];

const FloatingContactPanel = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / docHeight;

      const count = Math.min(
        sections.length,
        1 + Math.floor(scrollProgress * (sections.length - 1))
      );
      setVisibleCount(count);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.panel}>
      {sections.slice(0, visibleCount).map((item, index) => (
        <motion.div
          key={item.id}
          className={styles.iconWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          onClick={() => scrollToSection(item.id)}
          title={item.label}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingContactPanel;
