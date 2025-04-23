import React from "react";
import styles from "./EducationStyles.module.css";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1 className="sectionTitle">Education & </h1>
        <h1 className="sectionTitle">Certification</h1>
      </div>
      <div className={styles.eduWrap}>
        <EducationCard
          course="B.tech - Mechanical Engineering"
          institute="University Institute of Engineering and Technology Kanpur"
          marks="8.3 C.G.P.A"
          year="2018 - 2022"
        />

        <span className={styles.eduLine}></span>

        <EducationCard
          course="Full Stack Training"
          institute="Coding  Ninjas"
          marks=""
          year="Feb 2022 - Nov 2022"
        />
      </div>
    </section>
  );
};

export default Education;
