import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import './Tile.css';

export default function Tile(props) {
    const [employee, setEmployee] = useState(props.employee);
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div
            className='bg-white shadow-lg rounded-xl cursor-pointer'
            onClick={props.onClick}
        >
            <div className='row relative'>
                <span>
                    {employee.id} - {employee.firstName} {employee.lastName}
                </span>
                <FaBars
                    className='cursor-pointer'
                    onClick={() => {
                        setShowDropDown(!showDropDown);
                    }}
                />
                {showDropDown && (
                    <div className='absolute right-3 top-8 z-10 w-fit flex flex-col bg-gray-100 shadow-2xl rounded-lg'>
                        <button className='rounded-t-lg'>Flag</button>
                        <button>Edit</button>
                        <button className='rounded-b-lg'>Delete</button>
                    </div>
                )}
            </div>
            <div className='row'>
                <span className='text-sm font-semibold'> Designation: </span>
                <span className='text-md font-medium'>
                    {employee.designation}
                </span>
            </div>
            <div className='row'>
                <span className='text-sm font-semibold'>Department: </span>
                <span className='text-md font-medium'>
                    {employee.department}
                </span>
            </div>
        </div>
    );
}
