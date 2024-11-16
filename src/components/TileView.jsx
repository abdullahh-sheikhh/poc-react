import { useState } from 'react';
import { employees } from '../utils/data';
import Tile from './Tile';
import ExpandedTile from './ExplandedTile';

export default function TileView() {
    const [_employees, setEmployees] = useState(employees);
    const [expandedTile, setExpandedTile] = useState(null);

    return (
        <div>
            {expandedTile !== null && (
                <ExpandedTile
                    employee={expandedTile}
                    closeExpandedTile={() => {
                        setExpandedTile(null);
                    }}
                />
            )}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 m-5'>
                {_employees.map((employee, index) => (
                    <Tile
                        key={index}
                        employee={employee}
                        onClick={() => {
                            console.log(employee);
                            setExpandedTile(employee);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
