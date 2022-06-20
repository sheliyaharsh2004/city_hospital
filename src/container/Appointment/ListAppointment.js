import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function ListAppointment(props) {
   
    const [data , setData]= useState([]);

    const showdata = () => {
        let listData = JSON.parse(localStorage.getItem("bookappointment"));
     
        setData(listData);
    }
     
    useEffect(
        () =>{
            showdata()
        },
    []);

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
                                <NavLink to={"/bookappointment"}>Book Appoinment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink to={"/listappointment"}>List Appoinment</NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            data.map((d,i) =>{
                                return(
                                    <>
                                        <h4>{d.name}</h4>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;