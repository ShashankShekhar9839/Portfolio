import { motion } from "framer-motion";
import styles from "./SkillList.module.css";

function SkillList({ src, skill, index }) {
  return (
    <motion.span
      className={styles.skillItem}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </motion.span>
  );
}

export default SkillList;
