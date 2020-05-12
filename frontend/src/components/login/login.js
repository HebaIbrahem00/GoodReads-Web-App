import React from 'react'
import './login.css'
import Modal from '../modal/modal'

import LoginForm from './loginForm'
import AuthService from '../../services/authService'


export default function Login() {

    const popupMsg = () => {        
        return (
            <>
                <Modal title='here' />
            </>
        )
    }
    const { handleChange, handleSubmit, values, errors } = LoginForm(submit);

    function submit(values) {
        AuthService.login(values)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                popupMsg()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='form-container'>

            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-5'>
                        <input type='text'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            className='form-control login-input'
                            placeholder='Email'
                        />
                        <br />
                        <span style={{ color: '#999999' }}><input type='checkbox' />Remember me</span>
                    </div>

                    <div className='col-5'>
                        <input type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            className='form-control login-input'
                            placeholder='Password'
                        />
                        <br />
                        <a href='/' style={{ color: '#999999' }}>Forgot it?</a>
                    </div>


                    <div className='col-2'>
                        <input type="submit" value="Sign in" className="gr-button gr-button--dark login-btn" />
                    </div>


                </div> {/* ******** end of row ****** */}
            </form>
        </div>
    )
}