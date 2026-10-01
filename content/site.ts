/**
 * Conteúdo institucional da Patas & Asas.
 * Tudo aqui vem das informações públicas do perfil @pataseasas.
 * Não adicione números, prêmios, anos de experiência ou especialidades sem confirmação dos proprietários.
 */

export const site = {
  name: 'Patas & Asas',
  legalLine: 'Pet Shop e Clínica Veterinária',
  tagline: 'O lugar preferido do seu pet!',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pataseasas.com.br',
  whatsapp: {
    number: '5522998639400',
    display: '(22) 99863-9400',
  },
  instagram: {
    handle: '@pataseasas',
    url: 'https://www.instagram.com/pataseasas/',
  },
  address: {
    street: 'Avenida Alberto Lamego, 793',
    short: 'Av. Alberto Lamego, 793',
    city: 'Campos dos Goytacazes',
    state: 'RJ',
    postalCode: '28015-621',
    country: 'BR',
  },
  vets: [
    { name: 'Dra. Thais Fontana', role: 'Médica veterinária' },
    { name: 'Dra. Mariana Fontana', role: 'Médica veterinária' },
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city} - ${site.address.state}, ${site.address.postalCode}`;

export const maps = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`,
};

/** Mensagens do WhatsApp por origem: cada CTA abre a conversa já com o assunto certo. */
export const whatsappMessages = {
  geral: 'Olá! Vim pelo site da Patas & Asas e gostaria de mais informações.',
  agendar: 'Olá! Vim pelo site da Patas & Asas e gostaria de agendar um atendimento.',
  clinica: 'Olá! Vim pelo site da Patas & Asas e gostaria de agendar atendimento veterinário.',
  banho: 'Olá! Vim pelo site da Patas & Asas e gostaria de saber sobre banho e tosa.',
  hotel: 'Olá! Gostaria de informações sobre o Hotel Pet da Patas & Asas.',
  taxi: 'Olá! Vim pelo site da Patas & Asas e gostaria de consultar o Taxi Dog.',
  farmacia: 'Olá! Vim pelo site da Patas & Asas e gostaria de consultar produtos da farmácia e do pet shop.',
  petiscos: 'Olá! Vim pelo site da Patas & Asas e gostaria de saber sobre os petiscos e snacks.',
  avaliacao: 'Olá! Sou cliente da Patas & Asas e gostaria de deixar minha avaliação.',
} as const;

export type WhatsappTopic = keyof typeof whatsappMessages;

export const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clinica', label: 'Clínica' },
  { href: '#banho-e-tosa', label: 'Banho & Tosa' },
  { href: '#hotel', label: 'Hotel Pet' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const;
