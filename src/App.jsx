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

      // Hero — only continuous animations via GSAP (entrance via CSS @keyframes)

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
    }

    // Scroll reveal via IntersectionObserver (reliable, no GSAP dependency)
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }

    // Add reveal class to animatable elements
    function markRevealElements() {
      const selectors = [
        '.section-title', '.section-sub', '.category-tabs',
        '.menu-card', '.review-card', '.contact-card',
        '#about > div > div', 'footer'
      ]
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach((el, i) => {
          el.classList.add('reveal')
          el.style.transitionDelay = `${i * 0.08}s`
        })
      })
    }

    markRevealElements()
    initScrollReveal()

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
