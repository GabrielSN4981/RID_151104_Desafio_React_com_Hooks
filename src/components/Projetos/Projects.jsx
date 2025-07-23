import "./Projects.css";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula uma requisição para uma API
    setTimeout(() => {
      const data = [
        {
          title: "PROJETO 1",
          link: "https://resolucao-landingpage.netlify.app",
          image: "projeto1.png",
          description:
            "Construí minha primeira landing page aplicando HTML, CSS e adicionando funcionalidades com JavaScript. Com isso, dei início à estruturação do meu portfólio, dando um passo importante rumo a me tornar um desenvolvedor de sucesso!",
        },
        {
          title: "PROJETO 2",
          link: "https://blogresponsivo-dnc.netlify.app",
          image: "projeto2.png",
          description:
            "Transformei um blog em uma experiência completamente responsiva, garantindo que ele se adaptasse perfeitamente a qualquer dispositivo — seja um smartphone, tablet ou monitor ultrawide.",
        },
        {
          title: "PROJETO 3",
          link: "https://gerenciador-de-tarefas-eight-nu.vercel.app",
          image: "projeto3.png",
          description:
            "Transformei uma plataforma estática em uma experiência dinâmica e interativa. Criei um board de gerenciamento de tarefas, garantindo responsividade e interações em tempo real.",
        },
        {
          title: "PROJETO 4",
          link: "https://desafio2-consumodeapi.netlify.app",
          image: "projeto4.png",
          description:
            "Desenvolvi uma tela funcional com API integrada. Estilizei com base no Figma e usei uma API pública de clima, garantindo dados dinâmicos.",
        },
      ];

      setProjects(data);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="container">
      <h1 id="title-projetos">Projetos</h1>

      {loading ? (
        <p style={{ color: "white", textAlign: "center", fontSize: "20px" }}>
          Carregando projetos...
        </p>
      ) : (
        <div className="container-cards d-flex">
          {projects.map((proj, index) => (
            <div className="cards" key={index}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img src={proj.image} alt="" className="img-card" />
              </a>
              <div className="d-flex jc-center">
                <h2>{proj.title}</h2>
              </div>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <Button buttonStyle="btn-2" type="submit">
                  Clique aqui
                </Button>
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Projects;
