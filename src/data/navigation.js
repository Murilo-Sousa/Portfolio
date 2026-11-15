// Itens da navegação principal: cada item leva a uma seção da home, na mesma ordem da página.

export const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'formacao', label: 'Formação' },
  { id: 'contato', label: 'Contato' },
];

// Ordem das seções na página inicial (usada para destacar o item ativo no menu).
export const sectionIds = navItems.map((item) => item.id);
