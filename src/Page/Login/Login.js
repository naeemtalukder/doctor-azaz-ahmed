import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/');
    }
    const handleSubmit = event => {
        event.preventDefault('');
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegester = event => {
        navigate('/regester');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-info my-4'>Please login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="info" type="submit">
                    Submit
                </Button>
                <p>New to user? <Link to='/regester' className='text-decoration-none text-primary pe-auto'
                    onClick={navigateRegester}>Regester Now</Link></p>
            </Form>
        </div >
    );
};

export default Login;