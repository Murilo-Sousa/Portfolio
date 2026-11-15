// Projetos do portfólio.
//
// Os três projetos foram preenchidos na Etapa 2, a partir dos arquivos de cada um
// (SELENE-v2 e os repositórios do IARA Games e do DiscPlayer).
// Nenhum detalhe técnico, funcionalidade ou imagem foi inventado: o que não foi verificado nos
// arquivos não aparece aqui.
//
// Campos de cada projeto (todos opcionais, exceto slug, number, name, category, summary, overview, tech, media, links):
//   context, status           aparecem na ficha do estudo de caso quando preenchidos
//   contribution              lista "Minha participação"; contributionNote é a observação abaixo dela
//   characteristics           { title, items, note }
//   process                   { title, items: [{ term, text }] }; sem ele, aparece a nota "Em preparação"
//   media.cover / coverAlt    capa do estudo de caso e da lista na home; coverRatio troca a proporção (padrão 21:9)
//   media.coverCredit         crédito curto exibido abaixo da capa
//   media.thumb / thumbAlt    imagem própria para a lista na home (opcional; usa a capa se faltar)
//   media.gallery             [{ src, alt, caption, span: 'full' | 'half', fit: 'phone' (tela de celular, centralizada) | 'narrow' (captura pequena, na largura original), ratio, ratioMobile }]
//   media.galleryNote         nota curta abaixo das telas
//   links.demo / links.repo   vazios aparecem como "em breve"
// Imagens ficam em public/projetos/<slug>/ (caminho relativo, sem barra inicial).

