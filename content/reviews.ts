/**
 * Avaliações de clientes.
 *
 * IMPORTANTE: só publique avaliações REAIS, com autorização do tutor
 * (ex.: copiadas do Google Meu Negócio ou enviadas pelos clientes).
 * Nunca invente depoimentos. Enquanto a lista estiver vazia, o site mostra
 * um convite para o cliente avaliar, sem nenhum depoimento fictício.
 *
 * Formato:
 * { quote: 'Texto exatamente como o cliente escreveu', author: 'Nome (como autorizado)', pet: 'Nome do pet (opcional)', source: 'Google' }
 */
export type Review = { quote: string; author: string; pet?: string; source?: string };

export const reviews: Review[] = [];
