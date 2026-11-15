import Button from '../components/Button.jsx';
import MediaFrame from '../components/MediaFrame.jsx';
import PendingNote from '../components/PendingNote.jsx';
import StatusTag from '../components/StatusTag.jsx';
import TechList from '../components/TechList.jsx';
import { getNextProject, getProject, projects } from '../data/projects.js';
import './ProjectDetail.css';

// Composição das telas na galeria. Cada item de `media.gallery` pode trazer
// { src, alt, caption, span, ratio, ratioMobile }; o que faltar vem daqui (por posição).
// Sem imagens, os três espaços reservados abaixo continuam aparecendo.
const GALLERY_LAYOUT = [
  { ratio: '16 / 9', ratioMobile: '4 / 3', span: 'full' },
  { ratio: '4 / 3', ratioMobile: '4 / 3', span: 'half' },
  { ratio: '4 / 3', ratioMobile: '4 / 3', span: 'half' },
];

function CaseSection({ id, title, stacked = false, children }) {
  return (
    <section
      id={id}
      className={`case-section${stacked ? ' case-section--wide' : ''}`}
      aria-labelledby={`${id}-titulo`}
    >
      <h2 id={`${id}-titulo`} className="case-section__title" tabIndex={-1}>
        {title}
      </h2>
      <div className="case-section__body">{children}</div>
    </section>
  );
}

const FALLBACK_SLOT = { ratio: '16 / 9', ratioMobile: '4 / 3', span: 'full' };

function ItemList({ items, note, dense = false }) {
  return (
    <div>
      <ul className={`case-list${dense ? ' case-list--dense' : ''}`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {note && <p className="case-list__note">{note}</p>}
    </div>
  );
}

// Índice da página: leva a cada seção do estudo de caso.
// A rota é por hash, então um link "#secao" trocaria de página; por isso o clique rola até a seção
// (a rolagem suave e o respeito a prefers-reduced-motion vêm do CSS) e leva o foco ao título dela.
function CaseIndex({ items }) {
  const goTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ block: 'start' });
    section.querySelector('h2')?.focus({ preventScroll: true });
  };

  return (
    <nav className="case-index" aria-label="Nesta página">
      <p className="case-index__label">Nesta página</p>
      <ol className="case-index__list">
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" className="case-index__button" onClick={() => goTo(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function NotFound() {
  return (
    <div className="case case--missing">
      <div className="container">
        <h1 className="case__missing-title">Projeto não encontrado.</h1>
        <p className="case__missing-text">O endereço pode ter mudado ou estar incorreto.</p>
        <Button href="#projetos" variant="primary">
          Voltar aos projetos
        </Button>
      </div>
    </div>
  );
}

