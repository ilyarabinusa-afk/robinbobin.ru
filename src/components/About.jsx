export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-6">
              О нас
            </h2>
            <div className="space-y-4 text-secondary text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-primary">Робин Бобин</strong> — это не просто кафе быстрого питания.
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
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/5 via-yellow/15 to-green/5 flex flex-col items-center justify-center overflow-hidden p-8">
              {/* Mascot */}
              <img
                src="/images/mascot.png"
                alt="Маскот Робин Бобин"
                className="h-40 md:h-56 w-auto mb-4 drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
              {/* Logo */}
              <img
                src="/images/logo.png"
                alt="Робин Бобин"
                className="h-12 md:h-16 w-auto"
                onError={(e) => {
                  e.target.outerHTML = '<p class="font-heading font-bold text-2xl text-primary/40">3 точки в Челябинске</p>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
