import { useState } from 'react'
import menuData from '../data/menu.json'

export default function Menu({ onAddItem }) {
  const [activeCategory, setActiveCategory] = useState('burgers')
  const filteredItems = menuData.items.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-3">
            Наше меню
          </h2>
          <p className="text-secondary text-base md:text-lg max-w-xl mx-auto">
            Выберите любимые блюда и закажите на самовывоз
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {menuData.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-surface text-primary/60 hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} onAdd={onAddItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden bg-yellow/10">
        <div className="w-full h-full bg-gradient-to-br from-accent/5 to-yellow/10 flex items-center justify-center text-6xl">
          {item.category === 'burgers' ? '🍔' : item.category === 'shawarma' ? '🌯' : item.category === 'snacks' ? '🍟' : '☕'}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-primary mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-secondary mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-xl text-accent">
            {item.price} ₽
          </span>
          <button
            onClick={() => onAdd(item)}
            className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            aria-label={`Добавить ${item.name} в корзину`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
