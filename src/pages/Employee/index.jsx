// Import Module ==================================================//
import { Link } from 'react-router-dom';
import DataTable from '../../components/DataTable';
// Import component ===============================================//
//import Hero from '../../components/Hero';
//import ArtistSection from '../../layouts/Artist';

// Import Styles ==================================================//

import scssEmployee from './employee.module.scss';

// Component ======================================================//
const Employee = () => {
  return (
    <main className={scssEmployee.employee}>
      <h1>Current Employees</h1>
      <DataTable />
    </main>
  );
};
export default Employee;
// Export component ===============================================//
