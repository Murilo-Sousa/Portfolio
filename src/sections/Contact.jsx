import { profile } from '../data/profile.js';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contato" className="section contact" aria-labelledby="contato-titulo">
      <div className="container">
        <h2 id="contato-titulo" className="section__title">
          Contato
        </h2>

        <div className="section__content prose">
          <p>
            Estou procurando estágio, jovem aprendiz ou vaga júnior em front-end, web design, UI/UX
            ou full stack. Se o meu perfil faz sentido para o seu time, vamos conversar.
          </p>
        </div>

        <ul className="contact__list">
          {profile.contacts.map((contact) => {
            const external = contact.id !== 'email';
            return (
              <li className="contact__row" key={contact.id}>
                <span className="contact__label">{contact.label}</span>
                {contact.href ? (
                  <a
                    className="contact__value text-link"
                    href={contact.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {contact.value || contact.href}
                    {external && <span className="visually-hidden"> (abre em nova aba)</span>}
                  </a>
                ) : (
                  <span className="contact__value is-pending">a preencher</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
