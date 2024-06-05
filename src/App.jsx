import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
        <div className='top-bar'>
            <div className='logo'>💣Kaboom</div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='cart'>Cart ({totalQuantity})</Link></li>
              </ul>
            </nav>
        </div>
        <Outlet context={[data, cart, setCartContent]}/>
        </>
    )
}