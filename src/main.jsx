import React from 'react';
import { createRoot } from 'react-dom/client';

// Os estilos globais vêm ANTES do App: assim o CSS de cada componente (importado pelo App)
// entra depois no bundle e vence empates de especificidade com as classes globais.
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
