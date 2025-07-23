import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="container">
      <div className="title">
        <h1>Gabriel Santos Nogueira</h1>
      </div>
      <div className="paragraph">
        <p>
          Desenvolvedor Full Stack buscando oportunidades para começar carreira
          na área de tecnologia
        </p>
      </div>
      <div id="button">
        <Button buttonStyle="btn-1" type="submit">
          Saber mais
        </Button>
      </div>
    </div>
  );
}

export default Hero;
