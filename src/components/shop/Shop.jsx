import Card from "./Card";
import { useOutletContext } from "react-router-dom";
import styles from './shop.module.css'

export default function Shop() {
    const [data, cart, setCartContent] = useOutletContext();

    if (data.length === 0) return 'Loading...'

    return (
        <div className={styles.cardContainer}>
            {data.map((i) => { 
                return <Card key={i.id} id={i.id} title={i.title} image={i.image} price={i.price} rating={i.rating} cart={cart} setCartContent={setCartContent}/>
            })}
        </div>
    )
}