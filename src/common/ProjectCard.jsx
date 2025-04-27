import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ link, h3, p, techStacks = [], gitLink }) {
  const handleCardClick = () => {
    window.open(link, "_blank", "noopener noreferrer");
  };

  return (
    <div className={styles.card} style={{ cursor: "pointer" }}>
      <h3>{h3}</h3>
      <p>{p}</p>

      <div className={styles.techWrapper}>
        {techStacks?.map((item, index) => (
          <span key={index}> {item}</span>
        ))}
      </div>

      <div className={styles.projectLinkWrap}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ExternalLink /> Live
        </a>

        <a href={gitLink} target="_blank" rel="noopener noreferrer">
          <Github /> Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
