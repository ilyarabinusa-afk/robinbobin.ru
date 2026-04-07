import menuData from '../data/menu.json'

const { locations, contacts } = menuData

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-3">
            Контакты
          </h2>
          <p className="text-secondary text-base md:text-lg">
            Приходите — мы рядом!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {locations.map(loc => (
            <div
              key={loc.id}
              className="contact-card bg-surface rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-1">
                {loc.address}
              </h3>
              <p className="text-secondary text-sm">
                г. {loc.city}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href={`mailto:${contacts.email}`}
            className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {contacts.email}
          </a>
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.504-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-card">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Arobinbobin&source=constructorStatic&ll=61.4025%2C55.1644&z=12&pt=61.3772%2C55.1836%2Cpm2rdm~61.3811%2C55.1592%2Cpm2rdm~61.4308%2C55.1502%2Cpm2rdm"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: 0, display: 'block' }}
            title="Наши точки на карте"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
