import { test, expect, type Page } from '@playwright/test';

const WA = 'https://wa.me/5522998639400?text=';
const wide = (p: Page) => (p.viewportSize()?.width ?? 1440) >= 1280;

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
});

test('sem rolagem horizontal, sem imagens quebradas e sem erros', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('response', (r) => { if (r.status() >= 400 && !r.url().includes('google.com')) errors.push(`${r.status()} ${r.url()}`); });
  await page.reload();
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 400) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 40)); } scrollTo(0, 0); });
  await page.waitForLoadState('networkidle');
  const r = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const scrollers = [...document.querySelectorAll('.scroller')];
    const visible = (el: Element) => { const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0 && getComputedStyle(el).visibility !== 'hidden' && !el.closest('[inert]'); };
    const over = [...document.querySelectorAll('body *')].filter((el) => visible(el) && !scrollers.some((s) => s.contains(el)) && !el.closest('[aria-hidden="true"]') && el.getBoundingClientRect().right > vw + 1).map((el) => el.tagName + '.' + [...el.classList].slice(0, 3).join('.'));
    const clipped = [...document.querySelectorAll('a.btn, button, h1, h2, h3')].filter((el) => visible(el) && el.scrollWidth > el.clientWidth + 1).map((el) => (el.textContent || '').trim().slice(0, 40));
    const broken = [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.currentSrc || i.src);
    const smallTargets = [...document.querySelectorAll('a.btn, header button, [data-testid=whatsapp-dock] a, [data-testid=whatsapp-dock] button')].filter((el) => visible(el) && el.getBoundingClientRect().height < 40).map((el) => (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30));
    return { pageOverflow: document.documentElement.scrollWidth > vw, over, clipped, broken, smallTargets };
  });
  expect(r.pageOverflow).toBe(false);
  expect(r.over).toEqual([]);
  expect(r.clipped).toEqual([]);
  expect(r.broken).toEqual([]);
  expect(r.smallTargets).toEqual([]);
  expect(errors).toEqual([]);
});

test('hero: título, CTAs e WhatsApp com mensagem', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Cuidado completo para quem faz parte da família.');
  const agendar = page.locator('#inicio').getByRole('link', { name: /Agendar atendimento/i });
  await expect(agendar).toHaveAttribute('href', WA + encodeURIComponent('Olá! Vim pelo site da Patas & Asas e gostaria de agendar um atendimento.'));
  await expect(page.locator('#inicio').getByRole('link', { name: /Falar no WhatsApp/i })).toHaveAttribute('target', '_blank');
});

test('mensagens do WhatsApp variam conforme a origem', async ({ page }) => {
  const msg = async (sel: string) => decodeURIComponent((await page.locator(sel).first().getAttribute('href'))!.split('text=')[1]);
  expect(await msg('#clinica a[data-wa=clinica]')).toContain('agendar atendimento veterinário');
  expect(await msg('#banho-e-tosa a[data-wa=banho]')).toContain('banho e tosa');
  expect(await msg('#hotel a[data-wa=hotel]')).toBe('Olá! Gostaria de informações sobre o Hotel Pet da Patas & Asas.');
  expect(await msg('#taxi-dog a[data-wa=taxi]')).toContain('Taxi Dog');
  expect(await msg('#farmacia a[data-wa=farmacia]')).toContain('farmácia');
});

test('navegação: âncoras levam às seções', async ({ page }) => {
  for (const [label, id] of [['Clínica', 'clinica'], ['Banho & Tosa', 'banho-e-tosa'], ['Hotel Pet', 'hotel'], ['Contato', 'contato']] as const) {
    if (wide(page)) {
      await page.getByRole('navigation', { name: 'Principal' }).getByRole('link', { name: label, exact: true }).click();
    } else {
      await page.locator('button[aria-controls=menu-mobile]').click();
      const menu = page.locator('#menu-mobile');
      await expect(menu).toHaveAttribute('data-open', 'true');
      await menu.getByRole('link', { name: new RegExp(label) }).click();
      await expect(menu).toHaveAttribute('data-open', 'false');
    }
    await expect(page.locator('#' + id)).toBeInViewport({ ratio: 0.1 });
  }
});

test('menu mobile abre, trava a rolagem e fecha com Esc', async ({ page }) => {
  test.skip(wide(page), 'menu completo visível no desktop');
  const btn = page.locator('button[aria-controls=menu-mobile]');
  await btn.click();
  await expect(btn).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#menu-mobile').getByRole('link', { name: /Agendar pelo WhatsApp/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.style.overflow)).toBe('hidden');
  await page.keyboard.press('Escape');
  await expect(btn).toHaveAttribute('aria-expanded', 'false');
});

test('botão flutuante do WhatsApp acompanha a seção e abre os assuntos', async ({ page }) => {
  const dock = page.getByTestId('whatsapp-dock');
  await expect(dock).toHaveCSS('opacity', '0');
  await page.locator('#banho-e-tosa h2').scrollIntoViewIfNeeded();
  await page.evaluate(() => scrollBy(0, 200));
  await expect(dock).toHaveCSS('opacity', '1');
  await expect(dock.getByRole('link').first()).toHaveAttribute('data-wa', 'banho');
  await dock.getByRole('button', { name: 'Escolher outro assunto' }).click();
  await expect(dock.getByRole('menuitem', { name: /Hotel Pet/ })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dock.getByRole('menuitem', { name: /Hotel Pet/ })).toBeHidden();
});

test('links externos abrem em nova aba com rel seguro', async ({ page }) => {
  const ext = page.locator('a[href^="http"]');
  const n = await ext.count();
  expect(n).toBeGreaterThan(10);
  for (let i = 0; i < n; i++) {
    await expect(ext.nth(i)).toHaveAttribute('target', '_blank');
    await expect(ext.nth(i)).toHaveAttribute('rel', /noopener/);
  }
  await expect(page.getByRole('link', { name: /Seguir no Instagram/ })).toHaveAttribute('href', 'https://www.instagram.com/pataseasas/');
  await expect(page.getByRole('link', { name: /Como chegar/ })).toHaveAttribute('href', /google\.com\/maps\/dir/);
});

test('mapa incorporado e dados de contato', async ({ page }) => {
  const map = page.locator('#contato iframe');
  await expect(map).toHaveAttribute('src', /google\.com\/maps.*Alberto%20Lamego%2C%20793/);
  await expect(map).toHaveAttribute('loading', 'lazy');
  await expect(map).toHaveAttribute('title', /Mapa/);
  await expect(page.locator('#contato')).toContainText('(22) 99863-9400');
  await expect(page.locator('#contato')).toContainText('Campos dos Goytacazes');
});

test('sem depoimentos inventados e SEO básico', async ({ page }) => {
  await expect(page.locator('#avaliacoes blockquote')).toHaveCount(0);
  await expect(page).toHaveTitle(/Patas & Asas/);
  await expect(page.locator('meta[name=description]')).toHaveAttribute('content', /Campos|clínica/i);
  const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent())!);
  expect(ld['@type']).toContain('VeterinaryCare');
  expect(ld.address.streetAddress).toBe('Avenida Alberto Lamego, 793');
  const h1 = await page.locator('h1').count();
  expect(h1).toBe(1);
  const noAlt = await page.locator('img:not([alt])').count();
  expect(noAlt).toBe(0);
});
