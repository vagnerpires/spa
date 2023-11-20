// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
          <ul>
              <li><Link to="/spa">Home</Link></li>
              <li><Link to="/spa/products">Products</Link></li>
              <li><Link to="/spa/contact">Contact</Link></li>
          </ul>
  </nav>
  );
}

export default Navbar;