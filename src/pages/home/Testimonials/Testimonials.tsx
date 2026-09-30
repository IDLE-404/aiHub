import { FaQuoteLeft, FaStar } from 'react-icons/fa6'
import { LuUserRound } from 'react-icons/lu'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Testimonials.module.css'

type Review = {
  name: string
  audience: string
  text: string
}

const ReviewCard = ({ review, number }: { review: Review; number: number }) => {
  return (
    <div className={styles.card}>
      <div className={styles.author}>
        <div className={styles.photo}>
          <LuUserRound />
          <img
            src={`/reviews/review-${number}.jpg`}
            alt={review.name}
            onError={(event) => (event.currentTarget.style.display = 'none')}
          />
        </div>
        <div>
          <p className={styles.name}>{review.name}</p>
          <p className={styles.audience}>{review.audience}</p>
        </div>
        <FaQuoteLeft className={styles.quote} />
      </div>
      <p className={styles.text}>«{review.text}»</p>
    </div>
  )
}

const Testimonials = () => {
  const { t } = useLanguage()
  const reviews = t.testimonials.reviews
  const reversed = [...reviews].reverse()

  return (
    <section className={styles.section}>
      <div className={styles.rating}>
        <span className={styles.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
        <span>{t.generator.rating}</span>
        <span className={styles.divider} />
        <span>{t.generator.reviews}</span>
      </div>

      <h2 className={styles.title}>{t.testimonials.title}</h2>
      <p className={styles.subtitle}>{t.testimonials.subtitle}</p>

      <div className={styles.marquee}>
        <div className={styles.trackLeft}>
          {[...reviews, ...reviews].map((review, index) => (
            <ReviewCard key={index} review={review} number={(index % reviews.length) + 1} />
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.trackRight}>
          {[...reversed, ...reversed].map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              number={reviews.length - (index % reviews.length)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
