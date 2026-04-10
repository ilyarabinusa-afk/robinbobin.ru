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
import ScrollToTop from './components/ScrollToTop'
import FloatingCart from './components/FloatingCart'
import { WaveDivider, FoodDivider, DotDivider } from './components/SectionDivider'

function App() {
  const cart = useCart()
  const [cartOpen, setCartOpen] = useState(false)
  const [orderOpen, setOrderOpen] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  useEffect(() => {
    if (window.location.search.includes('nogsap')) return

    async function initGsap() {
      const gsap = (await import('gsap')).default
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      // Floating food icons — continuous
      gsap.utils.toArray('.hero-float').forEach((el, i) => {
        gsap.to(el, {
          y: `${(i % 2 === 0 ? -1 : 1) * 20}`,
          rotation: (i % 2 === 0 ? 5 : -5),
          duration: 3 + i * 0.5,
          repeat: -1, yoyo: true, ease: 'sine.inOut'
        })
      })

      // Background blobs — slow drift
      gsap.utils.toArray('.hero-blob').forEach((el, i) => {
        gsap.to(el, {
          x: `${(i % 2 === 0 ? 1 : -1) * 30}`,
          y: `${(i % 2 === 0 ? -1 : 1) * 20}`,
          duration: 6 + i * 2,
          repeat: -1, yoyo: true, ease: 'sine.inOut'
        })
      })

      // Hero parallax: fade out + scale down + move up on scroll
      const heroSection = document.querySelector('.hero-section')
      if (heroSection) {
        gsap.to('.hero-content', {
          yPercent: -20,
          scale: 0.9,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
          }
        })
        // Hero background gradient shift
        gsap.to(heroSection, {
          backgroundPosition: '50% 100%',
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        })
      }

      // Parallax on section images/mascots
      gsap.utils.toArray('.parallax-slow').forEach(el => {
        gsap.to(el, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
        })
      })

      // Header bg on scroll
      ScrollTrigger.create({
        start: 100,
        onEnter: () => document.querySelector('header')?.classList.add('scrolled'),
        onLeaveBack: () => document.querySelector('header')?.classList.remove('scrolled'),
      })
    }

    // Scroll reveal via IntersectionObserver
    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.1 })

      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate').forEach(el => observer.observe(el))
    }

    // Mark elements for reveal
    function markRevealElements() {
      // Standard fade-up
      document.querySelectorAll('.section-title, .section-sub, .category-tabs, footer').forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${i * 0.05}s`
      })

      // Cards with stagger
      document.querySelectorAll('.menu-card').forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${i * 0.1}s`
      })
      document.querySelectorAll('.review-card').forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${i * 0.08}s`
      })
      document.querySelectorAll('.contact-card').forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${i * 0.12}s`
      })

      // About — left/right split
      const aboutCols = document.querySelectorAll('#about > div > div > div')
      if (aboutCols[0]) aboutCols[0].classList.add('reveal-left')
      if (aboutCols[1]) aboutCols[1].classList.add('reveal-right')

      // Stat cards
      document.querySelectorAll('.stat-card').forEach((el, i) => {
        el.classList.add('reveal')
        el.style.transitionDelay = `${i * 0.1}s`
      })

      // Dividers — scale pop
      document.querySelectorAll('.food-divider span, .dot-divider > div').forEach((el, i) => {
        el.classList.add('reveal-scale')
        el.style.setProperty('--i', i)
        el.style.transitionDelay = `${i * 0.08}s`
      })

      // Map — rotate in
      const mapEl = document.querySelector('iframe[title]')
      if (mapEl) {
        mapEl.parentElement.classList.add('reveal-rotate')
      }
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
        <FoodDivider />
        <Menu onAddItem={cart.addItem} />
        <DotDivider />
        <About />
        <WaveDivider color="var(--color-surface)" />
        <Reviews />
        <WaveDivider color="var(--color-background)" flip />
        <DotDivider />
        <Contacts />
      </main>

      <Footer />
      <FloatingCart totalItems={cart.totalItems} totalPrice={cart.totalPrice} onCartClick={() => setCartOpen(true)} />
      <ScrollToTop />

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
