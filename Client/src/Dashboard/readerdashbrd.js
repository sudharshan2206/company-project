import React, { useEffect, useState } from "react";
import { Menu, Menureader } from "../Menu/readermenu";
import { Link, useParams } from "react-router-dom";
export function Readerdashboard(){
    var {id} =useParams()
    var {usertype}=useParams()
    const[fname,setFname]=useState('')
    useEffect(()=>{
        fetch("http://localhost:5140/reader/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
        })
       
    })
    return(
        <>
        <div className="readerDashboard container-fluid ">
        <div className="container text-center title">
            <h3>ALOHOMORA</h3>
            <h5>Unlock the Door to the World of Bibliophiles!</h5>
            <Menureader/>
            </div>
            <div className="container homeContent">
                <h2>Hi {fname} 👋! The Lectiophile </h2>
            </div>
            <div className="buttons text-center">
            <Link to={`/userupdate/${id}`} className="btn btn-secondary">Update Profile</Link>
            </div>
           

        </div>
        </>
    );
}