import { useState, useEffect } from 'react'
import { useCart } from './hooks/useCart'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import Cart from './components/Cart'
import OrderModal from './components/OrderModal'
import OrderSuccess from './components/OrderSuccess'
import Footer from './components/Footer'

function App() {
  const cart = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  useEffect(() => {
    // Skip animations for screenshot mode
    if (window.location.search.includes('nogsap')) return

    async function initGsap() {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Hero entrance — dramatic staggered reveal
      const heroTl = gsap.timeline({ delay: 0.2 })
      heroTl
        .from('.hero-blob', { scale: 0, opacity: 0, duration: 1.5, stagger: 0.2, ease: 'power2.out' })
        .from('.hero-logo', { y: -100, opacity: 0, duration: 1.2, ease: 'back.out(1.7)' }, 0.3)
        .from('.hero-float', { opacity: 0, scale: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(2)' }, 0.6)
        .from('.hero-tagline', { y: 40, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out' }, '-=0.5')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' }, '-=0.3')

      // Floating food icons — continuous slow movement
      gsap.utils.toArray('.hero-float').forEach((el, i) => {
        gsap.to(el, {
          y: `${(i % 2 === 0 ? -1 : 1) * 20}`,
          rotation: (i % 2 === 0 ? 5 : -5),
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      })

      // Background blobs — slow drift
      gsap.utils.toArray('.hero-blob').forEach((el, i) => {
        gsap.to(el, {
          x: `${(i % 2 === 0 ? 1 : -1) * 30}`,
          y: `${(i % 2 === 0 ? -1 : 1) * 20}`,
          duration: 6 + i * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      })

      // Section titles — slide up with scale
      gsap.utils.toArray('.section-title').forEach(el => {
        gsap.from(el, {
          y: 60, opacity: 0, scale: 0.9, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })

      // Section subtitles
      gsap.utils.toArray('.section-sub').forEach(el => {
        gsap.from(el, {
          y: 30, opacity: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        })
      })

      // Category tabs — fade in from left
      gsap.from('.category-tabs', {
        x: -40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.category-tabs', start: 'top 88%' }
      })

      // Menu cards — staggered batch with scale (use gsap.from so visible by default)
      gsap.utils.toArray('.menu-card').forEach(card => {
        gsap.from(card, {
          opacity: 0, y: 60, scale: 0.9, duration: 0.7, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: card, start: 'top 92%' }
        })
      })

      // Review cards — staggered with rotation
      gsap.utils.toArray('.review-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 50, rotation: -2, duration: 0.7, ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })

      // Contact cards — pop in with scale
      gsap.utils.toArray('.contact-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 40, scale: 0.85, duration: 0.6, ease: 'back.out(1.5)',
          delay: i * 0.12,
          scrollTrigger: { trigger: card, start: 'top 90%' }
        })
      })

      // About section — split reveal (text from left, image from right)
      const aboutSection = document.querySelector('#about')
      if (aboutSection) {
        gsap.from('#about .order-2, #about .order-1:first-child', {
          x: -60, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: aboutSection, start: 'top 75%' }
        })
        gsap.from('#about .order-1:last-child, #about .order-2:last-child', {
          x: 60, opacity: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: aboutSection, start: 'top 75%' }
        })
      }

      // Footer — fade up
      gsap.from('footer', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: 'footer', start: 'top 95%' }
      })

      // Parallax on hero — subtle scroll movement
      gsap.to('.hero-logo', {
        yPercent: 30, ease: 'none',
        scrollTrigger: { trigger: '.hero-logo', start: 'top top', end: 'bottom top', scrub: true }
      })
    }

    async function initLenis() {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        const lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
        requestAnimationFrame(raf)
      } catch { /* Lenis optional */ }
    }

    initGsap()
    initLenis()
  }, [])

  const handleOrder = () => {
    setCartOpen(false)
    setOrderOpen(true)
  }

  const handleOrderSuccess = () => {
    setOrderOpen(false)
    setSuccessOpen(true)
    cart.clearCart()
  }

  return (
    <>
      <Header totalItems={cart.totalItems} onCartClick={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Menu onAddItem={cart.addItem} />
        <About />
        <Reviews />
        <Contacts />
      </main>

      <Footer />

      <Cart
        items={cart.items}
        totalPrice={cart.totalPrice}
        onUpdateQty={cart.updateQty}
        onRemove={cart.removeItem}
        onOrder={handleOrder}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      <OrderModal
        items={cart.items}
        totalPrice={cart.totalPrice}
        isOpen={orderOpen}
        onClose={() => setOrderOpen(false)}
        onSuccess={handleOrderSuccess}
      />

      <OrderSuccess
        isOpen={successOpen}
        onClose={() => setSuccessOpen(false)}
      />
    </>
  )
}

export default App
