import Image from "next/image";
import styles from "../styles/about.module.css";
import React from "react";

const About: React.FC = () => {
  return (
    <section className={`${styles.about} fade-in`}>
      <h2>Sobre Mí</h2>
      <div className={styles["about-content"]}>
        <div className={styles.image}>
          <Image
            src="/user-photo.jpg"
            alt="Imagen de Perfil"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.text}>
          <p>
            Tengo más de dos años de experiencia en ingeniería de software, con
            un enfoque en el desarrollo de APIs y servicios para productos web y
            móviles. Comencé mi carrera en 2022, donde trabajé en sistemas
            distribuidos y multitarea. Actualmente, estoy inmerso en el
            desarrollo de pilas MERN, creando aplicaciones web modernas y
            dinámicas. Me destaco en liderar el proceso de desarrollo utilizando
            metodologías ágiles, asegurando entregas oportunas y colaborativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
