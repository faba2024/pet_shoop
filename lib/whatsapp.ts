import { site, whatsappMessages, type WhatsappTopic } from '@/content/site';

/** Link do WhatsApp com a mensagem da origem do clique. */
export function whatsappLink(topic: WhatsappTopic = 'geral') {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(whatsappMessages[topic])}`;
}
