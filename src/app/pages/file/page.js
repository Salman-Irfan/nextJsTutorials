"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const [file, setFile] = useState()
    const handleFileChange = (e) =>{
        console.dir(e.target)
        setFile(e.target.files?.[0])
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.set('file', file)
        const response = await axios.post(`http://localhost:3000/api/v1/upload`, formData)
        console.log(response)
    };
    return (
        <>
            <h1>upload file</h1>
            <form onSubmit={handleSubmit} >
                <input 
                    type="file" 
                    name="file" 
                    id="file"
                    onChange={handleFileChange}
                />
                <br />
                <button type="submit">Upload Image</button>
            </form>
        </>
    )
}

export default page