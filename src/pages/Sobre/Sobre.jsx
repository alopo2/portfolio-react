import profile from '../../assets/profile.svg'
import styles from './sobre.module.css'

function Sobre () {
    return(
        <>
        <div className={styles.header}>
            <h1>Sobre</h1>
            <img src={profile} />
        </div>

        <div className={styles.paragrafo}>
            <p>Um cadin sobre mim: </p>
            <p>
                Eu me chamo Ângela, e fiz transição de carreira para tecnologia. 
                Tenho interesse em desenvolvimento front e back-end.E, estou constantemente, estudando
                novas ferramentas, para melhorar o meu trabalho, e adquirir novos conhecimentos.
            </p>
        </div>
        </>
        
    )
}

export default Sobre