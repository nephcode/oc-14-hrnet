// IMPORT =============================================================

import scssHeader from './header.module.scss';
import Logo from '/logo.svg';
////import Hero from '../../components/Hero';

// Component ======================================================//
const Header = () => {
  return (
    <header className={scssHeader.header}>
      <div className={scssHeader.logo} ><image src={Logo} alt="logo" /></div>
      <p className={scssHeader.beta}>Wealth Health</p>
    </header>
  );
};
export default Header;
// Export component ===============================================//
