// should rename to Checkout probably

import { useOutletContext } from "react-router-dom"

function Item( { id, title, quantity, price, image, handleQuantity, handleDelete }) {
    return (
        <div className='item'>
            <div className="title">{title}</div>
            <img src={image} alt={title} style={{width:'100px'}}/>
            <div className="quantity">{quantity}</div>
            <button onClick={(e) => handleQuantity(e, id)}>-</button>
            <button onClick={(e) => handleQuantity(e, id)}>+</button>
            <div className="price">${Math.round(quantity * price * 100) / 100}</div>
            <button onClick={() => handleDelete(id)}>delet this</button>
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
        }
    }

    return (
        <>
        {cart.map((i) => { 
            return <Item key={i.id} id={i.id} title={i.title} image={i.image} price={i.price} quantity={i.quantity} handleDelete={deleteItem} handleQuantity={changeQuantity}/>
        })}
        <div>Total: ${totalPrice}</div>
        <button onClick={() => setCartContent([])}>Checkout</button>
        </>
    )
}