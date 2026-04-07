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
    async function initGsap() {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Hero entrance
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-logo', { y: -60, opacity: 0, duration: 1, ease: 'back.out(1.7)' })
        .from('.hero-tagline', { y: 30, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')
        .from('.hero-cta', { scale: 0.8, opacity: 0, duration: 0.5, ease: 'back.out(2)' }, '-=0.2')

      // Section titles
      gsap.utils.toArray('.section-title').forEach(el => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })

      // Menu cards
      ScrollTrigger.batch('.menu-card', {
        onEnter: batch => gsap.to(batch, {
          opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2.out', overwrite: true
        }),
        start: 'top 88%'
      })
      gsap.set('.menu-card', { opacity: 0, y: 40 })

      // Review cards
      ScrollTrigger.batch('.review-card', {
        onEnter: batch => gsap.to(batch, {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', overwrite: true
        }),
        start: 'top 88%'
      })
      gsap.set('.review-card', { opacity: 0, y: 30 })

      // Contact cards
      ScrollTrigger.batch('.contact-card', {
        onEnter: batch => gsap.to(batch, {
          opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out', overwrite: true
        }),
        start: 'top 88%'
      })
      gsap.set('.contact-card', { opacity: 0, y: 30 })
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
