import styles from './shop.module.css';
import { useState } from 'react';

function Rating( {rating} ) {
    const starNum = Math.round(rating.rate);
    const blackStar = '★';
    const whiteStar = '☆'

    let stars = '';

    for (let i = 0; i < starNum; i++) {
        stars += blackStar;
    }
    
    while (stars.length < 5) {
        stars += whiteStar;
    }

    return (
        <div className='rating'>
            <span title={`${rating.rate} / 5`}>{stars}</span> ({rating.count})
        </div>
    )
}

export default function Card( { id, title, image, price, rating, cart, setCartContent } ) {
    const [quantity, setQuantity] = useState(0);

    function addToCart() {
        if (quantity <= 0 || !Number.isInteger(quantity)) {
            return;
        }

        if (!(cart.find(item => item.id === id))) {
            const newCart = [...cart];
            newCart.push({id: id, title: title, price: price, quantity: quantity, image: image});
            setCartContent(newCart);
        } else {
            const newCart = [...cart];
            const updated = newCart.find(i => i.id === id);
            updated.quantity += quantity;
            setCartContent(newCart)
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <img className={styles.image} alt={title} src={image}></img>
            <div className={styles.price}>${price}</div>
            <Rating rating={rating} />
            <div className='cartMenu'>
                <input type="number" min='0' onChange={(e) => setQuantity(Number(e.target.value))}/>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}