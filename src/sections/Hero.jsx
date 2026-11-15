import { profile } from '../data/profile.js';
import Button from '../components/Button.jsx';
import './Hero.css';

// Começo da página: nome, quem sou, o que procuro, dois botões e o retrato.
export default function Hero() {
  const { photo } = profile;

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-titulo">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__roles">{profile.roles}</p>
          <h1 id="hero-titulo" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__intro">
            Estudante de Web Design na FIAP e técnico em Desenvolvimento de Sistemas pelo SENAI.
            Procuro estágio, jovem aprendiz ou vaga júnior em front-end, web design, UI/UX e full
            stack.
          </p>
          <div className="hero__actions">
            <Button href="#projetos" variant="primary">
              Ver projetos
            </Button>
            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </div>
        </div>

        <figure className="hero__photo">
          <img
            src={photo.src}
            srcSet={photo.srcSet}
            sizes="(min-width: 48rem) 16rem, 10rem"
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
