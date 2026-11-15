import { certificateGroups } from '../data/certificates.js';
import './CertificateList.css';

// Certificados em grupos recolhíveis (<details> nativo: teclado, leitor de tela e sem JavaScript).
// O primeiro grupo começa aberto; os outros mostram só o título e a quantidade.
export default function CertificateList() {
  return (
    <div className="cert-groups">
      {certificateGroups.map((group, index) => {
        const count = group.items.length;
        return (
          <details className="cert-group" key={group.id} open={index === 0}>
            <summary className="cert-group__summary">
              <span className="cert-group__title">{group.title}</span>
              <span className="cert-group__count">
                {count} {count === 1 ? 'curso' : 'cursos'}
              </span>
            </summary>

            <div className="cert-group__body">
              <p className="cert-group__note">{group.note}</p>
              <ul className="cert-list" aria-label={group.title}>
                {group.items.map((item) => (
                  <li className="cert" key={item.id}>
                    <p className="cert__title">{item.title}</p>
                    <p className="cert__meta">
                      <span>{item.issuer}</span>
                      <span>{item.hours}</span>
                      <span>{item.period}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        );
      })}
    </div>
  );
}
