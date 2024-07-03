import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
