import { useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuArrowRight, LuCornerDownLeft, LuFilm, LuPause, LuSmartphone, LuSparkles, LuUserRound } from 'react-icons/lu'
import { useLanguage } from '@/i18n/useLanguage'
import AvatarCard from './AvatarCard'
import TrustBar from './TrustBar'
import styles from './Generator.module.css'

const MAX_LENGTH = 500

const modeIcons = [<LuFilm />, <LuSmartphone />, <LuUserRound />]

const Generator = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const [activeMode, setActiveMode] = useState(0)

  const generate = () => {
    navigate('/auth/login')
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      generate()
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="#avatars" className={styles.badge}>
            <span className={styles.badgeNew}>{t.generator.badgeNew}</span>
            {t.generator.badgeText}
            <LuArrowRight />
          </a>

          <h2 className={styles.title}>
            {t.generator.titleStart}{' '}
            <span className={styles.accent}>{t.generator.titleAccent}</span>
          </h2>

          <p className={styles.subtitle}>{t.generator.subtitle}</p>

          <div className={styles.inputCard}>
            <textarea
              className={styles.textarea}
              placeholder={t.generator.placeholder}
              maxLength={MAX_LENGTH}
              value={text}
              onChange={(event) => setText(event.target.value)}
              onKeyDown={handleKeyDown}
            />

            <div className={styles.inputBottom}>
              <div className={styles.modes}>
                {t.generator.modes.map((mode, index) => (
                  <button
                    key={mode}
                    className={index === activeMode ? styles.modeActive : styles.mode}
                    onClick={() => setActiveMode(index)}
                  >
                    {modeIcons[index]} {mode}
                  </button>
                ))}
              </div>

              <span className={styles.counter}>
                {text.length}/{MAX_LENGTH}
              </span>

              <button className={styles.generate} onClick={generate} aria-describedby="generate-hint">
                <LuSparkles /> {t.generator.generate}
                <span className={styles.shortcut}>
                  Ctrl <LuCornerDownLeft />
                </span>
              </button>
              <span id="generate-hint" className={styles.srOnly}>
                {t.generator.hint}
              </span>
            </div>
          </div>

          <p className={styles.note}>{t.generator.note}</p>
        </div>

        <div className={styles.right}>
          <div className={styles.videoCard}>
            <video
              className={styles.video}
              src="/demo.mp4"
              poster="/demo-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
            />
            <span className={styles.madeWith}>
              <span className={styles.dot} /> {t.generator.madeWith}
            </span>
            <span className={styles.pause}>
              <LuPause />
            </span>
          </div>

          <AvatarCard />
        </div>
      </div>

      <TrustBar />
    </section>
  )
}

export default Generator
