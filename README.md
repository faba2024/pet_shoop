# Patas & Asas — site institucional

Site institucional da **Patas & Asas · Pet Shop e Clínica Veterinária** (Av. Alberto Lamego, 793 · Campos dos Goytacazes · RJ).
Demonstração comercial em Next.js 16 + TypeScript + Tailwind CSS 4.

## Rodar

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
npm run test:e2e       # Playwright em 375, 390, 430, 768, 1024, 1440 e 1920 px
```

Para gerar URLs absolutas no OpenGraph, no sitemap e no schema.org, defina `NEXT_PUBLIC_SITE_URL` (veja `.env.example`).

## Conceito

**"O lugar preferido do seu pet", tratado como revista.** A marca original é alegre (rosa pink, amarelo, ciano, osso cartunesco). Em vez de copiar o cartum, o site pega a *energia* do logo e traduz em linguagem editorial:

- **Abertura em formato de cartaz.** Um retrato de cão sobre fundo rosé que continua o estúdio da foto. O nome *Patas & Asas* atravessa a base como o título de uma revista, e um selo circular gira devagar com o texto "Campos dos Goytacazes · RJ".
- **Capítulos numerados (N.º 01 a 09).** Cada serviço tem uma página com ritmo próprio, em vez de uma fileira de cards iguais:

  | Capítulo | Composição |
  |---|---|
  | Serviços | Destaque grande para a clínica, dois intermediários e um índice editorial com miniaturas |
  | Clínica | Coluna fixa com os quatro cuidados e as veterinárias |
  | Banho & Tosa | Polaroides de clientes reais e o "ritual" passo a passo |
  | Hotel | Seção noturna, com foto em arco |
  | Taxi Dog | Bloco amarelo com um trajeto que se desenha da casa até a loja |
  | Farmácia | Prateleira com cinco itens em alturas alternadas |

- **Fotos reais da casa** (Instagram) aparecem onde a prova importa: resultados do banho e tosa, a Dra. Mariana, a equipe com os pets.

### Paleta
| Token | Cor | Uso |
|---|---|---|
| `paper` | `#f7f1e8` | fundo principal (creme) |
| `cream` | `#fffbf5` | áreas de respiro |
| `ink` | `#251a2c` | texto e seção do hotel (ameixa quase preta, mais quente que preto) |
| `pink` | `#e3007f` | rosa **amostrado do logo** — só em CTA, ênfase em itálico e selo |
| `pink-deep` | `#b3005f` | rosa para texto pequeno (contraste AA) |
| `rose` | `#cda7b6` | palco do hero (amostrado da fotografia) |
| `blush` | `#f8e4ec` | fundo do capítulo Banho & Tosa |
| `sun` | `#f6b81c` | amarelo da marca: Taxi Dog e detalhes do hotel |
| `sky` | `#1fb5cc` | ciano da marca: pontos de detalhe na clínica |

### Tipografia
- **Fraunces** (serifa variável com eixo óptico) nos títulos. O itálico carrega a emoção ("da *família*", "*amor*").
- **Manrope** na interface e nos textos corridos.
- Rótulos em versalete espaçado (`.label`) e numeração em itálico ("N.º 02").
- As fontes estão em `app/fonts` e são servidas pelo próprio site via `next/font/local`, sem depender do Google em tempo de execução.

### Espaçamento
- Grade de 12 colunas.
- Contêiner máximo de 90 rem.
- Margens laterais de 20, 32 e 48 px.
- Respiro vertical das seções com `clamp(5rem, 10vw, 9rem)`.

### Motion
- **Abertura:** as linhas do título sobem por trás de uma máscara e o masthead entra logo depois.
- **Scroll:** revelação com escalonamento por meio de um único `IntersectionObserver` (`components/reveal-root.tsx`).
- **Profundidade:** paralaxe muito leve na foto do hero.
- **Taxi Dog:** a rota se desenha quando entra na tela.
- **Menu mobile:** cortina com itens escalonados.
- **Microinterações:** zoom suave nas fotos, seta que avança nos CTAs e sublinhado que cresce.
- **Acessibilidade:** tudo é desligado com "reduzir movimento".

## Arquitetura
```
app/            layout (fontes, metadata, JSON-LD), page, sitemap, robots, manifest, ícones, OG
components/     uma seção por arquivo + Photo, SiteHeader, WhatsappDock, Seal, Parallax
content/        site.ts (dados reais e mensagens de WhatsApp), reviews.ts, _images.json
lib/            whatsapp.ts (links por origem), images.ts
public/images/  fotos otimizadas (WebP); next/image gera AVIF/WebP responsivos
e2e/            testes Playwright
docs/           créditos das fotos
```

- **WhatsApp contextual:** cada CTA abre o WhatsApp com a mensagem da sua origem (`content/site.ts → whatsappMessages`). O botão flutuante só aparece depois do hero, troca o assunto conforme a seção visível e abre uma lista de assuntos.
- **SEO:** metadata completa, OpenGraph com imagem própria (`app/opengraph-image.jpg`), `sitemap.xml`, `robots.txt`, manifest e JSON-LD `VeterinaryCare` + `PetStore` com endereço, telefone, Instagram e serviços.

## Conteúdo: o que é real e o que falta
- **Informações reais (do perfil @pataseasas):** nome, slogan, serviços, veterinárias, endereço, CEP, WhatsApp e Instagram.
- **Nada foi inventado:** o site não tem números, anos de experiência, especialidades médicas nem depoimentos inventados.
- **Avaliações:** a lista em `content/reviews.ts` está vazia de propósito. Enquanto não houver avaliações reais e autorizadas, o site mostra um convite para o cliente avaliar.
- **Fotos reais:** as fotos de clientes e da equipe vieram de prints do Instagram e estão em resolução baixa. Peça os originais aos proprietários.
- **Fotos de banco de imagens:** as demais são do Unsplash (ilustrativas, licença livre) e estão creditadas em `docs/CREDITOS-FOTOS.md`.
- **Dra. Thais Fontana:** o espaço para o retrato dela está pronto. Salve `public/images/dra-thais.webp` e troque o bloco "Retrato em breve" em `components/clinic.tsx`.
- **Feed do Instagram:** hoje é uma prévia com cinco fotos fixas. Para virar um feed automático, use a Instagram Graph API (instruções em `components/instagram.tsx`).
- **Para confirmar com os proprietários:** horário de funcionamento (não informado, por isso não aparece) e os bairros atendidos pelo Taxi Dog.
