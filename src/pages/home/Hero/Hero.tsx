import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/i18n/useLanguage'
import VideoPreview from '../VideoPreview/VideoPreview'
import styles from './Hero.module.css'

const Hero = () => {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className={styles.hero}>
      <p className={styles.badge}>
        {t.hero.badge}
        <span className={styles.badgeText}>{t.hero.badgeAccent}</span>
      </p>

      <h1 className={styles.title}>
        {t.hero.titleStart} <span className={styles.accent}>{t.hero.titleAccent}</span>{' '}
        {t.hero.titleEnd}
      </h1>

      <p className={styles.subtitle}>{t.hero.subtitle}</p>

      <Link to="/auth/register" className={styles.button}>
        {t.hero.button}
      </Link>

      <div className={styles.tabs}>
        {t.hero.tabs.map((tab, index) => (
          <button
            key={tab}
            className={index === activeTab ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <VideoPreview activeTab={activeTab} />
    </section>
  )
}

export default Hero
