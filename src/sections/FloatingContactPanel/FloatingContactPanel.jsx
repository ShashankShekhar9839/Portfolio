import styles from "./FloatingContactStyles.module.css";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Mail, Github, Linkedin, Phone } from "lucide-react"; // Or use your custom icons

const icons = [
  { id: "email", icon: <Mail size={20} /> },
  { id: "phone", icon: <Phone size={20} /> },
];

const FloatingContactPanel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={styles.panel}>
      {icons.map((item, index) => (
        <motion.div
          key={item.id}
          className={styles.iconWrapper}
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingContactPanel;
