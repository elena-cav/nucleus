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
import FirstPage from "../components/FirstPage";
import React from "react";
export default function Home({ projects, homepage, global }) {
  const [isContactOpen, setContactIsOpen] = useState(false);
  const [introIsOpen, setIntroIsOpen] = useState(false);
  const [isActive, setActive] = useState(true);

  const toggleContactTrueFalse = () => {
    if (isContactOpen) {
      setContactIsOpen(false);
    } else if (!isContactOpen) {
      setContactIsOpen(true);
      setIntroIsOpen(false);
    }
  };

  const toggleIntroTrueFalse = () => {
    if (introIsOpen) {
      setIntroIsOpen(false);
    }
    if (!introIsOpen) {
      setIntroIsOpen(true);
      setContactIsOpen(false);
    }
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isActive ? (
        <FirstPage projects={projects} />
      ) : (
        <div className="main-section">
          <Background projects={projects} />

          <button
            onClick={toggleContactTrueFalse}
            className={`menu-btn${isContactOpen ? " open" : ""}`}
          >
            <div className="menu-btn__burger"></div>
          </button>
          <button
            className={`logo${introIsOpen ? " open" : ""}`}
            onClick={toggleIntroTrueFalse}
          >
            <img src={Logo.src}></img>
          </button>

          <Transition
            classNames="contact-flyout"
            in={isContactOpen}
            timeout={300}
          >
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
      )}
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
