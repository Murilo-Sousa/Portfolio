# Portfólio de Murilo de Melo Sousa

<!-- Depois de publicar, adicione aqui o endereço do site: **Site:** https://seu-site.onrender.com -->

Portfólio de **Murilo de Melo Sousa**, estudante de Web Design na FIAP e técnico em Desenvolvimento de Sistemas pelo SENAI. Ele procura estágio, jovem aprendiz ou vaga júnior em front-end, web design, UI/UX e full stack, e tem como meta de longo prazo liderar UX/UI.

O site é simples: uma página única com o que ele faz, os projetos, a formação e o contato, mais uma página de detalhes para cada projeto. Tem tema claro e escuro, funciona bem no celular e não usa animações.

## O que tem no site

- **Início**: nome, apresentação curta e retrato.
- **Sobre**: quem ele é e o que busca.
- **Projetos**: três projetos, cada um com uma página própria (descrição, participação, telas e links).
- **Habilidades**: front-end, UI/UX e design, back-end, ferramentas e métodos.
- **Formação**: SESI, SENAI e FIAP, com os 12 certificados de cursos concluídos.
- **Contato**: e-mail e GitHub.

## Projetos

| Projeto | O que é | Tecnologias | Links |
| --- | --- | --- | --- |
| **IARA Games** | Loja de jogos digitais de estúdios brasileiros, com catálogo e pagamento em modo de teste. Projeto em grupo na FIAP. | HTML, CSS, JavaScript, React, Node.js, Express, Stripe | [Site](https://iaragames.onrender.com) · [Código](https://github.com/Murilo-Sousa/IaraGames) |
| **SELENE** | Painel de monitoramento de uma colônia lunar fictícia, com estética de terminal CRT. Projeto Selene, FIAP. | HTML, CSS, JavaScript, Canvas | [Site](https://selene-op70.onrender.com) · [Código](https://github.com/Murilo-Sousa/SELENE) |
| **DiscPlayer** | Diário e comunidade para quem joga: catálogo de jogos, diário, notas, reviews e perfis. | React, Vite, Python, Flask, SQLite, API do IGDB | [Site](https://muh.pythonanywhere.com) · [Código](https://github.com/Murilo-Sousa/DiscPlayer) |

## Tecnologias do portfólio

HTML, CSS e JavaScript com **React 18** e **Vite 5**, sem outras bibliotecas. Fonte do sistema, rotas por hash (`#/projetos/selene`) e acessibilidade cuidada: navegação por teclado, contraste AA nos dois temas e link para pular ao conteúdo.

## Rodar no seu computador

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev       # abre em http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # serve o build para conferir
```

## Publicar

É um site estático, então qualquer hospedagem de arquivos serve. No [Render](https://render.com): **New > Static Site**, escolha este repositório e use:

- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`

O `render.yaml` traz os mesmos valores. Não é preciso configurar redirecionamentos.

## Onde editar o conteúdo

Os textos, projetos, habilidades, formação e certificados ficam em `src/data/`. As cores estão em `src/styles/tokens.css`. Mais detalhes e pendências opcionais em [docs/NOTAS.md](docs/NOTAS.md).

```
src/
├── data/         conteúdo (perfil, projetos, habilidades, formação, certificados)
├── sections/     seções da página inicial
├── pages/        Home e página de cada projeto
├── components/   Navbar, Button, CertificateList e outros
└── styles/       cores, base e layout
```

## Contato

- E-mail: [murilodmsousa@gmail.com](mailto:murilodmsousa@gmail.com)
- GitHub: [github.com/Murilo-Sousa](https://github.com/Murilo-Sousa)

## Créditos das imagens

As capturas de tela mostram os próprios projetos em execução. As capas de jogos que aparecem nelas (IGDB e estúdios) e as imagens de *Overwatch 2* (Blizzard Entertainment) pertencem aos seus donos e são usadas só para mostrar a interface dos projetos.