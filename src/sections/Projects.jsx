import { projects } from '../data/projects.js';
import ProjectItem from './ProjectItem.jsx';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projetos" className="section" aria-labelledby="projetos-titulo">
      <div className="container">
        <h2 id="projetos-titulo" className="section__title">
          Projetos
        </h2>
        <p className="section__intro">
          Três projetos. Cada um tem uma página com a descrição, a minha participação e as telas.
        </p>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
