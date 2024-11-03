// Code: NavFloat component ========================================//

// Import Library ==================================================//
import { Link } from 'react-router-dom';
import navData from './nav.json';

// Import Styles ===================================================//
import scssNav from './nav.module.scss';
// Component =======================================================//
const NavFloat = () => {
  return (
    <nav className={scssNav.nav}>
      <ul>
        {navData.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>
              {item.name}
              {item.emoji}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavFloat;
// Export component ===============================================//
