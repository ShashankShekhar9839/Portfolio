import { motion } from "framer-motion";
import styles from "./OverviewStyles.module.css";

const Overview = () => {
  return (
    <section className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Overview
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={styles.overviewDesc}
      >
        Greetings! I'm Shashank Shekhar, a frontend developer based in India,
        skilled in HTML, CSS, JavaScript, TypeScript, React.js, Redux, and
        Tailwind CSS. I have 2.5 years of professional experience and currently
        work as a Software Development Engineer at Cartrade Tech Limited,
        focusing on building high-performance and responsive web applications.
        I'm passionate about learning new technologies, enhancing user
        experiences, and delivering scalable solutions.
      </motion.p>
    </section>
  );
};

export default Overview;
