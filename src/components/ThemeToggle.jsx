import './ThemeToggle.css';

export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === 'dark' ? 'claro' : 'escuro';
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Ativar tema ${next}`}
      title={`Tema ${next}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
