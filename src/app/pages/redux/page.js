"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/slices/counterSlice'

const page = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Redux Toolkit</h1>
            {/* redux */}
            <div>
                <div>
                    <button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </>
    )
}

export default page