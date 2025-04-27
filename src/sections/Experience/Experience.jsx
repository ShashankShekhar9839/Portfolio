import React from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";
import LottieIcon from "../../common/Lottie";
import first from "../../assets/lottie-animations/first.json";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Experience = () => {
  const experienceList = [
    {
      title: "Software Development Engineer - 1 (FrontEnd)",
      company: "CarTrade Tech Limited",
      time: "April 2024 - Present",
      description:
        "Optimized theme library's hashing using counter-based hashing and removed unnecessary HTML elements, reducing DOM size by 20% and improving load speed.",
    },
    {
      title: "Associate Software Development Engineer (FrontEnd)",
      company: "CarTrade Tech Limited",
      time: "Jan 2023 - March 2024",
      description:
        "Enhanced website performance and SEO by optimizing CLS and INP using Lighthouse, Core Web Vitals, and Chrome DevTools.",
    },
  ];

  return (
    <section className={styles.container}>
      <motion.h1
        className="sectionTitle"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h1>

      <div className={styles.expContent}>
        <div>
          <LottieIcon animationData={first} />
        </div>
        <div className={styles.expBox}>
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <ExperienceCard>
                <h3>{exp.title}</h3>
                <div className={styles.comp}>
                  <span>{exp.company}</span>
                  <span>{exp.time}</span>
                </div>
                <p className={styles.expDesc}>{exp.description}</p>
              </ExperienceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
