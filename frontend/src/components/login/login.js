import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='form-container'>
            <form>
                <div className='row'>
                    <div className='col-5'>
                        <input type='text' name='username' className='form-control login-input' placeholder='Username' />
                        <br />
                        <span style={{ color: '#999999' }}><input type='checkbox' />Remember me</span>
                    </div>

                    <div className='col-5'>
                        <input type='password' name='password' className='form-control login-input' placeholder='Password' />
                        <br />
                        <a href='#' style={{ color: '#999999' }}>Forgot it?</a>
                    </div>


                    <div className='col-2'>
                        <input type="submit" value="Sign in" className="gr-button gr-button--dark login-btn" />
                    </div>


                </div> {/* ******** end of row ****** */}
            </form>
        </div>
    )
}