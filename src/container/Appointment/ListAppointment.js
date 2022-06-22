import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from 'react';

function ListAppointment(props) {
   
    const history = useHistory();
    const [data , setData]= useState([]);

    const showdata = () => {
        let listData = JSON.parse(localStorage.getItem("bookappointment"));
     
        setData(listData);
    }
     
    const handleDelete = (id) => {
        let dData = JSON.parse(localStorage.getItem("bookappointment"));

        let filterdata = dData.filter((d, i) => d.id !== id);
    
        localStorage.setItem("bookappointment" , JSON.stringify(filterdata))
    
        showdata();
    };

    const handleEdit = (id) => {
        history.push("/bookappointment", {"id" : id})
    };

    useEffect(
        () =>{
            showdata()
        },
    []);

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        { field: "name", headerName: "Name", width: 80 },
        { field: "email", headerName: "Email", width: 170 },
        { field: "phone", headerName: "Phone", width: 110 },
        { field: "date", headerName: "Date", width: 100 },
        { field: "department", headerName: "Department", width: 120 },
        { field: "message", headerName: "Message", width: 130 },
        {
            field: "delete",
            headerName: "Delete",
            width: 70,
            renderCell: (params) => {
              return (
                <>
                  <IconButton
                    className="border-primary"
                    onClick={() => handleDelete(params.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              );
            },
          },
          {
            field: "Edit",
            headerName: "Edit",
            width: 70,
            renderCell: (params) => {
              return (
                <>
                  <IconButton onClick={() => handleEdit(params.id)}>
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