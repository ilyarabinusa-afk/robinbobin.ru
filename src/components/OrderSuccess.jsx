export default function OrderSuccess({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-surface rounded-3xl shadow-modal w-full max-w-sm p-8 text-center animate-modal-in">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="font-heading font-bold text-2xl text-primary mb-2">Заказ принят!</h2>
        <p className="text-secondary mb-6">
          Мы получили ваш заказ и начинаем готовить. Ожидайте — это займёт 15–20 минут.
        </p>
        <button
          onClick={onClose}
          className="px-8 py-3 bg-green text-white font-heading font-bold rounded-full hover:scale-105 transition-transform"
        >
          Отлично!
        </button>
      </div>

      <style>{`
        @keyframes modalIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-modal-in { animation: modalIn 0.2s ease-out; }
      `}</style>
    </div>
  )
}
