import styles from "./HeaderStyles.module.css";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const FloatingTopHeader = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.header}>
      {sections.map((item) => (
        <div
          key={item.id}
          className={styles.navItem}
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default FloatingTopHeader;
