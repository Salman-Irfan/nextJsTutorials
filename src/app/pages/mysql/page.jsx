import Navbar from '@/components/Navbar'
import Pagination from '@/components/Pagination'
import UserTable from '@/components/UserTable'
import React from 'react'

const page = () => {
    return (
        <>
            <Navbar/>
            <UserTable/>
            <Pagination/>
        </>
    )
}

export default page