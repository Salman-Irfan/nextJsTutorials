"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const page = (props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    let productId = props.params.productId

    useEffect(() => {
        getProductDetails()
    }, [])

    // api call to get product by id
    const getProductDetails = async () => {
        let result = await axios.get(`http://localhost:3000/api/v1/products/${productId}`)
        console.log(result)
        if (result.status === 200) {
            setName(result.data.data.name)
            setPrice(result.data.data.price)
            setCompany(result.data.data.company)
            setColor(result.data.data.color)
            setCategory(result.data.data.category)
        }
    }

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


    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        const userFormData = {
            name, price, company, color, category
        }
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/products/${productId}`, userFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container text-center mt-32 bg-blue-300">
                <h1>Edit Product</h1>
                <form className='py-4 my-4'>
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
                    <button className='bg-blue-900 px-8 py-2 my-2 rounded' type="button" onClick={handleUpdateProduct}>Update User</button>
                    <br />
                </form>
            </div>
        </>
    )
}

export default page