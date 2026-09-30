import { useRef, useState } from 'react'
import { FaInstagram, FaPlay, FaTiktok } from 'react-icons/fa6'
import styles from './Gallery.module.css'

type VideoCardProps = {
  number: number
  label: string
  alt: string
  views: string
  viewsText: string
  viewsOn: string
  platform: string
}

const VideoCard = ({ number, label, alt, views, viewsText, viewsOn, platform }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    videoRef.current?.play().catch(() => {})
    setIsPlaying(true)
  }

  const pause = () => {
    videoRef.current?.pause()
    setIsPlaying(false)
  }

  const toggle = () => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }

  return (
    <div className={styles.card} onMouseEnter={play} onMouseLeave={pause} onClick={toggle}>
      <img
        className={styles.poster}
        src={`/videos/video-${number}.jpg`}
        alt={alt}
        onError={(event) => (event.currentTarget.style.display = 'none')}
      />

      <video
        ref={videoRef}
        className={styles.video}
        src={`/videos/video-${number}.mp4`}
        muted
        loop
        playsInline
        preload="none"
      />

      {views && (
        <span className={styles.views} title={`${views} ${viewsOn} ${platform}`}>
          {platform === 'Instagram' && <FaInstagram />}
          {platform === 'TikTok' && <FaTiktok />}
          {views} {viewsText}
        </span>
      )}

      {!isPlaying && (
        <span className={styles.play}>
          <FaPlay />
        </span>
      )}

      <div className={styles.bottom}>
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}

export default VideoCard
