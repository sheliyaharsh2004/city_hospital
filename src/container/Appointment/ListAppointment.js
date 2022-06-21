import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from 'react';

function ListAppointment(props) {
   
    const [data , setData]= useState([]);

    const showdata = () => {
        let listData = JSON.parse(localStorage.getItem("bookappointment"));
     
        setData(listData);
    }
     
    const handleClickDopen = (id) => {
       
    };

    const handleClickEditOpen = (params) => {
    };

    useEffect(
        () =>{
            showdata()
        },
    []);

    const columns = [
        { field: "name", headerName: "Name", width: 130 },
        { field: "email", headerName: "Email", width: 130 },
        { field: "phone", headerName: "Phone", width: 130 },
        { field: "date", headerName: "Date", width: 130 },
        { field: "department", headerName: "Department", width: 130 },
        { field: "message", headerName: "Message", width: 130 },
        {
          field: "action",
          headerName: "Action",
          width: 100,
          renderCell: (params) => {
            return (
              <>
                <IconButton
                  className="border-primary"
                  onClick={() => handleClickDopen(params.id)}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleClickEditOpen(params)}>
                  <EditIcon />
                </IconButton>
              </>
            );
          },
        },
    ];

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
                    <div className="mt-3" style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            rowsPerPageOptions={[5]}
                            pageSize={5}
                            checkboxSelection
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;