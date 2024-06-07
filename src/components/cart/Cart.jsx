import { useOutletContext, Link } from "react-router-dom"
import styles from './cart.module.css';
import mainStyles from '/src/app.module.css';

function Item( { id, title, quantity, price, image, handleQuantity, handleDelete }) {
    return (
        <div className={styles.item}>
            <img className={styles.image} src={image} alt={title}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>${Math.round(quantity * price * 100) / 100}</div>
            <div className={styles.quantityMenu}>
                <button className={mainStyles.quantityButton} onClick={(e) => handleQuantity(e, id)}>-</button>
                <input className={mainStyles.quantityInput} type="number" min='0' value={quantity} onChange={(e) => handleQuantity(e, id)}/>
                <button className={mainStyles.quantityButton} onClick={(e) => handleQuantity(e, id)}>+</button>
            </div>
            <button className={mainStyles.orangeButton + ' ' + styles.delete} onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default function Cart() {
    const [data, cart, setCartContent] = useOutletContext();

    const totalPrice = Math.round(cart.reduce((a, b) => a + (b.quantity * b.price), 0) * 100) / 100;

    function deleteItem(id) {
        const newCart = [...cart].filter(i => i.id !== id);
        setCartContent(newCart);
    }

    function changeQuantity(e, id) {
        const newCart = [...cart];
        const item = newCart.find(i => i.id === id);

        if (e.target.textContent === '-' && item.quantity > 1) {
            item.quantity -= 1;
            setCartContent(newCart);
        } else if (e.target.textContent === '+') {
            item.quantity += 1;
            setCartContent(newCart);
        } else {
            const value = Number(e.target.value);
            if (value >= 0 && Number.isInteger(value)) {
                item.quantity = Number(e.target.value);
                setCartContent(newCart);
            }
        }
    }

    function checkout() {
        setCartContent([]);
        alert('Order placed! Thanks for choosing Kaboom!')
    }

    if (cart.length === 0) {
        return (
            <div className={styles.noItems}>
                <div className={styles.msgLarge}>Nothing to see here...</div>
                <div className={styles.msgSmall}>Why not do some shopping?</div>
                <Link to='/shop'><button className={mainStyles.orangeButton}>Go to shop</button></Link>
            </div>
        )
    }
    return (
        <div className={styles.cart}>
            <div className={styles.items}>
            {cart.map((i) => { 
                return <Item key={i.id} id={i.id} title={i.title} image={i.image} price={i.price} quantity={i.quantity} handleDelete={deleteItem} handleQuantity={changeQuantity}/>
            })}
            </div>
            <div className={styles.checkout}>
                <div className={styles.total}>Total: ${totalPrice}</div>
                <button className={mainStyles.orangeButton} onClick={() => checkout()}>Checkout</button>
            </div>
        </div>
    )
}