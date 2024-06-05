import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
        <div className='top-bar'>
            <div className='logo'>💣Kaboom</div>
            <nav>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='cart'>Cart</Link></li>
              </ul>
            </nav>
        </div>
        <Outlet/>
        </>
    )
}