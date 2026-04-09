export default function Footer() {
  return (
    <footer className="bg-primary text-white/70 py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src="/images/logo.png" alt="Робин Бобин" className="h-10 md:h-12 brightness-0 invert" />
            <p className="text-sm mt-2">Вкусно. Быстро. По-домашнему!</p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-3">Адреса</h3>
            <ul className="space-y-1.5 text-sm">
              <li>г. Челябинск, Проспект Победы, 160</li>
              <li>г. Челябинск, Проспект Ленина, 69/3</li>
              <li>г. Челябинск, Университетская набережная, 62</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-3">Контакты</h3>
            <div className="flex gap-4 mt-2">
              {/* Email icon */}
              <a
                href="mailto:order@robinbobin.ru"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Email: order@robinbobin.ru"
                title="order@robinbobin.ru"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              {/* Telegram icon */}
              <a
                href="https://t.me/Robon_Bobin_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram @Robon_Bobin_bot"
                title="Telegram @Robon_Bobin_bot"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40 space-y-1">
          <p>© 2020–{new Date().getFullYear()} Робин Бобин. Все права защищены.</p>
          <p>«Робин Бобин» — зарегистрированный товарный знак.</p>
        </div>
      </div>
    </footer>
  )
}
