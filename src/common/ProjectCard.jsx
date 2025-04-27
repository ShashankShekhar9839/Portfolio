import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ src, link, h3, p, index, techStacks = [] }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <h3>{h3}</h3>
      <p>{p}</p>
      <div className={styles.techWrapper}>
        {techStacks?.map((item, index) => (
          <span>{item}</span>
        ))}
      </div>
      <div className={styles.projectLinkWrap}>
        <span>
          <ExternalLink /> Live
        </span>
        <span>
          <a
            href="https://github.com/ShashankShekhar9839/collabrative-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github /> Github
          </a>
        </span>
      </div>
    </a>
  );
}

export default ProjectCard;
