// Code: NavFloat component ========================================//

// Import Library ==================================================//
import navData from './nav.json';

// Import Styles ===================================================//

// Component =======================================================//
const NavFloat = () => {
  return (
    <nav className="nav-float">
      <ul>
        {navData.map((item) => (
          <li key={item.id}>
            {item.name}
            {item.emoji}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavFloat;
// Export component ===============================================//
