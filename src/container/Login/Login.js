import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";
import { Formik, Form, useFormik } from "formik";

function Login(props) {
  const [userType, setUserType] = useState("Login");
  //   const [Reset, setReset] = useState(false);

  const login = {
    email: yup
      .string()
      .email("please enter valid email")
      .required("please enter email"),
    password: yup.string().required("please enter password"),
  };

  let schema = yup.object().shape(login);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   console.log(formik.errors.email);

  return (
    <main id="main">
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {
            userType === "" ? 
              <h2>Forgot Password</h2>
             : userType === "Login" ? 
              <h2>Login</h2>
             : 
              <h2>Sign Up</h2>
            }
          </div>
            <Formik value={formik}>
                <Form onSubmit={formik.handleSubmit} classname="php-email-form">
                <div classname="row flex-column align-items-center">
                    { 
                        userType === 'forgotPassword' ?
                        <div className="col-md-4 mt-3 form-group m-auto">
                        <input
                        type="text"
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
                {userType === "Signup" ? 
                    <div className="col-md-4 mt-3 form-group m-auto">
                        <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        />
                        <div className="validate" />
                    </div>
                    :
                    null
                }
                {
                    (userType === 'Login' || userType === 'Signup') ?
                    <>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                            onChange={formik.handleChange} />
                            {
                                formik.errors.email ? <p>{formik.errors.email}</p>
                                    :
                                    null
                            }
                            <div className="validate" />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="password"
                            className="form-control"
                            name="password" id="password"
                            placeholder="Password"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                            onChange={formik.handleChange} />
                            {
                                formik.errors.password ? <p>{formik.errors.password}</p>
                                    :
                                    null
                            }
                            <div className="validate" />
                        </div>
                    </>
                    :
                    null
                }
                </div>
              {
              userType === "forgotPassword" ? 
                <>
                    <div className="text-center"><button className='appointment-btn border-0 m-0' type="button">Send OTP</button></div>
                    <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button" onClick={() => setUserType('Login')}>Login</button></div>
                </>
                 :
                userType === 'Login' ?
                    <>
                        <div className="text-center"><button className='appointment-btn border-0 m-0' type="submit">Login</button></div>
                        <div className="text-center"><button className='appointment-btn border-0 ms-0 mt-3' type="button"  onClick={() => setUserType('forgotPassword')} >Forgot Password</button></div>
                        <div className='text-center pt-4'>
                        <p>Create a new account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Signup')}>Sign Up</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="text-center"><button className='appointment-btn border-0 m-0' type="submit">Sign Up</button></div>
                    <div className='text-center pt-4'>
                        <p>Already have an account </p><button className='appointment-btn border-0 m-0' type="button" onClick={() => setUserType('Login')}>Login</button>
                    </div>
                    </>
                }
                </Form>
            </Formik>
        </div>
      </section>
    </main>
  );
}
export default Login;
