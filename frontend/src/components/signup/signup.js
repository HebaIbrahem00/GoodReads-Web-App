import React from 'react';
import './signup.css';
import AuthService from '../../services/authService'


import SignupForm from './signupForm'

export default function Signup() {
    const { handleChange, handleSubmit, values, errors } = SignupForm(submit);

    function submit(values) {
        console.log(values);
        AuthService.signup(values)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='col-8'>
                <p> New here? Create a free account! </p>

                {/* *************** usename input **************  */}
                <input type='text'
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                    className={`form-control signup-input ${errors.username && 'inputError'}`}
                    placeholder='Username'
                />
                {errors.username && <p className="error">{errors.username}</p>}

                {/* *************** email input **************  */}
                <input type='text'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    className='form-control signup-input'
                    placeholder='Email'
                />
                {errors.email && <p className="error">{errors.email}</p>}

                {/* *************** password input **************  */}
                <input type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    className='form-control signup-input'
                    placeholder='Password'
                />
                {errors.password && <p className="alert alert-danger">{errors.password}</p>}


                <input type='submit'
                    // onSubmit={z}
                    name='' className='btn text-brown form-group signup-btn'
                    value='Sign up'
                />
            </div>
        </form>
    )
}