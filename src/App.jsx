import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './app.module.css';

export default function App() {
    const [data, setData] = useState([]);
    const [cart, setCartContent] = useState([]);

    const totalQuantity = cart.reduce((a, b) => a + b.quantity, 0);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/electronics');
                const data = await response.json();
                if (!response.ok) {
                    throw new Error('Error fetching data. Status: ', response.status)
                }
                setData(data);
            }
            catch {
                console.error(error);
            }
        }

        if (!ignore) {
            fetchData();
        }

        return () => {
            ignore = true;
        }
    }, [])

    return (
        <>
        <div className={styles.top}>
            <div className={styles.logo}>💣Kaboom</div>
            <nav className={styles.navigation}>
              <ul className={styles.linkList}>
                <li className={styles.link}><Link to='/'>Home</Link></li>
                <li className={styles.link}><Link to='/shop'>Shop</Link></li>
                <li className={styles.link}><Link to='cart'>Cart ({totalQuantity})</Link></li>
              </ul>
            </nav>
        </div>
        <Outlet context={[data, cart, setCartContent]}/>
        </>
    )
}