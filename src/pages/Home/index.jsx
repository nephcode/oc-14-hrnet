// Import Library =================================================//
//import { Link } from 'react-router-dom';
import { saveData } from '../../utils/db';

console.log(typeof saveData); // devrait afficher 'function' si saveData est une fonction

// Import component ===============================================//
//import Hero from '../../components/Hero';
//import ArtistSection from '../../layouts/Artist';
import FormEmployee from '../../components/FormH';
// Import Styles ==================================================//
import scssHome from './home.module.scss';

// Component ======================================================//
const Home = () => {
  console.log('saveData:', saveData); // vérifier que saveData est bien passé
  return (
    <main className={scssHome.home}>
      <h1>HR Net</h1>
      <FormEmployee db={saveData} />
    </main>
  );
};
export default Home;
// Export component ===============================================//
