import { useState } from "react";
import styles from "../styles/interest.module.css";
import React from "react";

const Interests: React.FC = () => {
  const [activeInterest, setActiveInterest] = useState<string>("frontend");

  const interests = [
    {
      id: "frontend",
      title: "Desarrollo Frontend",
      description:
        "Trabajo en el diseño y la construcción de interfaces web usando tecnologías como HTML, CSS, y JavaScript.",
    },
    {
      id: "react",
      title: "React",
      description:
        "Framework para construir interfaces de usuario interactivas con componentes reutilizables y un enfoque basado en el estado.",
    },
    {
      id: "html-css",
      title: "HTML5 y CSS3",
      description:
        "Tecnologías fundamentales para la creación de páginas web, definiendo la estructura y el estilo del contenido.",
    },
  ];

  return (
    <section className={`${styles.interests} fade-in`}>
      <div className={styles.left}>
        <h2>Intereses</h2>
        <ul>
          {interests.map((interest) => (
            <li
              key={interest.id}
              className={`${
                activeInterest === interest.id ? styles.active : ""
              }`}
              onClick={() => setActiveInterest(interest.id)}
            >
              {interest.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        {interests.map((interest) =>
          activeInterest === interest.id ? (
            <div key={interest.id} className={styles.description}>
              {interest.description}
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Interests;
