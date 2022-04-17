import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkoutId } = useParams();

    return (
        <div className='container'>
            <h3 className='text-center text-info my-lg-4 my-sm-3'>Welcome to Checkout Page</h3>
            <p>Check out {checkoutId}</p>
        </div>
    );
};

export default CheckOut;