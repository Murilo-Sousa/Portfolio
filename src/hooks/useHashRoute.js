import { useEffect, useRef, useState } from 'react';

// Rotas por hash, sem biblioteca extra e compatíveis com hospedagem estática:
//   #/projetos/iara-games  -> página de estudo de caso
//   #sobre, #projetos, ... -> seções da página inicial

// Guarda a posição de rolagem da página inicial ao abrir um projeto,
// para que o botão "voltar" do navegador devolva a pessoa ao mesmo ponto.
export const homeScroll = { y: 0 };

export function parseHash(hash) {
  const match = hash.match(/^#\/projetos\/([a-z0-9-]+)\/?$/i);
  if (match) return { name: 'project', slug: match[1].toLowerCase(), section: null };

  let section = null;
  if (!hash.startsWith('#/')) {
    try {
      section = decodeURIComponent(hash.slice(1)) || null;
    } catch {
      section = null;
    }
  }
  return { name: 'home', slug: null, section };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));
  const routeRef = useRef(route);

  useEffect(() => {
    const onHashChange = () => {
      const next = parseHash(window.location.hash);
      if (routeRef.current.name === 'home' && next.name === 'project') {
        homeScroll.y = window.scrollY;
      }
      routeRef.current = next;
      setRoute(next);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
