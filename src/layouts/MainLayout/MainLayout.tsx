import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/Header/Header'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  const { pathname } = useLocation()

  return (
    <div className={styles.layout}>
      <Header transparent={pathname === '/'} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
