import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

const errors = []
page.on('console', msg => {
  if (msg.type() === 'error') errors.push(msg.text())
})
page.on('pageerror', err => errors.push(err.message))

await page.goto('http://localhost:3333', { waitUntil: 'networkidle2', timeout: 15000 })
await new Promise(r => setTimeout(r, 3000))

// Check what's visible
const result = await page.evaluate(() => {
  const sections = ['#menu', '#about', '#reviews', '#contacts']
  const info = {}
  for (const sel of sections) {
    const el = document.querySelector(sel)
    info[sel] = el ? { exists: true, height: el.offsetHeight, visible: el.offsetHeight > 0 } : { exists: false }
  }
  // Check menu cards
  const cards = document.querySelectorAll('.menu-card')
  info['menu-cards'] = cards.length
  // Check if images loaded
  const imgs = document.querySelectorAll('img')
  info['images'] = { total: imgs.length, loaded: [...imgs].filter(i => i.complete).length }
  // Check fonts
  info['fonts'] = document.fonts ? [...document.fonts].map(f => `${f.family} ${f.status}`) : 'N/A'
  return info
})

console.log('Page structure:', JSON.stringify(result, null, 2))
if (errors.length) {
  console.log('\nConsole errors:', errors)
} else {
  console.log('\nNo console errors!')
}

await browser.close()
