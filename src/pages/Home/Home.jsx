import styles from './home.module.css'
import programmer from '../../assets/programmer.svg'

function Home () {
    return(
        <div className={styles.header}>
            <h1>
                Seja bem-vindes ao meu portfólio em React.
            </h1>
            <img src={programmer} />
        </div>
    )
}

export default Home