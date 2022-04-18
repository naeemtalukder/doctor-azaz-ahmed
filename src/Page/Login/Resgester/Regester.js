import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Regester.css';

const Regester = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    const handleRegester = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='container w-50 mx-auto'>
            <div className='regester-form'>
                <h3 className='text-center text-info my-4'>Please Regester</h3>
                <form onSubmit={handleRegester}>
                    <input type="text" name="name" id="" placeholder='Type Your Name' />

                    <input type="email" name="email" id="" placeholder='Enter Email' required />

                    <input type="password" name="password" id="" placeholder='Enter Password' required />
                    <input className='btn btn-info' type="submit" value="Regester" />
                </form>
                <p>Already have an accound? <Link to='/login' className='text-decoration-none text-primary pe-auto'
                    onClick={navigateLogin}>Please Login</Link></p>
            </div>
        </div>
    );
};

export default Regester;