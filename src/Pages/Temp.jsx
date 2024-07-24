import React, { useState } from 'react'

const Temp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const data = [
        { name: 'John Doe', age: 25, country: 'USA' },
        { name: 'Jane Smith', age: 30, country: 'Canada' },
        { name: 'Sam Brown', age: 22, country: 'UK' },
    ];

    console.log(data)

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.age.toString().includes(searchTerm) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Temp;