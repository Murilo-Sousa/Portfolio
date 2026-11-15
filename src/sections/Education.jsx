import CertificateList from '../components/CertificateList.jsx';
import StatusTag from '../components/StatusTag.jsx';
import { certificateCount } from '../data/certificates.js';
import { education } from '../data/education.js';
import './Education.css';

// Formação e certificados na mesma seção: primeiro onde estudou, depois os cursos concluídos.
export default function Education() {
  return (
    <section id="formacao" className="section" aria-labelledby="formacao-titulo">
      <div className="container">
        <h2 id="formacao-titulo" className="section__title">
          Formação
        </h2>

        <ol className="education__list section__content">
          {education.map((item) => (
            <li className="education__item" key={item.id} data-current={item.current}>
              <div className="education__head">
                <h3 className="education__institution">{item.institution}</h3>
                {item.current && <StatusTag>Em andamento</StatusTag>}
              </div>
              <p className="education__course">{item.course}</p>
              <p className="education__description">{item.description}</p>
              {item.period && <p className="education__period">{item.period}</p>}
            </li>
          ))}
        </ol>

        <div className="education__certs">
          <h3 className="education__certs-title">Certificados</h3>
          <p className="education__certs-note">
            {certificateCount} cursos concluídos no SENAI e na Alura.
          </p>
          <CertificateList />
        </div>
      </div>
    </section>
  );
}
