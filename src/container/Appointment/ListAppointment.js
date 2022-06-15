import React from 'react';
import * as yup from "yup";
import { Form, Formik, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

function ListAppointment(props) {
    let schema = yup.object().shape({
        name: yup.string("Please enter your name").required("Please enter your name"),
        email: yup.string().email("Please enter Valid email"). required("Please enter your email"),
        phone: yup.number().required("Please enter your number"),
        date: yup.string().required("Please enter your date"),
        department: yup.string().required("Please enter your date"),
    });

    const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
    },
    validationSchema:schema,
    onSubmit: (values, { resetForm }) => {
        
        const { name, email, phone, date, department } = values;

        alert(JSON.stringify(values, null, 2));
        resetForm();
    },
    });

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
                                <NavLink to={"/bookappoinment"}>Book Appoinment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink to={"/listappoinment"}>List Appoinment</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;