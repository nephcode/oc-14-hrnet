// Import Module ==================================================//
import { Link } from 'react-router-dom';

// Import component ===============================================//
//import Hero from '../../components/Hero';
//import ArtistSection from '../../layouts/Artist';

// Import Styles ==================================================//

import scssEmployee from './employee.module.scss';

// Component ======================================================//
const Employee = () => {
  return (
    <main className={scssEmployee.Employee}>
      <div>
        <h1>Page Employee </h1>
        <p>Page de gestion des employées</p>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </main>
  );
};
export default Employee;
// Export component ===============================================//
