import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'
import { LuArrowRight, LuShieldCheck, LuVideo } from 'react-icons/lu'
import { useLanguage } from '@/i18n/useLanguage'
import styles from './Pricing.module.css'

const Pricing = () => {
  const { t } = useLanguage()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{t.pricing.title}</h2>

      <div className={styles.plans}>
        {t.pricing.plans.map((plan, index) => {
          const isPopular = index === 1

          return (
            <div key={plan.name} className={isPopular ? styles.planPopular : styles.plan}>
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                {isPopular && (
                  <span className={styles.popular}>
                    <FaStar /> {t.pricing.popular}
                  </span>
                )}
              </div>

              <p className={styles.description}>{plan.description}</p>

              <p className={styles.price}>
                {plan.price}
                <span className={styles.perMonth}>{t.pricing.perMonth}</span>
              </p>

              <p className={styles.videos}>
                <LuVideo /> {plan.videos}
              </p>

              <Link
                to="/auth/register"
                className={isPopular ? styles.buttonPopular : styles.button}
              >
                {t.pricing.button} <LuArrowRight />
              </Link>
            </div>
          )
        })}
      </div>

      <Link to="/pricing" className={styles.allPlans}>
        {t.pricing.allPlans} <LuArrowRight />
      </Link>

      <p className={styles.note}>
        <LuShieldCheck /> {t.pricing.note}
      </p>
    </section>
  )
}

export default Pricing
