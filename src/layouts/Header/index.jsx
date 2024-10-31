// IMPORT =============================================================

import scssHeader from './header.module.scss';
import Logo from '/favicon.svg';

// Component ======================================================//
const Header = () => {
  return (
    <header className={scssHeader.header}>
      <div className={scssHeader.logo}><img src={Logo} alt="logo" /></div>
      <div><p className={scssHeader.title}>Wealth Health</p></div>
    </header>
  );
};
export default Header;
// Export component ===============================================//
