export default function Footer() {
  return (
    <footer className="bg-primary text-white/70 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl text-white" style={{ fontFamily: '"Boogaloo", cursive' }}>
              робин<span className="text-green">•</span>бобин
            </span>
            <p className="text-sm mt-2">Вкусно. Быстро. По-домашнему!</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-3">Адреса</h3>
            <ul className="space-y-1 text-sm">
              <li>Проспект Победы, 160</li>
              <li>Проспект Ленина, 69/3</li>
              <li>Университетская набережная, 62</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-3">Контакты</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="mailto:order@robinbobin.ru" className="hover:text-white transition-colors">
                  order@robinbobin.ru
                </a>
              </li>
              <li>
                <a href="https://t.me/Robon_Bobin_bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram @Robon_Bobin_bot
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Робин Бобин. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
