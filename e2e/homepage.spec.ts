import { test, expect } from '@playwright/test'

test('Homepage - Albrecht Tech', async ({ page }) => {
  // Configurar timeout mais longo se necessário
  test.setTimeout(30_000)

  // Acessar a página inicial
  const response = await page.goto('https://albrechttech.com.br')
  
  // Verificar se a resposta HTTP foi bem sucedida
  expect(response?.status()).toBeLessThan(400)
  
  // Verificar título da página
  await expect(page).toHaveTitle('Create Next App')
  
  // Verificar elementos importantes
  await expect(page.locator('h1')).toHaveText('Albrecht Tech')
  await expect(page.locator('p')).toContainText('Soluções em Automação com IA')
  
  // Verificar estrutura básica
  await expect(page.locator('main')).toBeVisible()
  await expect(page.locator('footer')).toBeVisible()
  
  // Verificar links importantes
  await expect(page.locator('footer a')).toHaveCount(3)
  
  // Capturar screenshot para referência
  await page.screenshot({ 
    path: 'homepage.jpg',
    fullPage: true
  })
})
