import { useState } from 'react'
import menuData from '../data/menu.json'

const { locations } = menuData

export default function OrderModal({ items, totalPrice, isOpen, onClose, onSuccess }) {
  const [form, setForm] = useState({ name: '', phone: '', location: locations[0].address })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim()) return setError('Введите имя')
    if (!/^\+?[\d\s\-()]{7,}$/.test(form.phone.trim())) return setError('Введите корректный телефон')

    setSending(true)

    const orderText = items.map(i => `${i.name} x${i.qty} — ${i.price * i.qty}₽`).join('\n')
    const message = `🍔 Новый заказ!\n\n${orderText}\n\n💰 Итого: ${totalPrice}₽\n👤 ${form.name}\n📞 ${form.phone}\n📍 ${form.location}`

    try {
      // Send to Telegram
      const botToken = '8212507941:AAHlJx98g697MbJ0x4CnNQseMIZZeLOUVA8'
      const chatId = '183921686'
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' }),
      })

      onSuccess()
    } catch {
      setError('Не удалось отправить заказ. Попробуйте ещё раз.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-surface rounded-3xl shadow-modal w-full max-w-md p-6 md:p-8 animate-modal-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/5"
          aria-label="Закрыть"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <h2 className="font-heading font-bold text-2xl mb-1">Оформление заказа</h2>
        <p className="text-secondary text-sm mb-6">
          {items.length} поз. на сумму <span className="text-accent font-bold">{totalPrice} ₽</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Ваше имя</label>
            <input
              type="text"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
              placeholder="Иван"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5">Телефон</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1.5">Точка самовывоза</label>
            <select
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
              className="w-full px-4 py-3 bg-background rounded-xl border border-primary/10 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm appearance-none"
            >
              {locations.map(loc => (
                <option key={loc.id} value={loc.address}>
                  {loc.address}
                </option>
              ))}
            </select>
          </div>

          {error && (
            <p className="text-accent text-sm font-semibold">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full py-3.5 bg-accent text-white font-heading font-bold text-base uppercase tracking-wider rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? 'Отправка...' : 'Отправить заказ'}
          </button>

          <p className="text-xs text-secondary text-center">
            Оплата при получении на точке самовывоза
          </p>
        </form>
      </div>

      <style>{`
        @keyframes modalIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-modal-in { animation: modalIn 0.2s ease-out; }
      `}</style>
    </div>
  )
}
