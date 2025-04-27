import styles from "./FloatingContactStyles.module.css";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react"; // Cleaned unused imports

const icons = [
  { id: "email", icon: <Mail size={20} />, link: "mailto:dj78390@gmail.com" },
  { id: "phone", icon: <Phone size={20} />, link: "tel:+91 9839633382" },
];

const FloatingContactPanel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={styles.panel}>
      {icons.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.link}
          className={styles.iconWrapper}
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingContactPanel;
