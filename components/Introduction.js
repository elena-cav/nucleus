export default function Introduction({ projects, global }) {
  const { content } = projects.find((e) => e.title === "Long intro");
  return (
    <div className="intro-flyout">
      <div className="intro-wrapper">
        <h1 style={{ fontWeight: "400" }} className="intro">
          {content[0].content}
        </h1>
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
