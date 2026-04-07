export default function Cart({ items, totalPrice, onUpdateQty, onRemove, onOrder, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-surface h-full shadow-modal overflow-y-auto animate-slide-in">
        <div className="sticky top-0 bg-surface z-10 px-6 py-4 border-b border-primary/10 flex items-center justify-between">
          <h2 className="font-heading font-bold text-xl">Корзина</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
            aria-label="Закрыть корзину"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🛒</div>
              <p className="text-secondary">Корзина пуста</p>
              <p className="text-secondary text-sm mt-1">Добавьте блюда из меню</p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {items.map(item => (
                  <div key={item.id} className="flex items-center gap-3 bg-background rounded-xl p-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-bold text-sm truncate">{item.name}</p>
                      <p className="text-accent font-bold text-sm">{item.price * item.qty} ₽</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center text-sm hover:bg-primary/5 transition-colors"
                        aria-label="Уменьшить количество"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-semibold text-sm">{item.qty}</span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-primary/20 flex items-center justify-center text-sm hover:bg-primary/5 transition-colors"
                        aria-label="Увеличить количество"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-primary/30 hover:text-accent transition-colors"
                      aria-label={`Удалить ${item.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-primary/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-secondary font-semibold">Итого:</span>
                  <span className="font-heading font-bold text-2xl text-accent">{totalPrice} ₽</span>
                </div>
                <button
                  onClick={onOrder}
                  className="w-full py-3.5 bg-accent text-white font-heading font-bold text-base uppercase tracking-wider rounded-full hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-lg"
                >
                  Оформить заказ
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .animate-slide-in { animation: slideIn 0.3s ease-out; }
      `}</style>
    </div>
  )
}
