export default function FirstPage({ projects }) {
  const { content } = projects.find((e) => e.title === "Long intro");
  const image = projects.find((e) => e.title === "Main Image");
  return (
    <div className="first-page">
      <div className="image-gradient">
        <img
          alt={image.content[0].media.alternativeText}
          className="first-image"
          src={image.content[0].media.url}
        ></img>
      </div>
      <h1 style={{ fontWeight: "400" }} className="first-page-intro">
        {content[0].content}
      </h1>
    </div>
  );
}
