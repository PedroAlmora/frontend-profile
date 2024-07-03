import Head from "next/head";
import Header from "../components/Header";
import About from "../components/About";
import Interests from "../components/Interest";
import ContactForm from "../components/ContactForm";
import Divider from "../components/Divider";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="fade-in">
      <Head>
        <title>Perfil de Usuario</title>
        <link rel="icon" href="/user-photo.jpg" type="image/x-icon"></link>
      </Head>
      <Header />
      <About />
      <Divider />
      <Interests />
      <Divider />
      <ContactForm />
    </div>
  );
};

export default Home;
