import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuArrowRight, LuClapperboard, LuMic, LuPalette, LuUserRound } from 'react-icons/lu'
import AnimatedCaption from '@/components/AnimatedCaption'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Avatars.module.css'

const featureIcons = [<LuPalette />, <LuClapperboard />, <LuMic />]

const avatarColors = [
  '#f5c69a',
  '#e0a57a',
  '#8d5a3b',
  '#f1d3b3',
  '#c68642',
  '#ffdbac',
  '#5c3a21',
  '#a0673d',
]

const Avatars = () => {
  const { t } = useLanguage()
  const [activeTiming, setActiveTiming] = useState(0)
  const [activeAvatar, setActiveAvatar] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.media}>
          <div className={styles.videoCard}>
            <div className={styles.avatar} style={{ background: avatarColors[activeAvatar] }}>
              <LuUserRound />
            </div>
            <AnimatedCaption text={t.avatars.caption} className={styles.caption} />
          </div>

          <div className={styles.timing}>
            {t.avatars.timing.map((item, index) => (
              <button
                key={item.name}
                className={index === activeTiming ? styles.timingActive : styles.timingItem}
                onClick={() => setActiveTiming(index)}
              >
                {item.name}
                <span className={styles.duration}>{item.duration}</span>
              </button>
            ))}
          </div>

          <p className={styles.timingNote}>{t.avatars.timingNote}</p>
        </div>

        <div className={styles.text}>
          <span className={styles.badge}>
            <span className={styles.dot} /> {t.avatars.badge}
          </span>

          <h2 className={styles.title}>
            {t.avatars.titleStart} <span className={styles.accent}>{t.avatars.titleAccent}</span>
          </h2>

          <p className={styles.subtitle}>{t.avatars.subtitle}</p>

          <div className={styles.features}>
            {t.avatars.features.map((feature, index) => (
              <div key={feature} className={styles.feature}>
                <span className={styles.featureIcon}>{featureIcons[index]}</span>
                {feature}
              </div>
            ))}
          </div>

          <p className={styles.stylesTitle}>{t.avatars.stylesTitle}</p>

          <div className={styles.avatarList}>
            {avatarColors.map((color, index) => (
              <button
                key={color}
                className={index === activeAvatar ? styles.avatarOptionActive : styles.avatarOption}
                style={{ background: color }}
                aria-label={`${t.avatars.stylesTitle} ${index + 1}`}
                onClick={() => setActiveAvatar(index)}
              >
                <LuUserRound />
              </button>
            ))}
          </div>

          <Link to="/avatars" className={styles.button}>
            {t.avatars.button} <LuArrowRight />
          </Link>
          <p className={styles.buttonNote}>{t.avatars.buttonNote}</p>
        </div>
      </div>
    </section>
  )
}

export default Avatars
