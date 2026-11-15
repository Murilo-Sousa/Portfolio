import './About.css';

const facts = [
  { term: 'Foco', detail: 'Front-end, Web Design e UI/UX' },
  {
    term: 'Procuro',
    detail: 'Estágio, jovem aprendiz ou posição júnior em front-end, web design, UI/UX e full stack',
  },
  { term: 'A longo prazo', detail: 'Liderar UX/UI' },
];

export default function About() {
  return (
    <section id="sobre" className="section" aria-labelledby="sobre-titulo">
      <div className="container">
        <h2 id="sobre-titulo" className="section__title">
          Sobre mim
        </h2>

        <div className="section__content prose">
          <p>
            Sou estudante de Web Design na FIAP e técnico em Desenvolvimento de Sistemas pelo
            SENAI. Da formação técnica vem a base de programação e de back-end; do design, o hábito
            de pensar em quem vai usar o que eu construo.
          </p>
          <p>
            Tenho mais afinidade com front-end, web design e UI/UX: interfaces claras, acessíveis e
            responsivas. Aprendo tecnologia nova com facilidade, gosto de resolver problemas e de
            trabalhar em equipe. A meta de longo prazo é liderar UX/UI.
          </p>
        </div>

        <dl className="facts">
          {facts.map((fact) => (
            <div className="facts__row" key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
