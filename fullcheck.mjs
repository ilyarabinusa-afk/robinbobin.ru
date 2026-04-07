import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })

// Collect errors
const errors = []
page.on('pageerror', err => errors.push(err.message))
page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()) })

// Load WITH animations
await page.goto('http://localhost:3333', { waitUntil: 'networkidle2', timeout: 15000 })
await new Promise(r => setTimeout(r, 5000))

// Slowly scroll down entire page to trigger all ScrollTriggers
await page.evaluate(async () => {
  const totalHeight = document.body.scrollHeight
  const step = 300
  for (let y = 0; y < totalHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise(r => setTimeout(r, 200))
  }
})
await new Promise(r => setTimeout(r, 2000))

// Now screenshot each section
await page.evaluate(() => window.scrollTo(0, 0))
await new Promise(r => setTimeout(r, 500))
await page.screenshot({ path: 'full-hero.png' })
console.log('✅ hero')

await page.evaluate(() => document.querySelector('#menu').scrollIntoView({ block: 'start' }))
await new Promise(r => setTimeout(r, 1000))
await page.screenshot({ path: 'full-menu.png' })
console.log('✅ menu')

await page.evaluate(() => document.querySelector('#about').scrollIntoView({ block: 'start' }))
await new Promise(r => setTimeout(r, 1000))
await page.screenshot({ path: 'full-about.png' })
console.log('✅ about')

await page.evaluate(() => document.querySelector('#reviews').scrollIntoView({ block: 'start' }))
await new Promise(r => setTimeout(r, 1000))
await page.screenshot({ path: 'full-reviews.png' })
console.log('✅ reviews')

await page.evaluate(() => document.querySelector('#contacts').scrollIntoView({ block: 'start' }))
await new Promise(r => setTimeout(r, 1000))
await page.screenshot({ path: 'full-contacts.png' })
console.log('✅ contacts')

if (errors.length) console.log('\nErrors:', errors)
else console.log('\nNo errors!')

await browser.close()
