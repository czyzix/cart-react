import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>TACO-CART</h1>
            <div className="links">
                <Link to="/">SHOP</Link>
                <Link to="/cart">CART</Link>
            </div>
        </div>
     );
}
 
export default Navbar;