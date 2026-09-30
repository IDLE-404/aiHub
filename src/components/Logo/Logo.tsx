import { LuLoader } from 'react-icons/lu'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <span className={styles.logo}>
      <LuLoader size={24} />
      aiHub
    </span>
  )
}

export default Logo
