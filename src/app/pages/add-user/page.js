"use client"
import React, { useState } from 'react'
import axios from 'axios'
const page = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleAddUser = async (e) => {
        e.preventDefault()
        const userFormData = {
            name, email, password
        }
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/post-request`, userFormData)
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
                <form className='py-4 my-4' onSubmit={handleAddUser} >
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
                        type="email"
                        name="email"
                        id="email"
                        placeholder='email'
                        value={email}
                        onChange={handleEmailChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <input className='my-4'
                        type="password"
                        name="password"
                        id="password"
                        placeholder='password'
                        value={password}
                        onChange={handlePasswordChange}
                        style={{ color: 'blue' }} // Set the text color to blue
                    />
                    <br />
                    <button className='bg-green-900 px-8 py-2' type="submit">Add User</button>
                    <br />
                    <button className='bg-green-900 px-8 py-2 my-2' type="button" onClick={handlePutApiCall}>Update User</button>
                    <br />
                    <button className='bg-green-900 px-8 py-2 my-2' type="button" onClick={handleDeleteApiCall}>Delete User</button>
                </form>
            </div>
        </>
    )
}

export default page