import reviews from '../data/reviews.json'

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={star <= rating ? '#FFD700' : 'none'}
          stroke={star <= rating ? '#FFD700' : '#ccc'}
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-4 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title font-heading font-extrabold text-3xl md:text-5xl text-primary mb-3">
            Отзывы
          </h2>
          <p className="section-sub text-secondary text-base md:text-lg">
            Что говорят наши гости
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className={`review-card rounded-2xl p-5 md:p-6 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:scale-[1.02] cursor-default ${
                i === 0 ? 'bg-accent/5 border-accent/20 md:col-span-2 lg:col-span-1' : 'bg-surface border-primary/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold text-sm text-primary block">{review.name}</span>
                    {review.date && <span className="text-xs text-secondary">{review.date}</span>}
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-primary/70 text-sm leading-relaxed">
                «{review.text}»
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
