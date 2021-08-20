import Logo from "./images/OW_NucleusLogo_white.png";
import { useState } from "react";
export default function Introduction({ projects, global }) {
  const [introIsOpen, setIntroIsOpen] = useState(false);
  const toggleIntroTrueFalse = () => setIntroIsOpen(!introIsOpen);
  const { content } = projects.find((e) => e.title === "Long intro");
  return (
    <div>
      <button onClick={toggleIntroTrueFalse}>
        <img
          className={`logo${introIsOpen ? " open" : ""}`}
          src={Logo.src}
        ></img>
      </button>
      <div className={`introPage${introIsOpen ? " open" : ""}`}>
        <p className="intro">{content[0].content}</p>
        <p className="intro">{content[1].content}</p>
        <p className="email">
          {" "}
          <a href={`mailto:${global.contactEmail}`} className="email-link">
            {global.contactEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