export default function ProjectDetail({ slug }) {
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const next = getNextProject(slug);
  const {
    number,
    name,
    category,
    context,
    status,
    overview,
    tech,
    techLabel,
    techNote,
    contribution,
    contributionNote,
    characteristics,
    process,
    media,
    links,
  } = project;
  const total = String(projects.length).padStart(2, '0');
  const galleryItems = media.gallery.length
    ? media.gallery.map((image, index) => ({
        ...(GALLERY_LAYOUT[index] ?? FALLBACK_SLOT),
        ...image,
      }))
    : GALLERY_LAYOUT;

  // Ordem das seções: o que foi feito, como ficou (telas) e só depois os detalhes técnicos.
  const sections = [
    { id: 'visao-geral', title: 'Visão geral' },
    { id: 'participacao', title: 'Minha participação' },
    { id: 'telas', title: 'Telas' },
    ...(characteristics ? [{ id: 'caracteristicas', title: characteristics.title }] : []),
    { id: 'processo', title: process?.title ?? 'Processo e aprendizados' },
  ];

  return (
    <article className="case" aria-labelledby="caso-titulo">
      <div className="container">
        <div className="case__top">
          <a className="case__back" href="#projetos">
            <span aria-hidden="true">←</span> Projetos
          </a>
          <p className="case__index">
            {number} de {total}
          </p>
        </div>

        <h1 id="caso-titulo" className="case__title">
          {name}
        </h1>

        <dl className="case__meta">
          <div className="case__meta-item">
            <dt>Categoria</dt>
            <dd>{category}</dd>
          </div>
          {context && (
            <div className="case__meta-item">
              <dt>Contexto</dt>
              <dd>{context}</dd>
            </div>
          )}
          {status && (
            <div className="case__meta-item">
              <dt>Situação</dt>
              <dd>
                <StatusTag>{status}</StatusTag>
              </dd>
            </div>
          )}
          <div className="case__meta-item case__meta-item--tech">
            <dt>{techLabel ?? 'Tecnologias'}</dt>
            <dd>
              <TechList items={tech} label={techLabel ?? `Tecnologias de ${name}`} />
              {techNote && <p className="case__meta-note">{techNote}</p>}
            </dd>
          </div>
        </dl>

        {/* Demonstração e código ficam no alto: quem quer abrir o projeto não precisa rolar a página inteira */}
        <div className="case__actions">
          {links.demo ? (
            <Button
              href={links.demo}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir projeto<span className="visually-hidden"> (abre em nova aba)</span>
            </Button>
          ) : (
            <p className="case__pending">Demonstração em breve</p>
          )}
          {links.repo ? (
            <Button
              href={links.repo}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver código no GitHub<span className="visually-hidden"> (abre em nova aba)</span>
            </Button>
          ) : (
            <p className="case__pending">Repositório em breve</p>
          )}
        </div>

        <div className="case__cover">
          <MediaFrame
            src={media.cover}
            alt={media.coverAlt ?? `Capa do projeto ${name}`}
            ratio={media.coverRatio ?? '21 / 9'}
            ratioMobile={media.coverRatio ?? '4 / 3'}
            kind="Capa do projeto"
          />
          {media.coverCredit && <p className="case__cover-credit">{media.coverCredit}</p>}
        </div>

        <CaseIndex items={sections} />

        <CaseSection id="visao-geral" title="Visão geral">
          <div className="case-prose">
            {overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </CaseSection>

        <CaseSection id="participacao" title="Minha participação">
          {contribution ? (
            <ItemList items={contribution} note={contributionNote} />
          ) : (
            <div>
              <PendingNote>
                Esta seção será escrita a partir da análise dos arquivos do projeto.
              </PendingNote>
            </div>
          )}
        </CaseSection>

        <CaseSection id="telas" title="Telas" stacked>
          <div className="case-gallery">
            {galleryItems.map((item, index) => (
              <figure
                key={item.src ?? index}
                className={`case-gallery__item case-gallery__item--${item.span}${
                  item.fit ? ` case-gallery__item--${item.fit}` : ''
                }`}
               
              >
                {item.src ? (
                  // Abre a captura em tamanho original: em telas pequenas o texto da interface fica miúdo
                  <a
                    className="case-gallery__zoom"
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.alt} (abrir em tamanho original, em nova aba)`}
                  >
                    <MediaFrame
                      src={item.src}
                      alt=""
                      ratio={item.ratio}
                      ratioMobile={item.ratioMobile}
                      kind="Captura de tela"
                    />
                  </a>
                ) : (
                  <MediaFrame
                    ratio={item.ratio}
                    ratioMobile={item.ratioMobile}
                    kind="Captura de tela"
                  />
                )}
                {item.caption && (
                  <figcaption className="case-gallery__caption">{item.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
          {media.galleryNote && <p className="case-gallery__note">{media.galleryNote}</p>}
        </CaseSection>

        {characteristics && (
          <CaseSection id="caracteristicas" title={characteristics.title}>
            <ItemList items={characteristics.items} note={characteristics.note} dense />
          </CaseSection>
        )}

        <CaseSection id="processo" title={process?.title ?? 'Processo e aprendizados'}>
          {process ? (
            <dl className="case-steps">
              {process.items.map((item) => (
                <div className="case-steps__item" key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div>
              <PendingNote>
                Decisões de design e de código, escritas com base nos arquivos reais do projeto.
              </PendingNote>
            </div>
          )}
        </CaseSection>

        <nav className="case-next" aria-label="Próximo projeto">
          <a className="case-next__link" href={`#/projetos/${next.slug}`}>
            <span className="case-next__label">Próximo projeto</span>
            <span className="case-next__name">
              {next.name} <span aria-hidden="true">→</span>
            </span>
          </a>
        </nav>
      </div>
    </article>
  );
}
