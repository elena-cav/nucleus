import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { fetchAPI } from "../lib/api";
import { useState } from "react";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Introduction from "../components/Introduction";
export default function Home({ projects, homepage, global }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTrueFalse = () => setIsOpen(!isOpen);
  return (
    <div className={styles.container}>
      <Background projects={projects} />
      <button
        onClick={toggleTrueFalse}
        className={`menu-btn${isOpen ? " open" : ""}`}
      >
        <div className="menu-btn__burger"></div>
      </button>
      <Contact projects={projects} global={global} isOpen={isOpen} />
      <Introduction global={global} projects={projects} />
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
