import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import { sectionIds } from './data/navigation.js';
import { getProject } from './data/projects.js';
import { profile } from './data/profile.js';
import { useTheme } from './hooks/useTheme.js';
import { useHashRoute, homeScroll } from './hooks/useHashRoute.js';
import { useActiveSection } from './hooks/useActiveSection.js';

export default function App() {
  const route = useHashRoute();
  const { theme, toggleTheme } = useTheme();
  const previousRoute = useRef(null);

  const isHome = route.name === 'home';
  const scrollActive = useActiveSection(sectionIds, isHome);
  const activeId = isHome ? scrollActive : 'projetos';

  // A posição de rolagem é controlada aqui, não pelo navegador.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // Rolagem ao trocar de "página" (as âncoras dentro da home são resolvidas pelo navegador).
  useEffect(() => {
    const previous = previousRoute.current;
    previousRoute.current = route;

    if (route.name === 'project') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }
    if (previous && previous.name === 'home') return;

    const target = route.section ? document.getElementById(route.section) : null;
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant', block: 'start' }));
    } else {
      window.scrollTo({ top: previous ? homeScroll.y : 0, left: 0, behavior: 'instant' });
    }
  }, [route]);

  // Título da aba acompanha a página aberta
  useEffect(() => {
    const project = route.name === 'project' ? getProject(route.slug) : null;
    document.title = project ? `${project.name} | ${profile.name}` : profile.siteTitle;
  }, [route.name, route.slug]);

  // O link "pular" não usa hash (a rota é por hash), então move o foco direto.
  const skipToContent = (event) => {
    event.preventDefault();
    document.getElementById('conteudo')?.focus();
  };

  return (
    <>
      <a className="skip-link" href="#conteudo" onClick={skipToContent}>
        Pular para o conteúdo
      </a>
      <Navbar activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo" tabIndex={-1}>
        {isHome ? <Home /> : <ProjectDetail slug={route.slug} />}
      </main>
    </>
  );
}
