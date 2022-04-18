import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../components/Assets/error.jpg'

const NotFound = () => {
    return (
        <section className='container'>
            <h2 className='fw-bold text-center my-3'>Sorry!Your desire page is not Found.</h2>
            <div className='text-center'>  <img className='w-75' src={error} alt="" /></div>
        </section>
    )
}

export default NotFound