import { useState, useEffect } from 'react'

export default function FloatingCart({ totalItems, totalPrice, onCartClick }) {
  const [visible, setVisible] = useState(false)
  const [bounce, setBounce] = useState(false)
  const [prevItems, setPrevItems] = useState(totalItems)

  // Show when scrolled past hero and has items
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400 && totalItems > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [totalItems])

  // Bounce animation when item added
  useEffect(() => {
    if (totalItems > prevItems) {
      setBounce(true)
      const t = setTimeout(() => setBounce(false), 600)
      return () => clearTimeout(t)
    }
    setPrevItems(totalItems)
  }, [totalItems, prevItems])

  if (!visible) return null

  return (
    <button
      onClick={onCartClick}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
        bounce ? 'animate-cart-bounce' : ''
      }`}
    >
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <span className="absolute -top-2 -right-3 bg-white text-accent text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      </div>
      <span className="font-heading font-bold text-sm">{totalPrice} ₽</span>
      <span className="text-white/70 text-xs">Корзина</span>
    </button>
  )
}
