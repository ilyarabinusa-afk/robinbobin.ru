export default function Hero() {
  return (
    <section className="hero-section relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Background — warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow/20 via-accent/5 to-background" />

      {/* Floating food icons — large and vivid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="hero-float absolute text-6xl md:text-8xl lg:text-9xl top-[10%] left-[5%] opacity-70">🍔</span>
        <span className="hero-float absolute text-5xl md:text-7xl lg:text-8xl top-[15%] right-[6%] opacity-60">🌯</span>
        <span className="hero-float absolute text-6xl md:text-8xl lg:text-9xl bottom-[20%] left-[8%] opacity-60">🍟</span>
        <span className="hero-float absolute text-5xl md:text-7xl lg:text-8xl bottom-[15%] right-[5%] opacity-70">☕</span>
        <span className="hero-float absolute text-4xl md:text-6xl top-[42%] left-[1%] opacity-50">🌶️</span>
        <span className="hero-float absolute text-4xl md:text-6xl top-[6%] right-[20%] opacity-50">🧀</span>
      </div>

      <div className="hero-content relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="hero-logo mb-4 md:mb-6">
          <img
            src="/images/logo.png"
            alt="Робин Бобин"
            className="mx-auto h-20 sm:h-28 md:h-36 lg:h-44 w-auto drop-shadow-md"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextElementSibling.style.display = 'block'
            }}
          />
          <h1 className="hidden leading-none">
            <span
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent inline-block"
              style={{ fontFamily: '"Boogaloo", cursive', WebkitTextStroke: '1.5px #1A1A1A', paintOrder: 'stroke fill' }}
            >
              робин<span className="text-green" style={{ WebkitTextStroke: '1.5px #1A1A1A' }}>•</span>бобин
            </span>
          </h1>
        </div>

        {/* Mascot — bigger */}
        <div className="hero-mascot mb-5">
          <img
            src="/images/mascot.png"
            alt="Маскот Робин Бобин"
            className="mx-auto h-36 sm:h-44 md:h-52 lg:h-60 w-auto drop-shadow-xl"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>

        <p className="hero-tagline font-heading font-bold text-2xl md:text-4xl text-primary mb-2">
          Вкусно. Быстро. По-домашнему!
        </p>

        <p className="hero-tagline text-secondary text-base md:text-lg mb-8 max-w-lg mx-auto">
          Бургеры, шаурма и закуски с душой. Закажи на самовывоз — заберёшь горячим!
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-white font-heading font-bold text-base md:text-lg uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Смотреть меню
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent/40 text-accent font-heading font-bold text-base md:text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            📍 Наши адреса
          </a>
        </div>
      </div>
    </section>
  )
}