export const projects = [
  {
    slug: 'iara-games',
    number: '01',
    name: 'IARA Games',
    category: 'Front-end Development / Web Design',
    context: 'Projeto acadêmico em grupo, FIAP',
    status: 'Publicado',
    summary:
      'Loja de jogos digitais de estúdios brasileiros, com identidade visual própria, catálogo por categorias, página para cada jogo e pagamento em modo de teste pela Stripe.',
    overview: [
      'A IARA é uma loja de jogos digitais voltada ao público brasileiro, com destaque para jogos de estúdios do país. O projeto une a organização das grandes lojas, como Steam, Epic Games Store, Nintendo eShop e PlayStation Store, a uma identidade própria, inspirada na lenda da Iara e na vitória-régia. O logotipo combina a vitória-régia e o símbolo de desligar, que formam a letra G.',
      'O projeto evoluiu em fases: uma interface estática em HTML e CSS, uma camada de interatividade em JavaScript e, por fim, páginas em React, um catálogo filtrado por categoria e um servidor em Node.js que cria pagamentos na Stripe, em modo de teste. Projeto acadêmico desenvolvido em grupo, durante a FIAP.',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'Stripe Checkout', 'Font Awesome'],
    techLabel: null,
    techNote:
      'React 18.3.1 carregado por CDN, sem etapa de build e sem JSX. O servidor usa só Express e dotenv e fala com a Stripe pelo fetch do Node 18, sem SDK. Ícones: Font Awesome 6.5. Fontes: Gabarito e Anton SC, do Google Fonts. Publicado na Render.',
    contribution: [
      'Desenvolvimento do layout e da estrutura do site',
      'Organização visual das páginas',
      'Planejamento do fluxo de navegação',
      'Construção de interfaces responsivas',
      'Desenvolvimento da experiência de navegação da loja',
    ],
    contributionNote:
      'Projeto em grupo, com Leonardo Franco Arakaki, Samuel Liasch Alves e Walisson Souza dos Santos.',
    characteristics: {
      title: 'Características',
      items: [
        'Home com carrossel de destaques, vitrines (Sugestões, Em Alta, Adicionados Recentemente, Mais Comprados, Melhores Avaliados, Ofertas e Gratuitos) e coleções',
        'Catálogo com 30 jogos, filtros por seção e por categoria (Ação, Aventura, RPG e Estratégia) e busca na barra de navegação',
        'Uma página para cada jogo, montada em React a partir do id na URL, com galeria de imagens e vídeo, requisitos mínimos e recomendados, jogos semelhantes e avaliações',
        'Carrossel com rotação automática, pausa ao passar o mouse ou focar, navegação por teclado e por toque, e respeito a prefers-reduced-motion',
        'Galeria em tela cheia, abas Detalhes e Avaliações, curtidas nas avaliações e descrição que expande e recolhe',
        'Login, cadastro e preferências em pop-up, com mostrar senha e conferência de senha em tempo real',
        'Pagamento em modo de teste pela Stripe Checkout, com o preço definido no servidor e o status confirmado na Stripe',
        'No celular, menu em hambúrguer e vitrines em faixas com rolagem horizontal',
      ],
      note: 'As notas e as avaliações de usuários são fictícias. Login, carrinho e favoritos são apenas visuais e não salvam dados, e o pagamento funciona só em modo de teste.',
    },
    process: {
      title: 'Decisões de projeto',
      items: [
        {
          term: 'Identidade própria sobre um padrão conhecido',
          text: 'Steam, Epic Games Store, Nintendo eShop e PlayStation Store foram analisadas para organizar a loja em carrossel, vitrines, categorias, ofertas e página de produto. A identidade própria vem da lenda da Iara e da vitória-régia, presentes no logotipo e em elementos da interface.',
        },
        {
          term: 'Navegação contínua',
          text: 'O objetivo era que a pessoa descobrisse jogos sem grandes espaços vazios e sem a atenção presa a um só bloco. A home alterna carrossel, destaques, vitrines de formatos diferentes e coleções, e as vitrines seguem proporções próximas às das lojas de distribuição.',
        },
        {
          term: 'Do estático ao interativo, em fases',
          text: 'A interface nasceu em HTML e CSS, ganhou JavaScript com manipulação do DOM (carrossel, galeria, abas e formulários) e, na fase mais recente, React, catálogo filtrado e pagamento. Preços e categorias ficam em um único arquivo, e o servidor lê esse mesmo arquivo.',
        },
        {
          term: 'O preço nunca vem do navegador',
          text: 'O botão Comprar envia ao servidor só o id do jogo. O servidor busca o preço no catálogo e cria a sessão de pagamento na Stripe, e a página de retorno confere o status direto na Stripe, sem confiar no que está escrito na URL. Os dados do cartão ficam na página da Stripe, e a chave secreta, só no servidor.',
        },
        {
          term: 'Movimento e acessibilidade',
          text: 'O carrossel pausa quando recebe o mouse ou o foco, responde às setas do teclado e ao toque, e respeita prefers-reduced-motion. A busca é um combobox com lista de resultados, e os slides recebem rótulos ARIA.',
        },
        {
          term: 'O que ficou para depois',
          text: 'Estão fora do escopo atual o carrinho com vários itens, contas de usuário que salvam dados, o histórico de compras e avaliações reais. Hoje o pagamento é de um jogo por vez, em modo de teste, e login, carrinho e favoritos são apenas visuais.',
        },
      ],
    },
    media: {
      tone: 'ink',
      ratio: '16 / 9',
      ratioMobile: '16 / 9',
      cover: 'projetos/iara-games/capa.webp',
      coverRatio: '16 / 9',
      coverAlt:
        'Primeira tela da home da IARA: barra de navegação com busca, categorias e os botões Entrar e Criar conta; o carrossel Em destaque e recomendados, com Chroma Squad em primeiro plano, e o início dos destaques logo abaixo.',
      coverCredit:
        'Capas e imagens dos jogos: respectivos estúdios. Usadas apenas para mostrar a interface do projeto acadêmico.',
      galleryNote: 'Capturas do projeto em execução, no desktop (1440 px) e no celular (390 px).',
      gallery: [
        {
          src: 'projetos/iara-games/tela-vitrines.webp',
          alt: 'Vitrines da home da IARA: a faixa Sugestões, com cinco jogos em cartões com capa, nome e preço, e a faixa Em Alta, com a capa de A.I.L.A. em destaque, o preço, uma sinopse e o botão Ver jogo.',
          caption: 'Vitrines da home. Sugestões em fileira de cartões e Em Alta com um jogo em destaque.',
          span: 'full',
          ratio: '1440 / 1189',
          ratioMobile: '1440 / 1189',
        },
        {
          src: 'projetos/iara-games/tela-sobre.webp',
          alt: 'Seção Sobre a IARA: o título "Todo jogo aqui tem sotaque brasileiro", um texto de apresentação e os botões Explorar o catálogo e Ver destaques, ao lado de cinco capas de jogos em faixas verticais, com a terceira, Mullet MadJack, aberta.',
          caption: 'Sobre a IARA. Cinco capas em faixas verticais, com a selecionada aberta.',
          span: 'full',
          ratio: '1440 / 738',
          ratioMobile: '1440 / 738',
        },
        {
          src: 'projetos/iara-games/tela-catalogo.webp',
          alt: 'Catálogo da IARA: barra de navegação com busca, filtros por seção (Todos, Sugestões, Em Alta, Adicionados Recentemente, Mais Comprados, Melhores Avaliados, Ofertas e Gratuitos), o título Todos os jogos e duas fileiras de cinco jogos, cada um com capa, nome e preço.',
          caption: 'Catálogo. Filtros por seção no alto; as categorias ficam no menu da navegação.',
          span: 'full',
          ratio: '1440 / 992',
          ratioMobile: '1440 / 992',
        },
        {
          src: 'projetos/iara-games/tela-jogo.webp',
          alt: 'Página do jogo Dandy Ace: a capa à esquerda; à direita, título, tags, desenvolvedora Mad Mimic, nota e número de avaliações, descrição curta, galeria de imagens, o botão Comprar R$ 30,00 e os botões de carrinho e favorito; abaixo, as abas Detalhes e Avaliações.',
          caption: 'Página do jogo, montada em React a partir do id na URL.',
          span: 'full',
          ratio: '1440 / 940',
          ratioMobile: '1440 / 940',
        },
        {
          src: 'projetos/iara-games/mobile-menu.webp',
          alt: 'Menu da IARA no celular, aberto sobre a home: links Loja, Comunidade, Sobre e Suporte, campo de busca e o seletor Categorias expandido, com Ação, Aventura, RPG e Estratégia e o link Ver todos os jogos.',
          caption: 'Menu no celular, com as categorias abertas.',
          span: 'half',
          fit: 'phone',
          ratio: '780 / 1688',
          ratioMobile: '780 / 1688',
        },
        {
          src: 'projetos/iara-games/mobile-jogo.webp',
          alt: 'Página do Dandy Ace no celular, do botão Voltar ao botão de compra: capa, título, tags, desenvolvedora e nota, descrição, galeria de imagens em grade e o botão Comprar R$ 30,00 com os botões de carrinho e favorito.',
          caption: 'Página do jogo no celular, até o botão de compra.',
          span: 'half',
          fit: 'phone',
          ratio: '780 / 2714',
          ratioMobile: '780 / 2714',
        },
      ],
    },
    links: {
      demo: 'https://iaragames.onrender.com',
      repo: 'https://github.com/Murilo-Sousa/IaraGames',
    },
  },
  {
    slug: 'selene',
    number: '02',
    name: 'SELENE',
    category: 'Front-end Development / Dashboard Design',
    context: 'Projeto Selene, FIAP',
    status: 'Publicado',
    summary:
      'Painel de monitoramento de uma colônia lunar fictícia, com telemetria simulada e identidade visual inspirada em terminais CRT.',
    overview: [
      'SELENE é um painel de monitoramento de uma colônia lunar fictícia, a estação SOL-142. Energia, água, atmosfera, alimentos, alertas e satélites ocupam sete telas, com a estética de um terminal CRT: fundo preto, verde de fósforo e painéis de borda fina.',
      'A cor tem função. Verde é normal, âmbar é atenção e vermelho é crítico, e o estado de cada painel é calculado a partir de limiares. Os dados são simulados no navegador, mas se comportam como os de uma base de verdade: o reator oscila e estabiliza, o CO₂ sobe e normaliza, e cada alerta nasce de uma condição e é resolvido quando ela some.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'Font Awesome'],
    techLabel: null,
    techNote:
      'Sem framework e sem etapa de build. Os gráficos são desenhados em canvas, sem biblioteca. Ícones: Font Awesome 6.5.1. Fontes: Bowlby One e Geom, do Google Fonts.',
    contribution: [
      'Design de UX/UI do dashboard de monitoramento',
      'Criação da identidade visual do sistema',
      'Prototipação no Figma',
      'Construção do código em HTML, CSS e JavaScript',
    ],
    contributionNote: 'Atuação como Designer de UX/UI e Product Designer no Projeto Selene, da FIAP.',
    characteristics: {
      title: 'Características',
      items: [
        'Sete telas: visão geral, energia, água, atmosfera, alimentos, alertas e satélites',
        'Um único estado simulado, atualizado a cada 2 segundos, alimenta todas as telas',
        'Status calculado por limiares (normal, atenção, crítico), com cor e também glifo, bloco invertido e pulso',
        'Alertas com ciclo de vida (ativo e resolvido), filtros por categoria, avisos na tela e contador no menu',
        'Botão AO VIVO / PAUSADO para congelar a simulação',
        'Gráficos de linha e de barras em canvas, com animação e tooltip',
        'Barra de navegação inferior em telas pequenas',
        'Animações do efeito CRT desligadas com prefers-reduced-motion',
      ],
      note: 'Os dados são simulados no navegador. O projeto não tem back-end nem fonte de dados real.',
    },
    process: {
      title: 'Decisões de projeto',
      items: [
        {
          term: 'Uma fonte de verdade',
          text: 'Todo o estado da colônia vive em um único objeto, em telemetry.js, e as sete telas leem dele. Na primeira versão alguns números eram digitados à mão e se contradiziam entre telas, como o consumo de água e a autonomia de alimentos. Na v2 passaram a ser calculados a partir do mesmo estado.',
        },
        {
          term: 'Estado derivado, não escrito',
          text: 'O status de cada módulo vem de limiares, como reserva de água abaixo de 50% (atenção) e abaixo de 35% (crítico). Os alertas nascem dessas condições, então um módulo crítico sempre tem um alerta ativo.',
        },
        {
          term: 'Cor com significado, nunca sozinha',
          text: 'Verde, âmbar e vermelho são aplicados redefinindo uma única variável CSS dentro de [data-state], e qualquer componente herda a cor. Como a cor não deve ser o único sinal, o estado também aparece em glifo (▲ e ✖), em bloco invertido e em pulso.',
        },
        {
          term: 'Efeito CRT com limite',
          text: 'Scanlines, vinheta, varredura e uma sequência de boot dão o clima de terminal. As animações são desligadas com prefers-reduced-motion, e o boot pode ser pulado com qualquer tecla ou clique.',
        },
        {
          term: 'Menos dependência',
          text: 'O Chart.js foi substituído por gráficos em canvas próprios, de linha e de barras, que herdam a cor do estado do painel.',
        },
        {
          term: 'O que ficou para depois',
          text: 'Estão registrados como pendência um mapa da base em SVG, uma grade fluida nas páginas internas e uma escala tipográfica unificada. Font Awesome e Google Fonts ainda carregam por CDN.',
        },
      ],
    },
    media: {
      tone: 'ink',
      ratio: '16 / 9',
      ratioMobile: '16 / 9',
      cover: 'projetos/selene/capa.webp',
      coverRatio: '16 / 9',
      coverAlt:
        'Painel principal do SELENE, inteiro: câmera da base à esquerda, gráficos de consumo e pressão ao centro, status dos módulos à direita, cartões de energia, água, oxigênio e alimento, temperatura interna, link Terra-Lua e a barra de navegação. Água e o módulo de energia aparecem em vermelho, e agricultura em âmbar.',
      coverCredit:
        'Imagens das câmeras: Overwatch 2, Blizzard Entertainment. Usadas apenas como ambientação do projeto.',
      galleryNote: 'Capturas do projeto em execução, com o estado inicial da simulação.',
      gallery: [
        {
          src: 'projetos/selene/tela-energia.webp',
          alt: 'Tela de energia do SELENE. Anéis de progresso para painéis solares, bateria, reator e consumo total, com o reator em vermelho por causa de uma flutuação; ao lado, a distribuição de consumo por módulo e o histórico de 24 horas.',
          caption: 'Energia. Com o reator em flutuação, só o painel dele fica vermelho; os demais seguem em verde.',
          span: 'full',
          ratio: '21 / 9',
          ratioMobile: '21 / 9',
        },
        {
          src: 'projetos/selene/tela-agua.webp',
          alt: 'Tela de água do SELENE. A reserva, em vermelho, está em 30%; ao lado, reciclagem e extração do solo. Abaixo, os fluxos diários e a qualidade da água, com o cloro livre em atenção.',
          caption: 'Água. Reserva em estado crítico e cloro livre em atenção, cada um com a sua cor e o seu rótulo.',
          span: 'full',
          ratio: '21 / 9',
          ratioMobile: '21 / 9',
        },
        {
          src: 'projetos/selene/tela-alimentos.webp',
          alt: 'Tela de alimentos do SELENE. Painéis de reserva total, produção agrícola e consumo diário, com a produção em âmbar, e a tabela de cultivos ativos do módulo C.',
          caption: 'Alimentos. A produção abaixo da meta deixa o painel e a tabela de cultivos em âmbar.',
          span: 'full',
          ratio: '21 / 9',
          ratioMobile: '21 / 9',
        },
        {
          src: 'projetos/selene/tela-alertas.webp',
          alt: 'Tela de alertas do SELENE. Três painéis de resumo, com críticos em vermelho, atenção em âmbar e informação em verde, e a lista de eventos recentes com filtros por categoria.',
          caption: 'Alertas. Resumo por gravidade e eventos com ciclo de vida: ativo ou resolvido.',
          span: 'full',
          ratio: '21 / 9',
          ratioMobile: '21 / 9',
        },
        {
          src: 'projetos/selene/mobile-alertas.webp',
          alt: 'Tela de alertas do SELENE no celular, inteira: título e botão AO VIVO no topo, cartões de resumo de críticos, atenção e informação, filtros, a lista de eventos recentes e a barra de navegação inferior.',
          caption: 'Alertas no celular. Resumo, filtros, lista de eventos e barra de navegação inferior.',
          span: 'half',
          fit: 'phone',
          ratio: '390 / 1012',
          ratioMobile: '390 / 1012',
        },
        {
          src: 'projetos/selene/mobile-satelites.webp',
          alt: 'Tela de satélites do SELENE no celular, inteira: botões para escolher o satélite, estado do SAT-142 com órbita, altitude, latência e sinal, estatísticas de comunicação, comunicações recentes e a barra de navegação inferior.',
          caption: 'Satélites no celular. Seleção do satélite, estatísticas e comunicações recentes.',
          span: 'half',
          fit: 'phone',
          ratio: '390 / 984',
          ratioMobile: '390 / 984',
        },
      ],
    },
    links: {
      demo: 'https://selene-op70.onrender.com',
      repo: 'https://github.com/Murilo-Sousa/SELENE',
    },
  },
  {
    slug: 'discplayer',
    number: '03',
    name: 'DiscPlayer',
    category: 'Full Stack Development / Web Application',
    context: 'Projeto de portfólio',
    status: 'Publicado',
    summary:
      'Diário e comunidade para quem joga: catálogo de jogos do IGDB, diário com datas, notas e reviews, listas e perfis públicos. React no front-end, Flask e SQLite no back-end.',
    overview: [
      'DiscPlayer é o diário e a comunidade dos seus jogos. A pessoa procura um jogo no catálogo, registra que quer jogar, que está jogando ou que zerou, dá uma nota de 0 a 10, escreve uma review, monta listas e acompanha o que outras pessoas jogam. A ideia vem do Letterboxd, aplicada a videogames.',
      'Os dados dos jogos (nome, capa, gêneros, plataformas e datas) vêm do IGDB. Todo o resto, de contas a reviews, listas e seguidores, pertence à comunidade do próprio DiscPlayer e fica no banco do projeto. O front-end em React conversa com uma API REST em Flask, e o catálogo externo só é consultado pelo servidor.',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'CSS', 'Python', 'Flask', 'SQLite', 'API do IGDB'],
    techLabel: null,
    techNote:
      'React 19 e Vite 7, com CSS próprio (variáveis CSS, sem framework de UI) e um roteador sobre a History API. Flask 3.1, SQLite com SQL puro e migrações numeradas, e waitress como servidor. Testes com pytest, node:test e Playwright, executados no GitHub Actions. Hospedado no plano gratuito do PythonAnywhere. Fontes: TeX Gyre Adventor e Lora.',
    contribution: [
      'Definição do produto e dos requisitos: diário, notas, listas, perfis e comunidade',
      'Direção visual: tema escuro, cor de destaque moderada e tipografia editorial',
      'Revisão das regras do diário e das incoerências do app',
      'Decisão de trocar a fonte de dados da RAWG para o IGDB',
      'Revisão e integração das mudanças por pull requests',
      'Publicação na web, no PythonAnywhere',
    ],
    contributionNote:
      'O código foi desenvolvido com o apoio do Claude, assistente de IA da Anthropic. O histórico do repositório registra essa coautoria nos commits.',
    characteristics: {
      title: 'Características',
      items: [
        'Catálogo com busca por nome, filtros de gênero, plataforma e ano e ordenação, tudo guardado no endereço para poder ser compartilhado',
        'Diário com status de cada jogo, datas de início e término e jogadas anteriores',
        'Notas de 0 a 10, em passos de 0,5, e reviews com aviso de spoilers',
        'Na página do jogo, a média da comunidade e as notas do IGDB em blocos separados, cada um com a origem indicada',
        'Listas públicas e privadas, perfis, seguidores e a seção "Quem você segue jogou"',
        'Retrospectiva do ano, com imagem para compartilhar, e prévia de links com título, descrição e imagem',
        'Filtro de conteúdo adulto aplicado no servidor, em três níveis',
        'Interface escura, responsiva e navegável pelo teclado',
      ],
      note: 'Os jogos vêm do IGDB e todo o resto vem de quem se cadastrou. O projeto tem um comando para criar perfis de exemplo, sempre marcados como "Exemplo".',
    },
    process: {
      title: 'Decisões de projeto',
      items: [
        {
          term: 'Dados de fora, dados de casa',
          text: 'O IGDB fornece os jogos, e o resto é da comunidade. A média das notas daqui e as notas do IGDB aparecem em blocos separados e nunca se misturam. Cada jogo usado no diário ganha uma cópia local mínima, para que o diário continue funcionando se o IGDB sair do ar.',
        },
        {
          term: 'O IGDB só pelo servidor',
          text: 'As credenciais ficam no back-end, que também respeita o limite de 4 consultas por segundo do IGDB, esperando a vez, e guarda as respostas em cache. Se o IGDB falhar, o servidor usa a última cópia guardada em vez de derrubar a página.',
        },
        {
          term: 'Trocar de serviço sem perder o diário',
          text: 'O projeto começou com outro serviço de dados, a RAWG, e migrou para o IGDB. A migração não apaga nada: os jogos já guardados continuam no diário, nas listas e nas reviews com o nome e a capa que tinham, e a página deles deixa de abrir, em vez de mostrar por engano outro jogo.',
        },
        {
          term: 'Regras que protegem o diário',
          text: 'Um jogo que ainda não saiu só pode ir para "Quero jogar", e dar nota exige ter o jogo no diário e já tê-lo começado. O ranking "Mais bem avaliados" só mostra um jogo com notas de três pessoas diferentes, para não anunciar o melhor da comunidade a partir de uma única nota.',
        },
        {
          term: 'Segurança e testes',
          text: 'Senhas com scrypt, token CSRF com conferência de Origin, lista de origens no CORS, CSP e limite de requisições. Há mais de 800 testes automatizados, entre back-end, front-end e navegador, rodando no GitHub Actions. A integração com o IGDB de verdade foi conferida em 08/11/2026.',
        },
        {
          term: 'O que ficou para depois',
          text: 'Estão registrados como pendência a recuperação de senha por e-mail, a moderação de reviews, a edição de jogadas anteriores e o suporte a mais de um idioma. O projeto roda em uma única instância, com SQLite e cache na memória.',
        },
      ],
    },
    media: {
      tone: 'ink',
      ratio: '16 / 9',
      ratioMobile: '16 / 9',
      cover: 'projetos/discplayer/capa.webp',
      coverRatio: '16 / 9',
      coverAlt:
        'Primeira tela do DiscPlayer: barra de navegação com busca e os botões Entrar e Criar conta; o título "O diário de quem joga.", um texto de apresentação, os botões Criar meu diário e Explorar jogos e, à direita, uma grade com as capas dos jogos em alta.',
      coverCredit:
        'Capas dos jogos: IGDB e respectivos estúdios. Usadas apenas para mostrar a interface do projeto.',
      galleryNote: 'Capturas do projeto em execução, no desktop e no celular.',
      gallery: [
        {
          src: 'projetos/discplayer/tela-como-funciona.webp',
          alt: 'Seções da página inicial do DiscPlayer: "Do quero jogar ao zerei", com três etapas (Guarde na fila, Comece a jogar e Conte como foi), e "Veja como o diário funciona", com um disco amarelo fechado, os status Quero jogar, Jogando, Pausado, Zerado e Abandonado e a lista do que cada status libera.',
          caption: 'Página inicial. Cada status do diário libera datas, nota, review e favorito, e o disco fecha conforme o jogo avança.',
          span: 'full',
          ratio: '1896 / 1253',
          ratioMobile: '1896 / 1253',
        },
        {
          src: 'projetos/discplayer/tela-catalogo.webp',
          alt: 'Catálogo do DiscPlayer: o título Jogos com a contagem de jogos, o campo de busca e o botão Filtros, os chips de gênero com Aventura selecionado, o botão Limpar tudo e uma fileira de capas: Grand Theft Auto V, The Witcher 3: Wild Hunt, Portal 2, The Elder Scrolls V: Skyrim, Grand Theft Auto: San Andreas e Portal.',
          caption: 'Catálogo com busca por nome, botão de filtros e filtros rápidos por gênero.',
          span: 'full',
          ratio: '1896 / 905',
          ratioMobile: '1896 / 905',
        },
        {
          src: 'projetos/discplayer/tela-perfil.webp',
          alt: 'Perfil público no DiscPlayer: foto, nome Murilo e @murilo, abas Resumo, Diário, Reviews, Listas, Atividade, Seguidores e Seguindo, quatro números de resumo (6 jogos no diário, 4 zerados em 2026, 6 notas dadas e média 8,75), os favoritos Pokémon Red Version e Red Dead Redemption 2, a review mais recente e os gráficos de jogos por status, zerados por mês e distribuição das notas.',
          caption: 'Perfil. Resumo do diário, favoritos, review mais recente e gráficos.',
          span: 'full',
          fit: 'narrow',
          ratio: '752 / 703',
          ratioMobile: '752 / 703',
        },
        {
          src: 'projetos/discplayer/tela-retrospectiva.webp',
          alt: 'Retrospectiva 2026 de Murilo: o título, o botão Compartilhar, quatro jogos zerados, as contagens de começados, abandonados e jogados de novo e o cartão Jogo de 2026, com Pokémon Red Version, nota 10, zerado em 8 de novembro de 2026.',
          caption: 'Retrospectiva do ano, calculada dos registros do diário, com botão para compartilhar.',
          span: 'full',
          ratio: '1896 / 847',
          ratioMobile: '1896 / 847',
        },
        {
          src: 'projetos/discplayer/mobile-inicio.webp',
          alt: 'Página inicial do DiscPlayer no celular: cabeçalho com o link Entrar, o título O diário de quem joga, o texto de apresentação, os botões Criar meu diário e Explorar jogos, o início da grade de capas e a barra de navegação inferior, com Início, Jogos, Buscar, Listas e Entrar.',
          caption: 'Início no celular, primeira tela, com a barra de navegação inferior.',
          span: 'half',
          fit: 'phone',
          ratio: '602 / 902',
          ratioMobile: '602 / 902',
        },
        {
          src: 'projetos/discplayer/mobile-retrospectiva.webp',
          alt: 'Retrospectiva 2026 no celular: o perfil Murilo no alto, o título, o botão Compartilhar, quatro jogos zerados, as contagens de começados, abandonados e jogados de novo, o início do cartão Jogo de 2026 e a barra de navegação inferior, com Início, Jogos, Buscar, Listas e Diário.',
          caption: 'Retrospectiva no celular, primeira tela.',
          span: 'half',
          fit: 'phone',
          ratio: '595 / 903',
          ratioMobile: '595 / 903',
        },
      ],
    },
    links: {
      demo: 'https://muh.pythonanywhere.com',
      repo: 'https://github.com/Murilo-Sousa/DiscPlayer',
    },
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};
