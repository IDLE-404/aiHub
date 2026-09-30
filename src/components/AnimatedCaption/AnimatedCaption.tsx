import { useEffect, useState } from 'react'
import styles from './AnimatedCaption.module.css'

type AnimatedCaptionProps = {
  text: string
  className?: string
}

const AnimatedCaption = ({ text, className = '' }: AnimatedCaptionProps) => {
  const words = text.split(' ')
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWord((current) => (current + 1) % words.length)
    }, 500)

    return () => clearInterval(timer)
  }, [words.length])

  return (
    <p className={`${styles.caption} ${className}`}>
      {words.map((word, index) => (
        <span key={index} className={index === activeWord ? styles.wordActive : ''}>
          {word}{' '}
        </span>
      ))}
    </p>
  )
}

export default AnimatedCaption
