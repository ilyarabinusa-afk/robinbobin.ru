import puppeteer from 'puppeteer'

const url = process.argv[2] || 'http://localhost:3333'
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

async function wait(ms) { return new Promise(r => setTimeout(r, ms)) }

// Desktop
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url + '?nogsap', { waitUntil: 'networkidle2', timeout: 15000 })
await wait(3000) // wait for images to load

await page.screenshot({ path: 'screenshot-desktop-top.png', fullPage: false })
console.log('✅ desktop-top')

await page.evaluate(() => document.querySelector('#menu').scrollIntoView({ block: 'start' }))
await wait(1000)
await page.screenshot({ path: 'screenshot-desktop-menu.png', fullPage: false })
console.log('✅ desktop-menu')

await page.evaluate(() => document.querySelector('#about').scrollIntoView({ block: 'start' }))
await wait(500)
await page.screenshot({ path: 'screenshot-desktop-about.png', fullPage: false })
console.log('✅ desktop-about')

await page.evaluate(() => document.querySelector('#reviews').scrollIntoView({ block: 'start' }))
await wait(500)
await page.screenshot({ path: 'screenshot-desktop-reviews.png', fullPage: false })
console.log('✅ desktop-reviews')

await page.evaluate(() => document.querySelector('#contacts').scrollIntoView({ block: 'start' }))
await wait(500)
await page.screenshot({ path: 'screenshot-desktop-contacts.png', fullPage: false })
console.log('✅ desktop-contacts')

// Mobile
await page.setViewport({ width: 390, height: 844 })
await page.goto(url + '?nogsap', { waitUntil: 'networkidle2', timeout: 15000 })
await wait(3000)
await page.screenshot({ path: 'screenshot-mobile-top.png', fullPage: false })
console.log('✅ mobile-top')

await page.evaluate(() => document.querySelector('#menu').scrollIntoView({ block: 'start' }))
await wait(1000)
await page.screenshot({ path: 'screenshot-mobile-menu.png', fullPage: false })
console.log('✅ mobile-menu')

await browser.close()
console.log('\nDone!')
