import React, { Component } from 'react';
// import { authService } from '../../services/auth.service';


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    //validate form errors was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false)
    });

    return valid;
}

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            email: null,

            formErrors: {
                username: "",
                password: "",
                email: "",
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (formValid(this.state.formErrors)) {
            console.log("welcome");
            // authService.signup({email: values.email, password: values.password, username:values.username}).then(()=> console.log('welcome'))
            //.catch((err)=>{console.log(err)})
        } else {
            console.error("invalid");
        }
    };

    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "username":
                formErrors.username = value.length < 3 && value.length > 0 ? "minimum 3 charachters required" : "";
                break;
            case "email":
                formErrors.email = value.length < 3 && value.length > 0 ? "minimum 3 charachters required" : "";
                break;
            case "password":
                formErrors.password = value.length < 3 && value.length > 0 ? "minimum 3 charachters required" : "";
                break;
            default:
                break;
        }

    }

    render() {
        const { formErrors } = this.state;

        return (
            <div className="werapper">
                <div className="form-wrapper">

                    <h1>Create Account</h1>

                    {/* ************* signup form ************* */}
                    <form onSubmit={this.handleSubmit} noValidate>

                        {/* ************* username input ************* */}
                        <div className='username'>
                            <label htmlFor='username'>Username</label>
                            <input type="text" name="username" onChange={this.handleChange} placeholder="Username" noValidate />
                            {formErrors.username.length > 0 && (
                                <span className="errorMessage">{formErrors.username}</span>
                            )}
                        </div>

                        {/* ************* email input ************* */}
                        <div className='email'>
                            <label htmlFor='email'>email</label>
                            <input type="text" name="email" onChange={this.handleChange} placeholder="Email" noValidate />
                        </div>

                        {/* ************* password input ************* */}
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input type="password" name="password" onChange={this.handleChange} placeholder="Password" noValidate />
                        </div>


                        <div className='createAccount'>
                            <button type="submit">Create Account</button>
                            <small>Already have an account?</small>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
