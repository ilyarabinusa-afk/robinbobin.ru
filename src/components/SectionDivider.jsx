export function WaveDivider({ flip = false, color = 'var(--color-surface)' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 md:h-16">
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
    <div className="flex items-center justify-center gap-4 py-6 opacity-30">
      <div className="h-px w-16 bg-accent/40" />
      <span className="text-2xl">🍔</span>
      <span className="text-xl">•</span>
      <span className="text-2xl">🌯</span>
      <span className="text-xl">•</span>
      <span className="text-2xl">🍟</span>
      <div className="h-px w-16 bg-accent/40" />
    </div>
  )
}

export function DotDivider() {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-accent/30"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}
