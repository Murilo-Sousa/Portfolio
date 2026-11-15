import { useEffect, useState } from 'react';

// Descobre qual seção está em foco para destacar o item correspondente no menu.
// Usa um único listener de rolagem com requestAnimationFrame (barato e sem layout forçado em loop).
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join(',');

  useEffect(() => {
    if (!enabled) return undefined;

    let frame = 0;

    const compute = () => {
      frame = 0;
      const focusLine = window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      let current = ids[0];
      for (const id of ids) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= focusLine) current = id;
      }
      setActive(atBottom ? ids[ids.length - 1] : current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  return active;
}
