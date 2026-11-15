import { useCallback, useEffect, useState } from 'react';

const THEME_COLORS = { light: '#ffffff', dark: '#0f1216' };

// O tema inicial já foi definido no index.html (antes da primeira pintura).
const readInitialTheme = () =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      // Só guarda a escolha quando a pessoa troca o tema manualmente.
      try {
        localStorage.setItem('theme', next);
      } catch {
        /* armazenamento indisponível: a troca continua valendo na sessão */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
