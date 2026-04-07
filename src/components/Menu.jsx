import { useState } from 'react'
import menuData from '../data/menu.json'

const FOOD_IMAGES = {
  'Бургер Робин Бобин': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=450&fit=crop',
  'Бургер Классик': 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=450&fit=crop',
  'Шаурма Классическая': 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&h=450&fit=crop',
  'Шаурма Двойная': 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=450&fit=crop',
  'Хот-дог Робин-Бобин': 'https://images.unsplash.com/photo-1612392166886-ee8475b03af2?w=600&h=450&fit=crop',
  'Картофель фри': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=450&fit=crop',
  'Снекбокс': 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&h=450&fit=crop',
  'Ланчбокс с Фри': 'https://images.unsplash.com/photo-1619740455993-9d701c0c2c4c?w=600&h=450&fit=crop',
  'Чикен-Чиз': 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=450&fit=crop&q=80',
  'Чикен бокс': 'https://images.unsplash.com/photo-1562967915-92ae0c320a01?w=600&h=450&fit=crop',
  'Чай': 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=600&h=450&fit=crop',
  'Кофе': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=450&fit=crop',
  'Морс ягодный': 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=450&fit=crop',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, i) => (
            <MenuCard key={item.id} item={item} onAdd={onAddItem} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuCard({ item, onAdd, index }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const imgSrc = FOOD_IMAGES[item.name]

  return (
    <div
      className="menu-card group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-yellow/10 relative">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={item.name}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-5xl animate-pulse">
            {item.category === 'burgers' ? '🍔' : item.category === 'shawarma' ? '🌯' : item.category === 'snacks' ? '🍟' : '☕'}
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="font-heading font-bold text-lg text-primary mb-1 group-hover:text-accent transition-colors duration-200">
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
