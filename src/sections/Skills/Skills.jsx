import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";
import { motion } from "framer-motion";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node",
    "React",
    "Tailwind CSS",
    "Redux",
    "Webpack",
    "Git",
    "Jest",
    "Bootstrap",
  ];

  return (
    <section id="skills" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <SkillList
            key={skill}
            skill={skill}
            src={checkMarkIcon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
