import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", { name, email, password });
      if (response.status === 200) {

        Swal.fire({
          icon: 'success',
          title: 'SignUp Successful...',
          showConfirmButton: false,
          timer: 1500
        });
        const { token } = response.data;
        console.log("Sign Up Token ");
        console.log(response.data);
        sessionStorage.setItem('authToken', token);
        navigate('/signin');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error, Creating User.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'SignUp Failed.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return (
    <>
      <div className="signup-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
        marginLeft: '30%',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to bottom, #FECA04 0%, #007bff 100%)',
        color: 'white',
        maxWidth: '580px',
        width: '90%',
        textAlign: 'center'
      }}>
        <h2>Welcome to Blogging Platform</h2>
        <p>Join the Blogging Platform community !.</p>

        <div className="form-container" style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px',
          marginTop: '20px'
        }}>
          <h2 style={{
            color: '#007BFF',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold'
          }}>Sign Up</h2>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', color: '#333', marginBottom: '5px', marginRight: '100%' }}>Name</label>
            <input
              id="name"
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder='Enter your name'
              className='form-control'
              style={{
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', color: '#333', marginBottom: '5px', marginRight: '100%' }}>Email</label>
            <input
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder='Enter your email'
              className='form-control'
              style={{
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', color: '#333', marginBottom: '5px', marginRight: '100%' }}>Password</label>
            <input
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder='Enter your password'
              className='form-control'
              style={{
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div className="form-group" style={{ textAlign: 'center' }}>
            <button
              onClick={signUp}
              className='btn btn-primary'
              style={{
                backgroundColor: '#007BFF',
                borderColor: '#007BFF',
                borderRadius: '5px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                border: 'none',
                marginTop: '20px'
              }}
            >
              Sign Up
            </button>
            <div style={{ marginTop: '10px' }}>
              <Link to='/' style={{ color: '#6447C7', textDecoration: 'none' }}>
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
