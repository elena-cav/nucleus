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
import { Transition } from "react-transition-group";
import React from "react";
export default function Home({ projects, homepage, global }) {
  const [isContactOpen, setContactIsOpen] = useState(false);
  const [introIsOpen, setIntroIsOpen] = useState(false);

  const toggleContactTrueFalse = () => setContactIsOpen(!isContactOpen);

  const toggleIntroTrueFalse = () => setIntroIsOpen(!introIsOpen);

  // useEffect(() => {
  //   if (isContactOpen) {
  //     setIntroIsOpen(false);
  //   }
  //   if (introIsOpen) {
  //     setContactIsOpen(false);
  //   }
  // });
  // const nodeRef = React.useRef(null);
  console.log(introIsOpen, isContactOpen);
  const defaultStyle = {
    transition: `opacity 300ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.5 },
    exited: { opacity: 0 },
  };

  return (
    <div>
      <Background projects={projects} />
      <button
        onClick={toggleContactTrueFalse}
        className={`menu-btn${isContactOpen ? " open" : ""}`}
      >
        <div className="menu-btn__burger"></div>
      </button>
      <button onClick={toggleIntroTrueFalse}>
        <img
          className={`logo${introIsOpen ? " open" : ""}`}
          src={Logo.src}
        ></img>
      </button>
      <Transition classNames="contact-flyout" in={isContactOpen} timeout={300}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Contact projects={projects} global={global} />
          </div>
        )}
      </Transition>
      <Transition classNames="intro-flyout" in={introIsOpen} timeout={300}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <Introduction global={global} projects={projects} />
          </div>
        )}
      </Transition>
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
