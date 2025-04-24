import React from "react";
import styles from "./EducationStyles.module.css";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="sectionTitle">Education &</h1>
        <h1 className="sectionTitle">Certification</h1>
      </motion.div>

      <div className={styles.eduWrap}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ alignSelf: "start" }}
        >
          <EducationCard
            course="B.tech - Mechanical Engineering"
            institute="University Institute of Engineering and Technology Kanpur"
            marks="8.3 C.G.P.A"
            year="2018 - 2022"
          />
        </motion.div>

        <motion.span
          className={styles.expLine}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        ></motion.span>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ alignSelf: "end" }}
        >
          <EducationCard
            course="Full Stack Training"
            institute="Coding Ninjas"
            marks=""
            year="Feb 2022 - Nov 2022"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
