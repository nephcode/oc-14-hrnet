import React, { useState, useEffect } from 'react';
import EmployeeTable from './EmployeeTable';

const Employee = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch employee data from an API or other source
        fetch('/api/employees')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="employee">
            <h1>Employee List</h1>
            <EmployeeTable data={data} />
        </div>
    );
};

export default Employee;
