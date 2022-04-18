import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <div className='container'>
                <h3 className='text-center text-info my-lg-4 my-sm-3'>Welcome to Checkout Page</h3>
                <h4 className='text-center'>Service Id: {serviceId}</h4>
                <div className="text-center">
                    <Link to="/checkout">
                        <button className='btn btn-info'>Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;