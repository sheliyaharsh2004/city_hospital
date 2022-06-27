import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import InputBox from "../../components/InputBox/InputBox";

function Contact(props) {
    const [date, setDate] = useState([]);

  let schema = yup.object().shape({
    name: yup.string("Please enter your name").required("Please enter your name"),
    email: yup.string() .email("Please enter Valid email").required("Please enter your email"),
    subject: yup.string().required("Please enter your subject"),
    message: yup.string().required("Please enter your message"),
  });

  const formik = useFormik({
    initialValues: {
      id: Math.floor(Math.random() * 1000),
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm })  => {
        
        let data = JSON.parse(localStorage.getItem("contact"));

        if (data == null) {
          localStorage.setItem("contact", JSON.stringify([values]));
        } else {
          data.push(values);
          localStorage.setItem("contact", JSON.stringify(data));
        }

        resetForm();
    },
  });



  return (
    <main id="main">
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
              Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
              aliquam eget nibh eu euismod. Donec dapibus blandit quam volutpat
              sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet
              aliquet rhoncus quis, luctus at neque. Mauris sit amet massa sed
              orci vehicula facilisis.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p> F-505, Inovative Plazza New Delhi, India</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>cityhospital@example.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+91 9988776655</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
                <Formik value={formik}>
                    <Form key={formik} onSubmit={formik.handleSubmit}>
                        <div className="row">
                          <div className="col-md-6 form-group">
                            <InputBox
                              type="text"
                              name="name"
                              className="form-control"
                              id="name"
                              placeholder="Your Name"
                              value={formik.values.name}
                              required
                              onChange={formik.handleChange}
                            />
                            {formik.errors.name ? (
                              <p className="errors">{formik.errors.name}</p>
                            ) : null}
                          </div>
                          <div className="col-md-6 form-group mt-3 mt-md-0">
                            <InputBox
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Your Email"
                              value={formik.values.email}
                              required
                              onChange={formik.handleChange}
                            />
                            {formik.errors.email ? (
                              <p className="errors">{formik.errors.email}</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-group mt-3">
                          <InputBox
                            type="text"
                            className="form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            value={formik.values.subject}
                            required
                            onChange={formik.handleChange}
                          />
                          {formik.errors.subject ? (
                            <p className="errors">{formik.errors.subject}</p>
                          ) : null}
                        </div>
                        <div className="form-group mt-3">
                          <InputBox
                            className="form-control"
                            name="message"
                            rows={5}
                            placeholder="Message"
                            value={formik.values.message}
                            required
                            defaultValue={""}
                            onChange={formik.handleChange}
                          />
                          {formik.errors.message ? (
                            <p className="errors">{formik.errors.message}</p>
                          ) : null}
                        </div>
                        <div className="my-3">
                          <div className="loading"></div>
                          <div className="error-message" />
                          <div className="sent-message">
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit">Send Message</button>
                        </div>
                    </Form>
                </Formik>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
