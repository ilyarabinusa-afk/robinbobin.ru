export function WaveDivider({ flip = false, color = 'var(--color-surface)' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-20">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

export function FoodDivider() {
  return (
    <div className="food-divider flex items-center justify-center gap-3 md:gap-5 py-6">
      <div className="h-px w-12 md:w-20 bg-accent/30" />
      <span className="text-2xl md:text-3xl">🍔</span>
      <span className="text-accent/40 text-lg">•</span>
      <span className="text-2xl md:text-3xl">🌯</span>
      <span className="text-accent/40 text-lg">•</span>
      <span className="text-2xl md:text-3xl">🍟</span>
      <span className="text-accent/40 text-lg">•</span>
      <span className="text-2xl md:text-3xl">☕</span>
      <div className="h-px w-12 md:w-20 bg-accent/30" />
    </div>
  )
}

export function DotDivider() {
  return (
    <div className="dot-divider flex items-center justify-center gap-3 py-8">
      {[0, 1, 2].map(i => (
        <div key={i} className="w-2 h-2 rounded-full bg-accent/25" />
      ))}
    </div>
  )
}
