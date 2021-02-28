import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JonathaGomes.png" alt="Imagem de perfil"/>
      <div>
        <strong>Jonatha Gomes</strong>
        <p>
          <img src="icons/level.svg" alt="Nível do usuário"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}