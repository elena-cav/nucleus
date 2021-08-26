import { useState } from "react";
export default function FirstPage({ projects, setActive }) {
  const { content } = projects.find((e) => e.title === "Long intro");

  return (
    <div className="first-page">
      <button onClick={() => setActive(false)} className="first-page-button">
        <div>
          <p className="first-page-intro">{content[0].content}</p>
        </div>
      </button>
    </div>
  );
}
