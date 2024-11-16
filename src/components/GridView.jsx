import { useState } from 'react';
import { employees } from '../utils/data';
import './GridView.css';

export default function GridView() {
    const [_employees, setEmployees] = useState(employees);

    return (
        <div className=''>
            <div className='mt-10 border border-black rounded-xl w-fit h-fit m-auto'>
                <table className=''>
                    <thead className='bg-black text-white'>
                        <th className='rounded-tl-xl'>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Designation</th>
                        <th>Phone No.</th>
                        <th>Reports to</th>
                        <th>DOB</th>
                        <th className='rounded-tr-xl'>Address</th>
                    </thead>
                    <tbody className='bg-white'>
                        {_employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.department}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.phoneNo}</td>
                                <td>{employee.reportsTo}</td>
                                <td>{employee.dob}</td>
                                <td>{employee.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
