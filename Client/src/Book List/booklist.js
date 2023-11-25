import axios from "axios";
import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Booklist() {

    const [booklist, setBooklist] = useState([]);
    const [item, setItem] = useState(0)
    useEffect(() => {
        fetch("http://localhost:5140/bookreview")
            .then(storedata => storedata.json())
            .then(booklistdata => setBooklist(booklistdata))

    }
    )
    const del = (bookid) => {
        var key = { bookid: bookid }
        axios.post("http://localhost:5140/delete/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="booklist container-fluid ">
                <div className="container text-center title">
                    <h3>ALOHOMORA</h3>
                    <h5>Unlock the Door to the World of Bibliophiles!</h5>

                </div>

                <table>
                    <tr className="booktitle">
                        <th>Book</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Book Description</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Update / Delete</th>

                    </tr>

                    {
                        booklist.map((value, index) =>
                            <>



                                <tr >
                                    <td><img src={value.image} className="bookimage" /></td>


                                    <td className="bookname ">{value.bookname} </td>
                                    <td className="author ">{value.author} </td>
                                    <td className="description ">{value.description}</td>

                                    <td className=" price">${value.price}</td>
                                    <td className=" rating">{value.rating} <StarRatings
                                        rating={value.rating}
                                        starDimension="20px"
                                        starSpacing="10px"
                                        starEmptyColor="grey"
                                        starRatedColor="green"

                                    /></td>
                                    <td>  <button className="bg-danger" onClick={() => { del(value.bookid) }}>Delete</button>
                                        <Link to={`/bookupdate/${value.bookid}`} ><button className="view">Update</button></Link></td>
                                </tr>
                            </>
                        )
                    }
                </table>
            </div>

        </>

    );
}