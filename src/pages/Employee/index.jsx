// Import Module ==================================================//
import { Link } from 'react-router-dom';
// import DataTable from '../../components/DataTable';
// Import component ===============================================//
//import Hero from '../../components/Hero';
//import ArtistSection from '../../layouts/Artist';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { useState } from 'react';
// Import Styles ==================================================//

import scssEmployee from './employee.module.scss';

const EmployeeTableColumns = () => {
  return [
    { name: 'First Name', selector: (row) => row.firstName, sortable: true },
    { name: 'Last Name', selector: (row) => row.lastName, sortable: true },
    { name: 'Start Date', selector: (row) => row.startDate, sortable: true },
    { name: 'Department', selector: (row) => row.department, sortable: true },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: 'Street', selector: (row) => row.street, sortable: true },
    { name: 'City', selector: (row) => row.city, sortable: true },
    { name: 'State', selector: (row) => row.state, sortable: true },
    { name: 'Zip Code', selector: (row) => row.zipCode, sortable: true },
  ];
};

// Component ======================================================//
const Employee = () => {
  const employeeList = useSelector((state) => state.user.employeeList);

  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer la liste des employés en fonction du terme de recherche
  const filteredEmployees = employeeList.filter((employee) =>
    Object.values(employee).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
  };

  return (
    <main className={scssEmployee.employee}>
      <h1>Current Employees</h1>
      <div className="entries-dropdown">
        <label htmlFor="entries">Show </label>
        <select
          id="entries"
          value={entriesPerPage}
          onChange={handleEntriesChange}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span> entries</span>
      </div>
      <div className="search-bar">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <DataTable
        columns={EmployeeTableColumns()}
        data={filteredEmployees}
        pagination
        paginationPerPage={entriesPerPage}
      />
    </main>
  );
};
export default Employee;
// Export component ===============================================//
