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
          <p className="text-secondary text-base md:text-lg">
            Что говорят наши гости
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map(review => (
            <div
              key={review.id}
              className="review-card bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <StarRating rating={review.rating} />
              <p className="text-primary/80 text-sm md:text-base leading-relaxed mt-3 mb-4">
                «{review.text}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent text-sm">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm text-primary">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
