import React from "react";
import styles from "./ExperienceStyles.module.css";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.expContent}>
        <ExperienceCard>
          <h3>Software Development Engineer - 1 (FrontEnd)</h3>
          <div className={styles.comp}>
            <span>CarTrade Tech Limited</span>
            <span>April 2024 - Present</span>
          </div>

          <span className={styles.expDesc}>
            Optimized the theme library’s hashing algorithm by implementing
            counter-based hashing for atomic class names and removing Carwale’s
            unnecessary HTML elements, reducing DOM size by 20% and improving
            page load performance
          </span>
        </ExperienceCard>
        <span className={styles.expLine}></span>
        <ExperienceCard>
          <h3>Associate Software Development Engineer (FrontEnd)</h3>
          <div className={styles.comp}>
            <span>CarTrade Tech Limited</span>
            <span>Jan 2023 - March 2024</span>
          </div>

          <span className={styles.expDesc}>
            Improved website performance and SEO (Search Engine Optimization) by
            optimizing CLS and INP using Google Lighthouse, Core Web Vitals, and
            Chrome DevTools.
          </span>
        </ExperienceCard>
      </div>
    </section>
  );
};

export default Experience;
