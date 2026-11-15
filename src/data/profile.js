// Dados pessoais e de contato.
// Para ativar um link de contato, preencha `href` (e `value`, o texto exibido).
// Enquanto `href` estiver vazio, o campo aparece como "a preencher" e não é clicável.

export const profile = {
  name: 'Murilo de Melo Sousa',
  siteTitle: 'Murilo de Melo Sousa | Front-end, Web Design e UI/UX',
  roles: 'Front-end, Web Design e UI/UX',
  // Retrato do começo da página. Arquivos em public/foto (caminho relativo, sem barra inicial).
  // Para trocar a foto, substitua os arquivos mantendo a proporção 4:5 e ajuste width/height.
  photo: {
    src: 'foto/murilo-614.webp',
    srcSet: 'foto/murilo-480.webp 480w, foto/murilo-614.webp 614w',
    width: 614,
    height: 767,
    alt: 'Murilo de Melo Sousa, de camisa preta, em retrato de estúdio',
  },
  contacts: [
    {
      id: 'email',
      label: 'E-mail',
      href: 'mailto:murilodmsousa@gmail.com',
      value: 'murilodmsousa@gmail.com',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/Murilo-Sousa',
      value: 'github.com/Murilo-Sousa',
    },
  ],
};
