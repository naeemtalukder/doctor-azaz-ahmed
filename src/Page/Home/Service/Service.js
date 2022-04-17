import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, img, price, description } = service;
    const navigate = useNavigate();
    const handleNavigateCheckOut = id => {
        navigate(`/service/service${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3 className='mt-1'>{name}</h3>
            <p>Price ${price}</p>
            <p>{description}</p>
            <button onClick={() => handleNavigateCheckOut(id)} className='btn btn-info'>{name}</button>
        </div>
    );
};

export default Service;