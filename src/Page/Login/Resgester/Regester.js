import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Regester.css';
import auth from '../../../Firebase/Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Regester = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    let errorElement;
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }
    if (user) {
        console.log('user', user);
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/');
    }
    return (
        <div className='container w-50 mx-auto' style={{ height: '460px' }}>
            <div className='regester-form'>
                <h3 className='text-center text-info my-4'>Please Regester</h3>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Type Your Name' />

                    <input type="email" name="email" id="" placeholder='Enter Email' required />

                    <input type="password" name="password" id="" placeholder='Enter Password' required />
                    <input className='btn btn-info' type="submit" value="Regester" />
                    {errorElement}
                </form>
                <p className="mx-5">Already have an accound? <Link to='/login' className='text-decoration-none text-primary pe-auto'
                    onClick={navigateLogin}>Please Login</Link></p>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Regester;