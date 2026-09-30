import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LuArrowRight,
  LuArrowUp,
  LuArrowUpRight,
  LuBookOpen,
  LuCircleCheck,
  LuLink,
  LuPlay,
  LuSquareTerminal,
  LuWandSparkles,
} from 'react-icons/lu'
import { RiOpenaiFill } from 'react-icons/ri'
import { SiClaude } from 'react-icons/si'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Mcp.module.css'

const featureIcons = [<LuLink />, <LuWandSparkles />, <LuSquareTerminal />]

const Mcp = () => {
  const { t } = useLanguage()
  const [assistant, setAssistant] = useState('Claude')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.badge}>
            <span className={styles.dot} /> {t.mcp.badge}
          </span>

          <h2 className={styles.title}>
            {t.mcp.titleStart} <span className={styles.accent}>{t.mcp.titleAccent}</span>
          </h2>

          <p className={styles.subtitle}>{t.mcp.subtitle}</p>

          <ul className={styles.features}>
            {t.mcp.features.map((feature, index) => (
              <li key={feature} className={styles.feature}>
                <span className={styles.featureIcon}>{featureIcons[index]}</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            <Link to="/auth/login" className={styles.button}>
              {t.mcp.button} <LuArrowRight />
            </Link>
            <a href="/docs" target="_blank" rel="noreferrer" className={styles.docs}>
              <LuBookOpen /> {t.mcp.docs} <LuArrowUpRight />
            </a>
          </div>

          <p className={styles.note}>{t.mcp.note}</p>
        </div>

        <div className={styles.chatWrapper}>
          <div className={styles.chat}>
            <div className={styles.chatHeader}>
              <div className={styles.switch}>
                <button
                  className={assistant === 'Claude' ? styles.switchActive : styles.switchItem}
                  onClick={() => setAssistant('Claude')}
                >
                  <SiClaude className={styles.claude} /> Claude
                </button>
                <button
                  className={assistant === 'ChatGPT' ? styles.switchActive : styles.switchItem}
                  onClick={() => setAssistant('ChatGPT')}
                >
                  <RiOpenaiFill /> ChatGPT
                </button>
              </div>

              <span className={styles.connected}>
                <span className={styles.dot} /> {t.mcp.connected}
              </span>
            </div>

            <div className={styles.messages}>
              <p className={styles.userMessage}>{t.mcp.userMessage}</p>

              <div className={styles.assistantMessage}>
                <span className={styles.assistantIcon}>
                  {assistant === 'Claude' ? <SiClaude className={styles.claude} /> : <RiOpenaiFill />}
                </span>
                <div>
                  <p>{t.mcp.assistantMessage}</p>

                  <div className={styles.videoResult}>
                    <span className={styles.videoThumb}>
                      <LuPlay />
                    </span>
                    <div>
                      <p className={styles.videoTitle}>{t.mcp.videoTitle}</p>
                      <p className={styles.videoInfo}>{t.mcp.videoInfo}</p>
                    </div>
                    <span className={styles.videoReady}>
                      <LuCircleCheck /> {t.mcp.videoReady}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.inputRow}>
              <span className={styles.placeholder}>
                {t.mcp.placeholder} {assistant}…
              </span>
              <span className={styles.send}>
                <LuArrowUp />
              </span>
            </div>
          </div>

          <p className={styles.disclaimer}>{t.mcp.disclaimer}</p>
        </div>
      </div>
    </section>
  )
}

export default Mcp
