import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      src: viberr,
      link: "https://collabrative-board-frontend.vercel.app/",
      h3: "Collabrative Board Editor",
      p: "Crypto Currency Listing",
    },
    {
      src: freshBurger,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h3: "Fresh Burger",
      p: "Hamburger Restaurant",
    },
    {
      src: hipsster,
      link: "https://github.com/Ade-mir/company-landing-page-2",
      h3: "Hipsster",
      p: "Glasses Shop",
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h1>
      <div className={styles.projectsContainer}>
        {projects.map((proj, i) => (
          <ProjectCard key={proj.h3} {...proj} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
