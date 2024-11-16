import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import './Tile.css';

export default function ExpandedTile(props) {
    const [employee, setEmployee] = useState(props.employee);

    return (
        employee !== null && (
            <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-20 overflow-hidden'>
                <div className='w-full sm:mx-20 bg-white shadow-lg rounded-xl border-black p-5'>
                    <div className='row relative'>
                        <span>
                            {employee.id} - {employee.firstName}{' '}
                            {employee.lastName}
                        </span>
                        <IoClose
                            className='cursor-pointer'
                            onClick={props.closeExpandedTile}
                        />
                    </div>
                    {Object.entries(employee).map(([key, value]) => (
                        <div className='row' key={key}>
                            <span className='text-sm font-semibold capitalize'>
                                {key}:
                            </span>
                            <span className='text-md font-medium'>{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
}
