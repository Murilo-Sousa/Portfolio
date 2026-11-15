import { skillGroups } from '../data/skills.js';
import './Skills.css';

export default function Skills() {
  return (
    <section id="habilidades" className="section" aria-labelledby="habilidades-titulo">
      <div className="container">
        <h2 id="habilidades-titulo" className="section__title">
          Habilidades
        </h2>

        <ul className="skills__groups section__content">
          {skillGroups.map((group) => (
            <li className="skill-group" key={group.id}>
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="skill-group__items" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
