// Formação, em ordem cronológica (o item `current` é o que está em andamento).
// `period` fica vazio até você informar as datas reais; enquanto isso, nada é exibido.

export const education = [
  {
    id: 'sesi',
    institution: 'SESI',
    course: 'Ensino Fundamental (I e II) e Ensino Médio',
    description: 'Formação escolar na rede SESI, do Fundamental ao Médio.',
    period: '',
    current: false,
  },
  {
    id: 'senai',
    institution: 'SENAI',
    course: 'Técnico em Desenvolvimento de Sistemas',
    description: 'Base em programação, bancos de dados e desenvolvimento de sistemas.',
    period: '',
    current: false,
  },
  {
    id: 'fiap',
    institution: 'FIAP',
    course: 'Web Design',
    description: 'Design de interfaces, front-end e experiência do usuário.',
    period: '',
    current: true,
  },
];
