import './MediaFrame.css';

// Moldura de imagem do projeto.
// - Com `src`: exibe a imagem com a proporção informada (evita que a página "pule" ao carregar).
// - Sem `src`: exibe uma caixa cinza com o aviso "Imagem em breve".
export default function MediaFrame({
  src,
  alt = '',
  ratio = '16 / 10',
  ratioMobile,
  kind = 'Captura de tela',
  className = '',
}) {
  const style = { '--ratio': ratio, '--ratio-mobile': ratioMobile ?? ratio };

  if (src) {
    return (
      <figure className={`media media--filled ${className}`} style={style}>
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      </figure>
    );
  }

  return (
    <div
      className={`media media--placeholder ${className}`}
      style={style}
      role="img"
      aria-label={`Espaço reservado para ${kind.toLowerCase()}`}
    >
      <span aria-hidden="true">Imagem em breve</span>
    </div>
  );
}
