"use client"
// components/UserTable.jsx
import React from 'react';
import User from './User';


const UserTable = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        // Add more dummy data as needed
    ];

    const handleEdit = (id) => {
        // Handle edit action
        console.log(`Edit user with ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Handle delete action
        console.log(`Delete user with ID: ${id}`);
    };

    return (
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Sr#</th>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Email</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User
                        key={user.id}
                        sr={user.id}
                        name={user.name}
                        email={user.email}
                        onEdit={() => handleEdit(user.id)}
                        onDelete={() => handleDelete(user.id)}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
