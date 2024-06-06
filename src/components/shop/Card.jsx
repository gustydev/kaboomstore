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
        <div className='rating' title={`Rated ${rating.rate} stars out of 5 (based on ${rating.count} ratings)`}>
            {stars} ({rating.count})
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

    function handleQuantity(e) {
        if (e.target.textContent === '-' && quantity > 1) {
            setQuantity(q => q - 1);
        } else if (e.target.textContent === '+') {
            setQuantity(q => q + 1);
        }
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} alt={title} src={image}></img>
            <div className={styles.title}>{title}</div>
            <Rating rating={rating} />
            <div className={styles.price}>${price}</div>
            <div className={styles.purchaseMenu}>
                <div className={styles.quantity}>
                    <button className={styles.quantityButton} onClick={(e) => handleQuantity(e)}>-</button>
                    <input className={styles.quantityInput} type="number" min='0' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}/>
                    <button className={styles.quantityButton} onClick={(e) => handleQuantity(e)}>+</button>
                </div>
                <button className={styles.addCartButton} onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}