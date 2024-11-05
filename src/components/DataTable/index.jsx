// import styles from "./styles.module.css";
import scssTable from './table.module.scss';
import { useState } from 'react';
import { useTable } from '@tanstack/react-table';
import create from 'zustand';

// Define the store
const useStore = create((set) => ({
  data: [
    {
      firstName: 'Gaya',
      lastName: 'Cohenim',
      dateBirth: '2024-11-07',
      startMission: '2024-11-07',
      street: 'la URE',
      city: 'La street',
      location: 'IL',
      zipcode: '75',
      department: '2',
      id: 1,
    },
  ],
  setData: (newData) => set({ data: newData }),
}));

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Date of Birth',
    accessor: 'dateBirth',
  },
  {
    Header: 'Start Mission',
    accessor: 'startMission',
  },
  {
    Header: 'Street',
    accessor: 'street',
  },
  {
    Header: 'City',
    accessor: 'city',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Zipcode',
    accessor: 'zipcode',
  },
  {
    Header: 'Department',
    accessor: 'department',
  },
  {
    Header: 'ID',
    accessor: 'id',
  },
];
// Component =======================================================//

const DataTable = () => {
  const { data } = useStore();
  const [columns] = useState([
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Date of Birth',
      accessor: 'dateBirth',
    },
    {
      Header: 'Start Mission',
      accessor: 'startMission',
    },
    {
      Header: 'Street',
      accessor: 'street',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Zipcode',
      accessor: 'zipcode',
    },
    {
      Header: 'Department',
      accessor: 'department',
    },
    {
      Header: 'ID',
      accessor: 'id',
    },
  ]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <section className={scssTable.dataSet}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
export default DataTable;
// Export component ===============================================//
