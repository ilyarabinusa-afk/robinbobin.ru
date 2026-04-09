export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-yellow/10 via-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-10 text-center">
          О нас
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="space-y-5 text-primary/80 text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-primary text-xl font-heading">Робин Бобин</strong> — это не просто кафе быстрого питания.
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
              <div className="absolute -inset-6 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative flex flex-col items-center gap-4">
                <img
                  src="/images/mascot.png"
                  alt="Маскот Робин Бобин"
                  className="h-48 md:h-64 lg:h-72 w-auto drop-shadow-xl"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <img
                  src="/images/logo.png"
                  alt="Робин Бобин"
                  className="h-10 md:h-14 w-auto"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <p className="font-heading font-bold text-lg text-accent">3 точки в Челябинске</p>
                <p className="text-sm text-secondary">Кормим с 2020 года</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
