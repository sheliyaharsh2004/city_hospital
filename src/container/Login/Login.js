import React, { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";

function Login(props) {
  const [userType, setUserType] = useState("Login");
  // const [Reset, setReset] = useState(false)

  let login = {
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter email"),
    password: yup
      .string()
      .required("Please enter password"),
  };

  let Signup = {
    name: yup
      .string()
      .required("Please enter your name"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter email"),
    password: yup
      .string()
      .required("Please enter password"),
  };

  let resetpass = {
    email: yup.string().email("Please enter valid email").required("Please enter email")
  };

  let schema, initialVal;

  if (userType === "Login") {
    schema = yup.object().shape(login);
    initialVal = {
      email: "",
      password: "",
    };
  } else if (userType === "Signup") {
    schema = yup.object().shape(Signup);
    initialVal = {
      name: "",
      email: "",
      password: "",
    };
  } else if (userType === "forgotPassword") {
    schema = yup.object().shape(resetpass);
    initialVal = {
      email: ""
    };
  }

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (userType === "Login") {
        // console.log("Successfully Login");
        sessionStorage.setItem("user", "1");
      } else if (userType === "Signup") {
        console.log("Successfully Login");
      } else if (userType === "forgotPassword") {
        console.log("Successfully otp");
      }
    },
  });
  return (
    <main id="main">
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {userType === "" ? (
              <h2>Forgot Password</h2>
            ) : userType === "Login" ? (
              <h2>Login</h2>
            ) : (
              <h2>Sign Up</h2>
            )}
          </div>
          <Formik values={formik}>
            <Form onSubmit={formik.handleSubmit} className="php-email-form">
              <div className="row flex-column align-items-center">
                {userType === "forgotPassword" ? (
                  <div className="col-md-4 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                    />
                    {
                      formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null
                    }
                  </div>
                ) : null}
                {userType === "Signup" ? (
                  <div className="col-md-4 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      onChange={formik.handleChange}
                    />
                    {
                      formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null
                    }
                  </div>
                ) : null}
                {userType === "Login" || userType === "Signup" ? (
                  <>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.email ? <p className='error'>{formik.errors.email}</p>
                       : null}
                      <div className="validate" />
                    </div>
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Password"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        onChange={formik.handleChange}
                      />
                      {formik.errors.password ? (
                        <p className='error'>{formik.errors.password}</p>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </div>

              {userType === "forgotPassword" ? (
                <>
                  <div className="text-center">
                    <button
                      className="appointment-btn border-0 m-0"
                      type="button"
                    >
                      Send OTP
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className="appointment-btn border-0 ms-0 mt-3"
                      type="submit"
                      onClick={() => setUserType("Login")}
                    >
                      Login
                    </button>
                  </div>
                </>
              ) : userType === "Login" ? (
                <>
                  <div className="text-center">
                    <button
                      className="appointment-btn border-0 m-0"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      className="appointment-btn border-0 ms-0 mt-3"
                      type="button"
                      onClick={() => setUserType("forgotPassword")}
                    >
                      Forgot Password
                    </button>
                  </div>
                  <div className="text-center pt-2">
                    <p>Create a new account </p>
                    <button
                      className="appointment-btn border-0 m-0"
                      type="button"
                      onClick={() => setUserType("Signup")}
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <button
                      className="appointment-btn border-0 m-0"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div className="text-center pt-2">
                    <p>Already have an account </p>
                    <button
                      className="appointment-btn border-0 m-0"
                      type="button"
                      onClick={() => setUserType("Login")}
                    >
                      Login
                    </button>
                  </div>
                </>
              )}
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
}
export default Login;
