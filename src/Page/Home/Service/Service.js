import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, id, img, price, description } = service;
    const navigate = useNavigate();
    const handleNavigateService = id => {
        navigate(`/service/service${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3 className='mt-1'>{name}</h3>
            <p>Price ${price}</p>
            <p>{description}</p>
            <button onClick={() => handleNavigateService(id)} className='btn color-bg text-white'>{name}</button>
        </div>
    );
};

export default Service;