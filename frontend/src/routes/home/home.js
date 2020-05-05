import React from 'react'
import './home.css'
import logo from '../../assets/header-logo.png'
import headline from '../../assets/headline.png'
import background from '../../assets/background.jpg'
import Signup from '../../components/signup/signup'
import Login from '../../components/login/login';


const Home = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <section className='header'>
                    <div className='row'>
                        {/* **************** logo ***************** */}
                        <div className='col-md-6 logo-wrapper'>
                            <img src={logo} alt="logo" className='logo' />
                        </div>

                        {/* ******************* login wrapper **************** */}
                        <div className='col-md-6 login-wrapper'>
                            <Login />
                        </div>

                    </div>

                </section>

                <hr class="solid" />

                <section className='row body'>
                    <div className='col-md-7 headline-wrapper'>
                        <img src={headline} alt="headline" className='headline' />
                    </div>

                    <div className='col-md-5 signup-wrapper'>
                        <Signup />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;