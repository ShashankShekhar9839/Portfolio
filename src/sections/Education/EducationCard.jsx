import React from "react";
import styles from "./EducationCardStyles.module.css";

const EducationCard = ({ institute, course, year, marks }) => {
  return (
    <div className={styles.eduCard}>
      <h3>{course}</h3>
      <span>{institute}</span>
      <div className={styles.marks}>
        <span>{marks}</span>
        <span>{year}</span>
      </div>
    </div>
  );
};

export default EducationCard;
