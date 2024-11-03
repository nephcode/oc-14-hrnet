// Import Component =================================================//
import NavFloat from '../../components/Nav';

// Import Styles ====================================================//
import scssFooter from './footer.module.scss';

// Component =======================================================//
const Footer = () => {
  return (
    <footer className={scssFooter.footer}>
      <NavFloat />
      <p className={scssFooter.copyright}>OC 14 // HR NET - Youcodeuse </p>
    </footer>
  );
};
export default Footer;
// Export component ===============================================//
