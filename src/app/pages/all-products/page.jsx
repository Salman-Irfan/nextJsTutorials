"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link';

const page = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/products');
                setProducts(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold my-8">Product List</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product._id} className="my-4 p-4 border rounded">
                            <h2 className="text-2xl font-bold">{product.name}</h2>
                            <p className="text-lg">Price: ${product.price}</p>
                            <p className="text-lg">Company: {product.company}</p>
                            <p className="text-lg">Color: {product.color}</p>
                            <p className="text-lg">Category: {product.category}</p>
                            <Link href={`/pages/${product._id}`} >
                                <button className="btn bg-green-300">Update Product</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default page