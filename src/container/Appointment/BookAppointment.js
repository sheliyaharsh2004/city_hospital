import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';

function BookAppointment(props) {

    const [udate , setUdate] = useState(false);

    const history = useHistory();

    const handleUpdate = (udata) =>{
          
        let Update = JSON.parse(localStorage.getItem("bookappointment"));

        console.log(Update);
      
        let fdata = Update.map((i) =>{
            if (i.id === udata.id) {
              return udata
            }else{
              return i
            }
        })

        localStorage.setItem("bookappointment", JSON.stringify(fdata))
        history.push("/listappointment");
        formik.resetForm();
        setUdate(false);
        console.log(fdata);
    }

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
        onSubmit: (values, {resetForm }) => {
            console.log(values);   

            if(udate){
                handleUpdate(values)
            }else{
                const { 
                    name, 
                    email, 
                    phone, 
                    date, 
                    department, 
                    message 
                } = values;
        
                const Hdata = {
                    id: Math.floor(Math.random() * 1000),
                    name, 
                    email, 
                    phone, 
                    date, 
                    department, 
                    message 
                }
                console.log(Hdata);

                let data = JSON.parse(localStorage.getItem("bookappointment"));

                if (data == null) {
                    localStorage.setItem("bookappointment" , JSON.stringify([Hdata]));       
                }else{
                    data.push(Hdata);
                    localStorage.setItem("bookappointment" , JSON.stringify(data));
                }

                history.push("/listappointment")
                // console.log(JSON.stringify(values, null, 2));
                resetForm ();
            }
        }
    });

    useEffect(
        () =>{
            let dDate = JSON.parse(localStorage.getItem("bookappointment"));

            if (dDate !== null && props.location.state) {

                let filterdata = dDate.filter((d) => d.id === props.location.state.id);

                formik.setValues(filterdata[0])
                setUdate(true);
            }
        },
    []);

    const {handleSubmit, handleChange, handleBlur,  values, errors, touched} = formik;

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
                                <NavLink href="#" underline="hover" to={"/bookappointment"}>Book Appoinment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink to={"/listappointment"}>List Appoinment</NavLink>
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
                                        error={Boolean(errors.name && touched.name)}
                                        errormessage={errors.name}
                                        onChange={handleChange}
                                        value={values.name} 
                                        onBlur={handleBlur}
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
                                        error={Boolean(errors.email && touched.email)}
                                        errormessage={errors.email}
                                        onChange={handleChange}
                                        value={values.email}
                                        onBlur={handleBlur}
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
                                        error={Boolean(errors.phone && touched.phone)}
                                        errormessage={errors.phone}
                                        onChange={handleChange}
                                        value={values.phone}
                                        onBlur={handleBlur}
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
                                        placeholder="date" 
                                        error={Boolean(errors.date && touched.date)}
                                        errormessage={errors.date}
                                        onChange={handleChange}
                                        value={values.date}
                                        onBlur={handleBlur}
                                    />
                                    {/* {
                                        formik.errors.date ? <p className='error'>{formik.errors.date}</p>
                                        :
                                        null
                                    } */}
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <InputBox
                                        type="select" 
                                        name="department" 
                                        id="department" 
                                        className="form-select" 
                                        onChange={handleChange} 
                                        error={Boolean(errors.department && touched.department)} 
                                        errormessage={errors.department} 
                                        value={values.department}
                                        onBlur={handleBlur}>
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
                                <InputBox 
                                    type="textarea" 
                                    className="form-control" 
                                    name="message" 
                                    rows={5} 
                                    placeholder="Message (Optional)" 
                                    defaultValue={""} 
                                    onChange={handleChange} 
                                    error={Boolean(errors.message && touched.message)} 
                                    errormessage={errors.message} 
                                    value={values.message} 
                                    onBlur={handleBlur}
                                />
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
                            {
                                udate ?
                                <div className="text-center"><button type="submit">update an Appointment</button></div>
                                :
                                <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            }
                        </Form>
                    </Formik>
                </div>
            </section>
        </main>
    );
}

export default BookAppointment;