import { test, expect, chromium } from '@playwright/test'

test('Performance Check - Albrecht Tech', async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  try {
    // Configurar timeout
    page.setDefaultTimeout(30000)

    // Acessar a página e esperar carregar completamente
    const startTime = Date.now()
    const response = await page.goto('https://albrechttech.com.br', {
      waitUntil: 'networkidle'
    })
    const loadTime = Date.now() - startTime

    // Verificar se a resposta foi bem sucedida
    expect(response?.status()).toBeLessThan(400)

    // Verificar métricas de performance usando o Playwright
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      const firstPaint = paint.find(entry => entry.name === 'first-paint')
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')

      return {
        loadTime: navigation.loadEventEnd - navigation.startTime,
        firstPaint: firstPaint?.startTime || 0,
        firstContentfulPaint: firstContentfulPaint?.startTime || 0,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.startTime,
        resources: {
          images: performance.getEntriesByType('resource').filter(r => r.initiatorType === 'img').length,
          scripts: performance.getEntriesByType('resource').filter(r => r.initiatorType === 'script').length,
          stylesheets: performance.getEntriesByType('resource').filter(r => r.initiatorType === 'link').length
        }
      }
    })

    // Definir limites aceitáveis
    const PERFORMANCE_THRESHOLDS = {
      loadTime: 3000,      // 3 segundos
      firstPaint: 1000,    // 1 segundo
      firstContentfulPaint: 1500, // 1.5 segundos
      domContentLoaded: 2000,   // 2 segundos
    }

    // Verificar se os tempos estão dentro dos limites
    expect(performanceMetrics.loadTime).toBeLessThan(PERFORMANCE_THRESHOLDS.loadTime)
    expect(performanceMetrics.firstPaint).toBeLessThan(PERFORMANCE_THRESHOLDS.firstPaint)
    expect(performanceMetrics.firstContentfulPaint).toBeLessThan(PERFORMANCE_THRESHOLDS.firstContentfulPaint)
    expect(performanceMetrics.domContentLoaded).toBeLessThan(PERFORMANCE_THRESHOLDS.domContentLoaded)

    // Logar métricas para análise
    console.log('Performance Metrics:')
    console.log(`Load Time: ${performanceMetrics.loadTime}ms`)
    console.log(`First Paint: ${performanceMetrics.firstPaint}ms`)
    console.log(`First Contentful Paint: ${performanceMetrics.firstContentfulPaint}ms`)
    console.log(`DOM Content Loaded: ${performanceMetrics.domContentLoaded}ms`)
    console.log('\nResource Counts:')
    console.log(`Images: ${performanceMetrics.resources.images}`)
    console.log(`Scripts: ${performanceMetrics.resources.scripts}`)
    console.log(`Stylesheets: ${performanceMetrics.resources.stylesheets}`)

    // Capturar screenshot
    await page.screenshot({ 
      path: 'performance-check.jpg',
      fullPage: true
    })
  } finally {
    await browser.close()
  }
})
