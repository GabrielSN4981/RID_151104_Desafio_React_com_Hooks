import "./Footer.css";

function Footer() {
  return (
    <footer className="footer d-flex">
      <div id="contact" className="d-flex">
        <div>
          Meu contato: <br />
          48 98815-2920
        </div>
        <div id="email">
          Email: <br />
          gabrielsantosnogueira2005@gmail.com
        </div>
      </div>
      <div id="icons" className="d-flex">
        <a href="https://github.com/GabrielSN4981" target="_blank">
          <img src="github.svg" alt="GitHub Icon" id="git1" />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-santos-nogueira-3090a9374"
          target="_blank"
        >
          <img src="linkedin.svg" alt="LikedIn Icon" />
        </a>
        <a
          href="https://www.figma.com/files/team/1316848097101227809
          /recents-and-sharing?fuid=1316848091909675881"
          target="_blank"
        >
          <img src="figma.svg" height={30} alt="Figma Icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
