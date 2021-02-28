import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'


export function Countdown() {
  const { 
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado &nbsp; <img src="icons/check.svg" alt=""/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
            onClick={resetCountdown}
            >
              Abandonar ciclo
              <object type="image/svg+xml" data="icons/close.svg" />
            </button>
          ) : (
            <button type="button" onClick={startCountdown} className={styles.countdownButton}>
              Iniciar um ciclo  &nbsp; <img src="icons/play.svg" alt="Icone de play"/>
            </button>
          )}
        </>
      )}      
      
    </div>
  )
}