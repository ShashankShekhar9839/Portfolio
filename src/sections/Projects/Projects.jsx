import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      link: "https://collabrative-board-frontend.vercel.app/",
      gitLink: "https://github.com/ShashankShekhar9839/collabrative-server",
      h3: "Collabrative Board Editor",
      p: "Engineered and integrated real-time text editing and drawing board features using React.js, Socket.IO, and Node.js, enabling seamless collaboration, instant feedback, and significantly enhancing the platform's user experience.",
      techStacks: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "Socket",
        "Node",
        "Render",
        "Vercel",
      ],
    },
    {
      link: "https://github.com/ShashankShekhar9839/Portfolio",
      gitLink: "https://github.com/ShashankShekhar9839/Portfolio",
      h3: "Portfolio",
      p: "Designed and developed a fully responsive personal portfolio using React.js, Context API, and Framer Motion, featuring smooth animations, dark/light theme toggling, and an optimized  experience across all devices.",
      techStacks: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "Framer-motion",
        "Render",
      ],
    },
    {
      link: "https://guileless-paletas-eeac36.netlify.app/",
      gitLink: "https://github.com/ShashankShekhar9839/Cryptocurrency-App",
      h3: "Crypto Exchange",
      p: "Built a fully responsive Crypto Tracker Web App using React.js, React Router, and CSS3, powered by live data from the CoinGecko API, featuring real-time coin metrics, searchable/paginated tables, and seamless mobile-friendly navigation",
      techStacks: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "React-Router",
        "Render",
        "Vercel",
      ],
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
