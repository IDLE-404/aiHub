import { LuUserRound } from 'react-icons/lu'
import AnimatedCaption from '@/components/AnimatedCaption'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Generator.module.css'

const AvatarCard = () => {
  const { t } = useLanguage()

  return (
    <div className={styles.avatarCard}>
      <span className={styles.avatarBadge}>
        <span className={styles.dot} /> {t.generator.avatarBadge}
      </span>

      <div className={styles.avatar}>
        <LuUserRound />
      </div>

      <AnimatedCaption text={t.generator.avatarCaption} className={styles.caption} />
    </div>
  )
}

export default AvatarCard
