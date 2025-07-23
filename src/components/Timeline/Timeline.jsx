import { useState, useEffect } from "react";
import TimelineEvent from "./TimelineEvent";
import "./Timeline.css";

function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simula uma requisição para uma API
    const fetchEvents = () => {
      const data = [
        {
          year: "2022",
          text: "Iniciei o ensino médio técnico STEAM no SENAI, onde tive meu primeiro contato com programação através do Python e do Pygame. Na época, ainda não tinha despertado um grande interesse pela área.",
        },
        {
          year: "2023",
          text: "No último ano do ensino médio, finalizei o curso técnico e, ao final do ano, comecei a estudar programação na escola DNC. Foi durante esse período que meu interesse pela área cresceu de forma significativa, e tomei a decisão de seguir carreira na tecnologia.",
        },
        {
          year: "2024",
          text: "Enquanto continuava estudando, conquistei meu primeiro emprego como auxiliar administrativo no Instituto Ibhases, onde sigo até hoje. Essa experiência me proporcionou uma introdução ao mercado de trabalho e, com organização financeira, consegui alcançar alguns objetivos pessoais importantes por conta própria.",
        },
        {
          year: "2025",
          text: "Sigo conciliando trabalho e estudos, agora com foco em migrar de vez para a área de tecnologia. Tenho investido em cursos complementares, como cibersegurança e inteligência artificial, buscando me tornar um profissional mais completo e versátil.",
        },
      ];

      setTimeout(() => {
        setEvents(data);
      }, 1000);
    };

    fetchEvents();
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-line" />
      <div className="timeline-events">
        {events.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          events.map((event) => (
            <TimelineEvent
              key={event.year}
              year={event.year}
              text={event.text}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Timeline;
