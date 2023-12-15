import React from 'react';

const Pagination = () => {
    return (
        <div className="flex items-center justify-center mt-8">
            <button className="bg-blue-500 text-white p-2 rounded-md mx-1">1</button>
            <button className="bg-blue-500 text-white p-2 rounded-md mx-1">2</button>
            <button className="bg-blue-500 text-white p-2 rounded-md mx-1">3</button>
            {/* Add more buttons as needed */}
        </div>
    );
};

export default Pagination;
