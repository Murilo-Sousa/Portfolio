import './StatusTag.css';

export default function StatusTag({ children }) {
  return (
    <span className="status-tag">
      <span className="status-tag__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
