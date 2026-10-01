import { defineConfig, devices } from '@playwright/test';

const sizes = [
  { name: '375', width: 375, height: 812, mobile: true },
  { name: '390', width: 390, height: 844, mobile: true },
  { name: '430', width: 430, height: 932, mobile: true },
  { name: '768', width: 768, height: 1024, mobile: true },
  { name: '1024', width: 1024, height: 768, mobile: false },
  { name: '1440', width: 1440, height: 900, mobile: false },
  { name: '1920', width: 1920, height: 1080, mobile: false },
];
const baseURL = process.env.E2E_BASE_URL || 'http://localhost:3000';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.e2e.ts',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL, locale: 'pt-BR', trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: sizes.map((s) => ({ name: s.name, use: { ...devices['Desktop Chrome'], viewport: { width: s.width, height: s.height }, isMobile: s.mobile, hasTouch: s.mobile } })),
  webServer: process.env.E2E_BASE_URL ? undefined : { command: 'npm run build && npm run start', url: baseURL, reuseExistingServer: true, timeout: 240_000 },
});
