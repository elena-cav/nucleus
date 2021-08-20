export default function Introduction({ projects, global }) {
  const { content } = projects.find((e) => e.title === "Long intro");
  return (
    <div className="intro-flyout">
      <div className="intro-wrapper">
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
