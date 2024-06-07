import { Link } from "react-router-dom"
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.messageContainer}>
                <div className={styles.msgLarge}>Welcome to Kaboom!</div>
                <div className={styles.msgSmall}>Here, we have the most explosive deals on the electronics market!</div>
                <Link to='/shop' className={styles.button}><button>Shop now</button></Link>
            </div>
            <div className={styles.credits}>Photo by <a href="https://unsplash.com/pt-br/@alexkixa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexandre Debiève</a> on <a href="https://unsplash.com/pt-br/fotografias/fotografia-macro-da-placa-de-circuito-preta-FO7JIlwjOtU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>
        </div>
    )
}