import React, { useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';

function Login(props) {

    const [userType, setuserType] = useState('Login')
    const [Reset, setReset] = useState(false)

    const login = {
        name: yup.string().required(),
        email: yup.string().email(),
    };

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        {
                            userType === 'Login' ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                        }
                    </div>
                    <form classname="php-email-form">
                        <div classname="row flex-column align-items-center">
                            {
                                Reset ?
                                    <div className="col-md-4 mt-3 form-group m-auto">
                                        <input type="text"
                                            name="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                        />
                                        <div className="validate" />
                                    </div>
                                    :
                                    null
                            }
                            {
                                userType === 'Signup' ?
                                    <div className="col-md-4 mt-3 form-group m-auto">
                                        <input type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                        />
                                        <div className="validate" />
                                    </div>
                                    :
                                    null
                            }
                            <div className="col-md-4 mt-3 form-group m-auto">
                                <input type="text"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your email"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 mt-3 form-group m-auto">
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Your password"
                                    data-rule="minlen:4"
                                    data-msg="Please enter at least 4 chars"
                                />
                                <div className="validate" />
                            </div>
                        </div>
                        {
                            userType === 'Login' ?
                                <>
                                    <div className="text-center"><button className='appointment-btn border-0 m-0 mt-3' type="button">Login</button></div>
                                    <div className="text-center"><button className='appointment-btn border-0 m-0 mt-3' type="button" onClick={() => setReset(true)}>forgot password</button></div>
                                </>
                                :
                                <div className="text-center"><button className='appointment-btn border-0 m-0' type="button">Signup</button></div>
                        }
                        <div className='row'>
                            {
                                userType === 'Login' ?
                                    <div className='text-center pt-4'>
                                        <p>Create a new account</p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setuserType('Signup')}>Sign Up</button>
                                    </div>
                                    :
                                    <div className='text-center pt-4'>
                                        <p>Create a new account</p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setuserType('Login')}>Login</button>
                                    </div>
                            }
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Login;