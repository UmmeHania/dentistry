import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { title, img, desc, price } = service;
    return (
        <div className='service h-100'>
            <img src={img} alt="" />
            <h3 className='fw-bold'>{title}</h3>
            <p>{desc}</p>
            <h4>{price}</h4>
            <Link to='/checkout'><Button variant="primary">Details</Button></Link>

        </div>
    );
};

export default Service;