import React from 'react'
import './signup.css'

export default function Login() {
    return (

        <form>
            <div className='col-8'>
                <p> New here? Create a free account! </p>
                <input type='text' name='username' className='form-control signup-input' placeholder='Username' />
                <input type='text' name='email' className='form-control signup-input' placeholder='Email' />
                <input type='password' name='password' className='form-control signup-input' placeholder='Password' />
                <input type='submit' name='' className='btn text-brown form-group signup-btn' value='Sign up' />
            </div>
        </form>

    )
}