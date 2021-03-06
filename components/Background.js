export default function Background({ projects }) {
  const { content } = projects.find((e) => e.title === "Images");
  return (
    <div className="fadecycle">
      {content.map((pic) => {
        return (
          <div key={pic.id} className="singleimage">
            <div className="imagegradient">
              <img alt={pic.media.alternativeText} src={pic.media.url} />
            </div>{" "}
            <header className="caption">
              <h1>{pic.media.caption}</h1>
              <p>{pic.description}</p>
            </header>
          </div>
        );
      })}
    </div>
  );
}
