import { useState } from "react";
export default function FirstPage({ projects }) {
  const { content } = projects.find((e) => e.title === "Long intro");
  const image = projects.find((e) => e.title === "Main Image");
  return (
    <div className="first-page">
      <div className="image-gradient">
        <img className="first-image" src={image.content[0].media.url}></img>
      </div>
      <p className="first-page-intro">{content[0].content}</p>
      {/* <button onClick={() => setActive(false)} className="first-page-button">
        Enter
      </button> */}
    </div>
  );
}
