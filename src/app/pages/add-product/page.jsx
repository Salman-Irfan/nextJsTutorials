"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleCompanyChange = (e) => {
        setCompany(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    const handleAddProduct = async (e) => {
        e.preventDefault()
        const productFormData = {
            name, price, company, color, category
        }
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/products`, productFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const handlePutApiCall = async (e) => {
        e.preventDefault()
        const userFormData = {
            name, email, password
        }
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/put-request/1`, userFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteApiCall = async (e) => {
        e.preventDefault()
        const userFormData = {
            name, email, password
        }
        try {
            const response = await axios.delete(`http://localhost:3000/api/v1/delete-request/1`, userFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="container text-center mt-32 bg-blue-300">
                <h1>Add User</h1>
                <form className='py-4 my-4' onSubmit={handleAddProduct} >
                    <input className='my-4'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Name'
                        value={name}
                        onChange={handleNameChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <input className='my-4'
                        type="text"
                        name="price"
                        id="price"
                        placeholder='price'
                        value={price}
                        onChange={handlePriceChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <input className='my-4'
                        type="text"
                        name="company"
                        id="company"
                        placeholder='company'
                        value={company}
                        onChange={handleCompanyChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <input className='my-4'
                        type="text"
                        name="color"
                        id="color"
                        placeholder='color'
                        value={color}
                        onChange={handleColorChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <input className='my-4'
                        type="text"
                        name="category"
                        id="category"
                        placeholder='category'
                        value={category}
                        onChange={handleCategoryChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <button className='bg-green-900 px-8 py-2 rounded' type="submit">Add Product</button>
                    <br />
                    <button className='bg-blue-900 px-8 py-2 my-2 rounded' type="button" onClick={handlePutApiCall}>Update User</button>
                    <br />
                    <button className='bg-red-700 px-8 py-2 my-2 rounded' type="button" onClick={handleDeleteApiCall}>Delete User</button>
                </form>
            </div>
        </>
    )
}

export default page