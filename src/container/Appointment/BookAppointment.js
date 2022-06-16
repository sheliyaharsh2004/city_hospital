import React from 'react';
import * as yup from "yup";
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';

function BookAppointment(props) {

    let schema = yup.object().shape({
        name: yup.string("Please enter your name").required("Please enter your name"),
        email: yup.string().email("Please enter Valid email"). required("Please enter your email"),
        phone: yup.number().required("Please enter your number"),
        date: yup.string().required("Please enter your date"),
        department: yup.string().required("Please enter your date"),
        message: yup.string().required("Please enter your message"),
    });

    const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
        message: "",
    },
    validationSchema:schema,
    onSubmit: values => {
        
        const { 
            name, 
            email, 
            phone, 
            date, 
            department, 
            message 
        } = values;

        alert(JSON.stringify(values, null, 2));
        // resetForm();
    },
    });

    const {handleSubmit , handleChange , errors} = formik;
    // console.log(errors);

    return (
        <main id="main">
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>
                    <div className='appoinmentnav'>
                        <div className='row text-center mb-3'>
                            <div className='col-6'>
                                <NavLink href="#" underline="hover" to={"/bookappoinment"}>Book Appoinment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink to={"/listappoinment"}>List Appoinment</NavLink>
                            </div>
                        </div>
                    </div>
                    <Formik value={formik}>
                        <Form key={formik} onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <InputBox
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Your Name" 
                                        error={Boolean(errors.name)}
                                        errormessage={errors.name}
                                        onChange={handleChange}
                                    />
                                    {/* {
                                        formik.errors.name ? <p className='error'>{formik.errors.name}</p>
                                        :
                                        null
                                    } */}
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox 
                                        type="email" 
                                        className="form-control" 
                                        name="email"
                                        id="email" 
                                        placeholder="Your Email" 
                                        data-rule="email" 
                                        error={Boolean(errors.email)}
                                        errormessage={errors.email}
                                        onChange={handleChange}
                                    />
                                    {/* {
                                        formik.errors.email ? <p className='error'>{formik.errors.email}</p>
                                        :
                                        null
                                    } */}
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <InputBox 
                                        type="tel" 
                                        className="form-control" 
                                        name="phone" 
                                        id="phone" 
                                        placeholder="Your Phone" 
                                        maxLength={10}
                                        error={Boolean(errors.phone)}
                                        errormessage={errors.phone}
                                        onChange={handleChange}
                                    />
                                    {/* {
                                        formik.errors.phone ? <p className='error'>{formik.errors.phone}</p>
                                        :
                                        null
                                    } */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox 
                                        type="date" 
                                        name="date" 
                                        className="form-control datepicker" 
                                        id="date" 
                                        label="Date desktop"
                                        placeholder="MM/dd/yyyy" 
                                        error={Boolean(errors.date)}
                                        errormessage={errors.date}
                                        onChange={handleChange}
                                    />
                                    {/* {
                                        formik.errors.date ? <p className='error'>{formik.errors.date}</p>
                                        :
                                        null
                                    } */}
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox type="select" name="department" id="department" className="form-select" onChange={handleChange} error={Boolean(errors.department)} errormessage={errors.department}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </InputBox>
                                    {/* {
                                        formik.errors.department ? <p className='error'>{formik.errors.department}</p>
                                        :
                                        null
                                    } */}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <InputBox type="textarea" className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onChange={handleChange} error={Boolean(errors.message)} errormessage={errors.message} />
                            </div>
                            {/* {
                                formik.errors.message ? <p className='error'>{formik.errors.message}</p>
                                :
                                null
                            } */}
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    );
}

export default BookAppointment;