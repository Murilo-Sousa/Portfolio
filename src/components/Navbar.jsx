import { useCallback, useEffect, useRef, useState } from 'react';
import { navItems } from '../data/navigation.js';
import { profile } from '../data/profile.js';
import ThemeToggle from './ThemeToggle.jsx';
import './Navbar.css';

const isItemActive = (item, activeId) =>
  item.id === activeId || (item.includes ?? []).includes(activeId);

export default function Navbar({ activeId, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const closeMenu = useCallback(() => setOpen(false), []);

  // `inert` via DOM: o React 18 e o 19 tratam essa propriedade de formas diferentes.
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) menu.removeAttribute('inert');
    else menu.setAttribute('inert', '');
  }, [open]);

  // Menu móvel: trava a rolagem, prende o foco, fecha com Esc e ao voltar para o desktop
  useEffect(() => {
    if (!open) return undefined;

    const header = headerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const firstLink = header.querySelector('.mobile-menu a[href]');
    const frame = requestAnimationFrame(() => firstLink?.focus());

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = [...header.querySelectorAll('a[href], button:not([disabled])')].filter(
        (element) => element.getClientRects().length > 0,
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia('(min-width: 60rem)');
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="site-header" data-menu-open={open}>
      <div className="site-header__bar container">
        <a className="signature" href="#inicio" onClick={closeMenu}>
          {profile.name}
        </a>

        <nav className="primary-nav" aria-label="Principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isItemActive(item, activeId) ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__tools">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movel"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      <div ref={menuRef} id="menu-movel" className="mobile-menu" data-open={open}>
        <nav aria-label="Principal">
          <ul className="mobile-menu__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  aria-current={isItemActive(item, activeId) ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
