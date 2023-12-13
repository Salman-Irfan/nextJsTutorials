"use client"
import React, { useState } from 'react'

const page = () => {
    const [file, setFile] = useState()
    const handleFileChange = (e) =>{
        console.dir(e.target)
        setFile(e.target.files?.[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Submit')
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