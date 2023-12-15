import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gradient-to-r from-gray-800 to-gray-900 p-4">
                <div className="container mx-auto flex items-center justify-between">
                    {/* App Name */}
                    <div className="text-white text-xl font-bold">Next.js with MySQL</div>

                    {/* Search Input */}
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Search user..."
                            className="p-2 rounded-md bg-gray-700 text-white"
                        />

                        {/* Delete Button */}
                        <button className="bg-red-500 text-white p-2 rounded-md">Delete</button>

                        {/* Add New User Button */}
                        <button className="bg-green-500 text-white p-2 rounded-md">Add New User</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar