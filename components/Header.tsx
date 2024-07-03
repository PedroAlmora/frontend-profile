import Image from "next/image";
import styles from "../styles/header.module.css";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} fade-in`}>
      <div className={styles.left}>
        <h1>Perfil de Pedro</h1>
      </div>
      <div className={styles.right}>
        <Image
          src="/photo-profile.png"
          alt="Perfil"
          width={50}
          height={50}
          className={styles.image}
        />
        <span className={styles.username}>Pedro</span>
      </div>
    </header>
  );
};

export default Header;
