import { useState } from 'react'
import menuData from '../data/menu.json'

const FOOD_IMAGES = {
  'Бургер Робин Бобин': '/images/menu/burger-robin-bobin.jpg',
  'Бургер Классик': '/images/menu/burger-classic.jpg',
  'Шаурма Классическая': '/images/menu/shawarma-classic.jpg',
  'Шаурма Двойная': '/images/menu/shawarma-double.jpg',
  'Чикен-Чиз': '/images/menu/chicken-cheese.jpg',
  'Хот-дог Робин-Бобин': '/images/menu/hotdog.jpg',
  'Картофель фри': '/images/menu/fries.jpg',
  'Снекбокс': '/images/menu/snackbox.jpg',
  'Ланчбокс с Фри': '/images/menu/lunchbox.jpg',
  'Чикен бокс': '/images/menu/chickenbox.jpg',
  'Чай': '/images/menu/tea.jpg',
  'Кофе': '/images/menu/coffee.jpg',
  'Морс ягодный': '/images/menu/mors.jpg',
}

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
          <p className="section-sub text-secondary text-base md:text-lg max-w-xl mx-auto">
            Выберите любимые блюда и закажите на самовывоз
          </p>
        </div>

        <div className="category-tabs flex flex-wrap justify-center gap-2 mb-10">
          {menuData.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-accent text-white shadow-md scale-105'
                  : 'bg-surface text-primary/60 hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className={`grid gap-4 md:gap-6 ${
          filteredItems.length <= 2
            ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}>
          {filteredItems.map((item, i) => (
            <MenuCard key={item.id} item={item} onAdd={onAddItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, onAdd }) {
  const imgSrc = FOOD_IMAGES[item.name]

  return (
    <div className="menu-card group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
      {/* Image — always visible, no opacity trick */}
      <div className="aspect-[4/3] overflow-hidden bg-accent/5 relative">
        <img
          src={imgSrc}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover overlay with composition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
          <p className="text-white/90 text-xs leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 delay-75">
            <span className="font-semibold text-yellow">Состав: </span>
            {item.composition}
          </p>
        </div>

        {/* Weight + Calories badge */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            {item.weight}
          </span>
          <span className="bg-accent/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-1 rounded-full">
            {item.calories}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-primary mb-0.5 group-hover:text-accent transition-colors duration-200">
          {item.name}
        </h3>
        <p className="text-sm text-secondary mb-3 line-clamp-2 italic">
          {item.tagline}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-heading font-bold text-xl text-accent">
            {item.price} ₽
          </span>
          <button
            onClick={() => onAdd(item)}
            className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-90 transition-transform shadow-md focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
