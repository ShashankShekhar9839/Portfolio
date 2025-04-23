import React from "react";
import styles from "./ExperienceCardStyles.module.css";

const ExperienceCard = ({ children }) => {
  return <div className={styles.expCard}>{children}</div>;
};

export default ExperienceCard;
