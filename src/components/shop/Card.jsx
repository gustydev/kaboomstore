import styles from './shop.module.css';

export default function Card( { title, image, price, rating } ) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <img className={styles.image} alt={title} src={image}></img>
            <div className={styles.price}>${price}</div>
            <div className="rating">{rating.rate}/5 ({rating.count})</div>
        </div>
    )
}