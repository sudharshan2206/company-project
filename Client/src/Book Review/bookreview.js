import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
export function Bookreview()
{
    const [bookdetail,setBookdetail]=useState([]);
    useEffect(()=>
    {
        fetch("http://localhost:5140/bookreview")
        .then(bookdata=>bookdata.json())
        .then(getbookdata=>setBookdetail(getbookdata))
    }
    )
    
    return(
      <>
        <div className="bookReview container-fluid ">
        <div className="container text-center title">
            <h3>ALOHOMORA</h3>
            <h5>Unlock the Door to the World of Bibliophiles!</h5>
           
            </div>
            <div className="row">
      {
           bookdetail.map((value,index)=>

                <>
                <div className="col-lg-4  d-flex">
                    <div className="card  carditems">
                        <img src={value.image} className="cardimg"/>
                        <div className="card-body">
                            <h3 className="cardtitle">{value.bookname}</h3>
                            <Link to={`/singlebook/${value.bookid}`} className="btn btn-dark">view more</Link>
                        </div>
                    </div>
                </div>
               
                    
                 
      </>  
           
           )}
           </div>
           </div>
           </>
    );
}
