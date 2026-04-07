export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow/10 via-background to-background" />

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <div className="hero-logo mb-6">
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl text-accent leading-none tracking-tight">
            робин
            <span className="text-green">•</span>
            бобин
          </h1>
        </div>

        <p className="hero-tagline font-heading font-bold text-xl md:text-3xl text-primary/80 mb-4">
          Вкусно. Быстро. По-домашнему!
        </p>

        <p className="hero-tagline text-secondary text-base md:text-lg mb-10 max-w-lg mx-auto">
          Бургеры, шаурма и закуски с душой. Закажи на самовывоз — заберёшь горячим!
        </p>

        <a
          href="#menu"
          className="hero-cta inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-heading font-bold text-base md:text-lg uppercase tracking-wider rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
        >
          Смотреть меню
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
