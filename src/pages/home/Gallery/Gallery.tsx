import {
  LuCaptions,
  LuClapperboard,
  LuFileText,
  LuFilm,
  LuImage,
  LuMic,
  LuSmartphone,
  LuUserRound,
} from 'react-icons/lu'
import { useLanguage } from '@/i18n/useLanguage'
import VideoCard from './VideoCard'
import styles from './Gallery.module.css'

const featureIcons = [
  <LuUserRound />,
  <LuClapperboard />,
  <LuFilm />,
  <LuSmartphone />,
  <LuFileText />,
  <LuMic />,
  <LuCaptions />,
  <LuImage />,
]

const Gallery = () => {
  const { t } = useLanguage()
  const videos = t.gallery.videos

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t.gallery.title}</h2>
      <p className={styles.subtitle}>{t.gallery.subtitle}</p>
      <p className={styles.hint}>{t.gallery.hint}</p>

      <div className={styles.marquee}>
        <div className={styles.videosTrack}>
          {[...videos, ...videos].map((video, index) => (
            <VideoCard
              key={index}
              number={(index % videos.length) + 1}
              label={video.label}
              alt={video.alt}
              views={video.views}
              viewsText={t.gallery.views}
              viewsOn={t.gallery.viewsOn}
              platform={video.platform}
            />
          ))}
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.featuresTrack}>
          {[...t.gallery.features, ...t.gallery.features].map((feature, index) => (
            <span key={index} className={styles.feature}>
              {featureIcons[index % featureIcons.length]}
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
