import instagramIcon from "../components/images/instagram-brands.svg";
export default function Contact({ isOpen, projects, global }) {
  const { content } = projects.find((e) => e.title === "Address");
  const instagram = global.socialNetworks.find((e) => e.title === "Instagram");
  return (
    <div className={`contactPage${isOpen ? " open" : ""}`}>
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact</h2>
        <h4 style={{ fontWeight: "800" }}>{content[0].content}</h4>
        <h4>{content[1].content}</h4>
        <h4>{content[2].content}</h4>
        <h4>{content[3].content}</h4>
        <h4 className="email">
          Email -{" "}
          <a href={`mailto:${global.contactEmail}`} className="email-link">
            {global.contactEmail}
          </a>
        </h4>
        <h4 className="socials-title">Socials</h4>
        <a target="_blank" href={instagram.url} className="instagram-button">
          {" "}
          <img
            alt="Instagram icon"
            className="instagram-icon"
            src={instagramIcon.src}
          ></img>
        </a>
      </div>
    </div>
  );
}
