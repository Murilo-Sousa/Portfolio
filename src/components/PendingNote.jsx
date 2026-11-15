import './PendingNote.css';

// Marcador de conteúdo que ainda não foi escrito (só aparece se um projeto novo não tiver o texto).
export default function PendingNote({ children }) {
  return (
    <div className="pending">
      <p className="pending__title">Em preparação</p>
      <p className="pending__text">{children}</p>
    </div>
  );
}
