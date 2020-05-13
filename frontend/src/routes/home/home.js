import React from 'react'
import './home.css'
import logo from '../../assets/header-logo.png'
import ad from '../../assets/ad.jpg'
import headline from '../../assets/headline.png'
import Signup from '../../components/signup/signup'
import Login from '../../components/login/login';
import Populars from '../../components/populars/populars';
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <div className='wrapper'>
             <div className='login-signup-container'>
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

                <hr className="solid" />

                <section className='row sec02'>
                    <div className='col-md-7 headline-wrapper'>
                        <img src={headline} alt="headline" className='headline' />
                    </div>

                    <div className='col-md-5 signup-wrapper'>
                        <Signup />
                    </div>
                </section>

                <section className='row sec03'>
                    <div className='col-md-7 '>
                        <Populars />
                        
                    </div>

                    <div className='col-md-5 '>
                    <img src={ad} alt="logo" className='ad' />
                    </div>
                </section>
                <div className="footer mt-2"><Footer/></div>

            </div>
            </div>

        </div>

    )
}

export default Home;