import MediaFrame from '../components/MediaFrame.jsx';
import StatusTag from '../components/StatusTag.jsx';
import TechList from '../components/TechList.jsx';
import './ProjectItem.css';

// Um projeto na lista: imagem de um lado e, do outro, nome, categoria, resumo, tecnologias e o link.
export default function ProjectItem({ project }) {
  const { slug, number, name, category, summary, status, tech, techLabel, media } = project;
  const titleId = `projeto-${slug}`;
  const href = `#/projetos/${slug}`;

  return (
    <article className="project" aria-labelledby={titleId}>
      {/* A imagem também leva ao projeto; o link com texto abaixo é o que os leitores de tela usam */}
      <a className="project__media" href={href} tabIndex={-1} aria-hidden="true">
        <MediaFrame
          src={media.thumb ?? media.cover}
          alt=""
          ratio={media.ratio}
          ratioMobile={media.ratioMobile}
          kind="Capa do projeto"
        />
      </a>

      <div className="project__text">
        <p className="project__number">Projeto {number}</p>
        <h3 id={titleId} className="project__name">
          {name}
        </h3>
        <p className="project__category">{category}</p>

        {status && (
          <div className="project__status">
            <StatusTag>{status}</StatusTag>
          </div>
        )}

        <p className="project__summary">{summary}</p>

        <div className="project__tech">
          <TechList items={tech} label={techLabel ?? `Tecnologias de ${name}`} />
        </div>

        <a className="project__link text-link" href={href}>
          Ver detalhes<span className="visually-hidden"> de {name}</span>
        </a>
      </div>
    </article>
  );
}
