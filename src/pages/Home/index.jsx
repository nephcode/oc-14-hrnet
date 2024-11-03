// Import Library =================================================//
import { Link } from 'react-router-dom';

// Import component ===============================================//
//import Hero from '../../components/Hero';
//import ArtistSection from '../../layouts/Artist';
import FormEmployee from '../../components/FormH';
// Import Styles ==================================================//
import scssHome from './home.module.scss';

// Component ======================================================//
const Home = () => {
  return (
    <main className={scssHome.home}>
      <h1>HR Net</h1>
      <FormEmployee />
    </main>
  );
};
export default Home;
// Export component ===============================================//
