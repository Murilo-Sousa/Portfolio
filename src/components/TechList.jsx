import './TechList.css';

// Lista de tecnologias em uma linha corrida, separadas por vírgula. Semântica de lista preservada.
export default function TechList({ items, label }) {
  return (
    <ul className="techlist" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
