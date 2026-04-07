export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-blob absolute -top-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="hero-blob absolute top-1/3 -right-20 w-96 h-96 bg-yellow/10 rounded-full blur-3xl" />
        <div className="hero-blob absolute -bottom-20 left-1/3 w-72 h-72 bg-green/5 rounded-full blur-3xl" />
      </div>

      {/* Floating food icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="hero-float absolute text-5xl md:text-6xl top-[15%] left-[8%] opacity-20">🍔</span>
        <span className="hero-float absolute text-4xl md:text-5xl top-[25%] right-[10%] opacity-15">🌯</span>
        <span className="hero-float absolute text-5xl md:text-6xl bottom-[25%] left-[12%] opacity-15">🍟</span>
        <span className="hero-float absolute text-4xl md:text-5xl bottom-[20%] right-[8%] opacity-20">☕</span>
        <span className="hero-float absolute text-3xl top-[45%] left-[3%] opacity-10">🌶️</span>
        <span className="hero-float absolute text-3xl top-[10%] right-[25%] opacity-10">🧀</span>
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* Logo in bubble font */}
        <div className="hero-logo mb-6">
          <h1 className="leading-none">
            <span
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent inline-block"
              style={{
                fontFamily: '"Boogaloo", cursive',
                WebkitTextStroke: '1.5px #1A1A1A',
                paintOrder: 'stroke fill',
                letterSpacing: '-0.02em',
              }}
            >
              робин
              <span className="text-green" style={{ WebkitTextStroke: '1.5px #1A1A1A' }}>•</span>
              бобин
            </span>
          </h1>
        </div>

        <p className="hero-tagline font-heading font-bold text-xl md:text-3xl text-primary/80 mb-4">
          Вкусно. Быстро. По-домашнему!
        </p>

        <p className="hero-tagline text-secondary text-base md:text-lg mb-10 max-w-lg mx-auto">
          Бургеры, шаурма и закуски с душой. Закажи на самовывоз — заберёшь горячим!
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-white font-heading font-bold text-base md:text-lg uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Смотреть меню
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/20 text-primary font-heading font-bold text-base md:text-lg rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            📍 Наши адреса
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
