import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";

function ProjectCard({ src, link, h3, p, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img src={src} alt={h3} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </motion.a>
  );
}

export default ProjectCard;
