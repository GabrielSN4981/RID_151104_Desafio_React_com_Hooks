import "./Header.css";

function Header() {
  return (
    <header>
      <div className="d-flex al-center header-media">
        <nav className="links d-flex jc-center">
          <a>Projetos</a>
          <a>Tecnologias</a>
          <a>Sobre mim</a>
        </nav>
        <div className="icons">
          <a href="https://github.com/GabrielSN4981" target="_blank">
            <img src="github.svg" alt="GitHub Icon" id="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-santos-nogueira-3090a9374"
            target="_blank"
          >
            <img src="linkedin.svg" alt="LikedIn Icon" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
