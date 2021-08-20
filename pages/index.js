import Head from "next/head";
import Image from "next/image";
import Logo from "../components/images/OW_NucleusLogo_white.png";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { fetchAPI } from "../lib/api";
import { useState } from "react";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Introduction from "../components/Introduction";
import { CSSTransition } from "react-transition-group";

export default function Home({ projects, homepage, global }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTrueFalse = () => setIsOpen(!isOpen);

  const [introIsOpen, setIntroIsOpen] = useState(false);
  const toggleIntroTrueFalse = () => setIntroIsOpen(!introIsOpen);

  // useEffect(() => {
  //   if (isOpen) {
  //     setIntroIsOpen(false);
  //   }
  //   if (introIsOpen) {
  //     setIsOpen(false);
  //   }
  // });

  return (
    <div className={styles.container}>
      <Background projects={projects} />
      <button
        onClick={toggleTrueFalse}
        className={`menu-btn${isOpen ? " open" : ""}`}
      >
        <div className="menu-btn__burger"></div>
      </button>
      <button onClick={toggleIntroTrueFalse}>
        <img
          className={`logo${introIsOpen ? " open" : ""}`}
          src={Logo.src}
        ></img>
      </button>
      <CSSTransition in={isOpen} classNames="contact-flyout" timeout={200}>
        <Contact projects={projects} global={global} />
      </CSSTransition>
      <CSSTransition in={introIsOpen} classNames="contact-flyout" timeout={200}>
        <Introduction global={global} projects={projects} />
      </CSSTransition>

      {/* <h1 className="hero">{homepage.bio}</h1> */}
    </div>
  );
}

export async function getStaticProps() {
  const [projects, homepage] = await Promise.all([
    fetchAPI("/projects"),
    fetchAPI("/home"),
  ]);

  return {
    props: { projects, homepage },
    revalidate: 1,
  };
}
