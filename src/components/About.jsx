export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-yellow/10 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-12 text-center">
          О нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-12">
          <div>
            <div className="space-y-5 text-primary/80 text-lg md:text-xl leading-relaxed">
              <p>
                <strong className="text-primary text-2xl font-heading">Робин Бобин</strong> — это не просто кафе быстрого питания.
                Это место, где каждый бургер делается с душой, шаурма заворачивается
                с любовью, а картошка фри хрустит так, как надо.
              </p>
              <p>
                Мы начали с маленькой точки в Челябинске и выросли до трёх — потому что
                наши гости возвращаются снова и снова. Секрет прост: свежие продукты,
                честные порции и фирменные рецепты.
              </p>
              <p>
                Наш маскот — весёлый Робин Бобин — символ того, что вкусная еда
                должна приносить радость. Приходите голодными — уходите счастливыми!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative flex flex-col items-center gap-4">
                <img
                  src="/images/mascot.png"
                  alt="Маскот Робин Бобин"
                  className="parallax-slow h-48 md:h-64 lg:h-72 w-auto drop-shadow-xl"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <img
                  src="/images/logo.png"
                  alt="Робин Бобин"
                  className="h-10 md:h-14 w-auto"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '3', label: 'Точки в Челябинске', icon: '📍' },
            { num: '5+', label: 'Лет с вами', icon: '🎂' },
            { num: '13', label: 'Блюд в меню', icon: '🍔' },
            { num: '1000+', label: 'Довольных гостей', icon: '⭐' },
          ].map((stat, i) => (
            <div key={i} className="stat-card bg-surface/80 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center border border-accent/5 hover:border-accent/20 transition-all duration-300">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="font-heading font-black text-2xl md:text-3xl text-accent">{stat.num}</div>
              <div className="text-xs md:text-sm text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
