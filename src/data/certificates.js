// Certificados de cursos concluídos.
//
// Nome, instituição, carga horária e período vêm dos próprios certificados.
// Os PDFs não são publicados no site porque trazem o número do RG. Em cada grupo, os itens
// ficam do mais recente para o mais antigo.
//
// Campos de cada item:
//   title    nome do curso, como no certificado
//   issuer   quem emitiu o certificado
//   hours    carga horária (nos cursos da Alura, é a estimada pela escola)
//   period   período do curso ou data de conclusão

export const certificateGroups = [
  {
    id: 'design-ux',
    title: 'Design e UX',
    note: 'Cursos online da Alura.',
    items: [
      {
        id: 'figma',
        title: 'Figma: Conhecendo o programa',
        issuer: 'Alura',
        hours: '8 h estimadas',
        period: 'Concluído em 03/08/2026',
      },
      {
        id: 'ux-design',
        title: 'UX Design: Conheça o universo da experiência em produtos digitais',
        issuer: 'Alura',
        hours: '10 h estimadas',
        period: 'Concluído em 22/11/2025',
      },
    ],
  },
  {
    id: 'programacao-tecnologia',
    title: 'Programação e tecnologia',
    note: 'Cursos do SENAI São Paulo.',
    items: [
      {
        id: 'logica',
        title: 'Competência Transversal: Lógica de Programação',
        issuer: 'SENAI São Paulo',
        hours: '14 h',
        period: '11/08/2025 a 28/08/2025',
      },
      {
        id: 'industria-4',
        title: 'Desvendando a Indústria 4.0',
        issuer: 'SENAI São Paulo',
        hours: '20 h',
        period: '17/03/2025 a 29/06/2025',
      },
      {
        id: 'ia',
        title: 'Fluência: Fundamentos da Inteligência Artificial',
        issuer: 'SENAI São Paulo',
        hours: '8 h',
        period: '17/03/2025 a 14/06/2025',
      },
      {
        id: 'web-3',
        title: 'Web 3.0',
        issuer: 'SENAI São Paulo',
        hours: '20 h',
        period: '17/03/2025 a 10/06/2025',
      },
      {
        id: 'lgpd',
        title: 'Privacidade e Proteção de Dados (LGPD)',
        issuer: 'SENAI São Paulo',
        hours: '4 h',
        period: '04/03/2024 a 19/03/2024',
      },
      {
        id: '5g',
        title: 'Desvendando o 5G',
        issuer: 'SENAI São Paulo',
        hours: '15 h',
        period: '04/03/2024 a 19/03/2024',
      },
    ],
  },
  {
    id: 'negocios-trabalho',
    title: 'Negócios, trabalho e sustentabilidade',
    note: 'Cursos do SENAI São Paulo.',
    items: [
      {
        id: 'empreender',
        title: 'Empreender SENAI',
        issuer: 'SENAI São Paulo',
        hours: '20 h',
        period: '17/03/2025 a 12/06/2025',
      },
      {
        id: 'esg',
        title: 'Desvendando o ESG',
        issuer: 'SENAI São Paulo',
        hours: '20 h',
        period: '17/03/2025 a 10/06/2025',
      },
      {
        id: 'seguranca',
        title: 'Competência Transversal: Segurança no Trabalho',
        issuer: 'SENAI São Paulo',
        hours: '14 h',
        period: '04/03/2024 a 19/03/2024',
      },
      {
        id: 'economia-circular',
        title: 'Economia Circular',
        issuer: 'SENAI São Paulo',
        hours: '20 h',
        period: '04/03/2024 a 19/03/2024',
      },
    ],
  },
];

export const certificateCount = certificateGroups.reduce((sum, group) => sum + group.items.length, 0);
