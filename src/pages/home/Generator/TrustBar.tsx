import { FaInstagram, FaStar, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Generator.module.css'

const TrustBar = () => {
  const { t } = useLanguage()

  return (
    <div className={styles.trustBar}>
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
        <span className={styles.divider} />
        <span>
          {t.generator.trustedStart}{' '}
          <span className={styles.trustedAccent}>{t.generator.trustedAccent}</span>{' '}
          {t.generator.trustedEnd}
        </span>
      </div>

      <div className={styles.platforms}>
        <span className={styles.optimized}>{t.generator.optimizedFor}</span>
        <span className={styles.platform}>
          <FaYoutube /> YouTube
        </span>
        <span className={styles.platform}>
          <FaInstagram /> Instagram
        </span>
        <span className={styles.platform}>
          <FaTiktok /> TikTok
        </span>
      </div>
    </div>
  )
}

export default TrustBar
