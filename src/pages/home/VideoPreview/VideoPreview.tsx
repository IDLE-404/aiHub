import {
  LuFilm,
  LuHouse,
  LuPlay,
  LuPlus,
  LuSparkles,
  LuUserRound,
  LuVideo,
} from 'react-icons/lu'
import Logo from '@/components/Logo'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './VideoPreview.module.css'

type VideoPreviewProps = {
  activeTab: number
}

const VideoPreview = ({ activeTab }: VideoPreviewProps) => {
  const { t } = useLanguage()

  return (
    <div className={styles.frame}>
      <aside className={styles.sidebar}>
        <div className={styles.workspace}>
          <Logo />
        </div>

        <div className={styles.newVideo}>
          <LuPlus /> {t.preview.newVideo}
        </div>

        <div className={styles.item}><LuHouse /> {t.preview.home}</div>
        <div className={styles.itemActive}><LuVideo /> {t.preview.create}</div>
        <div className={styles.item}><LuFilm /> {t.preview.myVideos}</div>
        <div className={styles.item}><LuUserRound /> {t.preview.avatars}</div>
      </aside>

      <div className={styles.main}>
        <h2 className={styles.title}>{t.preview.title}</h2>

        <div className={styles.promptBox}>
          <p className={styles.promptText}>{t.preview.prompt}</p>

          <div className={styles.promptBottom}>
            <div className={styles.steps}>
              {t.hero.tabs.map((step, index) => (
                <span key={step} className={index === activeTab ? styles.stepActive : styles.step}>
                  {step}
                </span>
              ))}
            </div>

            <span className={styles.generate}>
              <LuSparkles /> {t.preview.generate}
            </span>
          </div>
        </div>

        <p className={styles.recent}>{t.preview.recent}</p>

        <div className={styles.videos}>
          {t.preview.videos.map((video) => (
            <div key={video.title} className={styles.video}>
              <div className={styles.thumbnail}>
                <LuPlay />
              </div>
              <p className={styles.videoTitle}>{video.title}</p>
              <p className={styles.videoViews}>{video.views}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.fade} />
    </div>
  )
}

export default VideoPreview
