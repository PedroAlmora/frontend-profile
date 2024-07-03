import { useState } from "react";
import styles from "../styles/contactForm.module.css";
import React from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleCloseMessage = () => {
    setSuccess(false);
  };

  return (
    <section className={`${styles.contactForm} fade-in`}>
      <h2>Contacto</h2>
      {success && (
        <div className={styles.successMessage}>
          ¡Mensaje enviado con éxito!
          <button className={styles.closeButton} onClick={handleCloseMessage} aria-label="cerrar">
            &times;
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} role="form">
        <div className={styles.formGroup}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
