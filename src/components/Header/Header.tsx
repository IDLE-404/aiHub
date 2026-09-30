import { Link } from 'react-router-dom'
import Logo from '@/components/Logo'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Header.module.css'

type HeaderProps = {
  transparent?: boolean
}

const Header = ({ transparent }: HeaderProps) => {
  const { t, language, setLanguage } = useLanguage()
  const headerClass = transparent ? styles.headerTransparent : styles.header

  return (
    <header className={headerClass}>
      <Link to="/">
        <Logo />
      </Link>

      <nav className={styles.nav}>
        <Link to="/pricing" className={styles.link}>{t.header.pricing}</Link>
        <Link to="/avatars" className={styles.link}>{t.header.avatars}</Link>
        <Link to="/auth/login" className={styles.link}>{t.header.login}</Link>
      </nav>

      <div className={styles.right}>
        <div className={styles.languages}>
          <button
            className={language === 'ru' ? styles.languageActive : styles.language}
            onClick={() => setLanguage('ru')}
          >
            RU
          </button>
          <button
            className={language === 'en' ? styles.languageActive : styles.language}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

        <Link to="/auth/register" className={styles.button}>
          {t.header.button}
        </Link>
      </div>
    </header>
  )
}

export default Header
