import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Addbook(){
    var {id} = useParams()
    const[bname,setBname]=useState('')
    const[author,setAuthor]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')
    const[image,setImage]=useState('')
    const[rating,setRating]=useState('')
    const[price,setPrice]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:5140/addbook/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setBname(data[0].bname)
            setAuthor(data[0].author)
            setDescription(data[0].description)
            setCategory(data[0].category)
            setImage(data[0].image)
            setRating(data[0].rating)
            setPrice(data[0].price)
           
        })
    },[])
    function addbook(event){
        event.preventDefault()
        var bname=document.getElementById("bname").value
        var author=document.getElementById("author").value
        var description=document.getElementById("description").value
        var category=document.getElementById("category").value
        var image=document.getElementById("image").value
        var rating=document.getElementById("rating").value
        var price=document.getElementById("price").value
       
     
        
        var key={
           bname:bname,
           author:author,
           description:description,
           category:category,
           image:image,
           rating:rating,
           price:price,
         
         
        }
        if(bname==""){
            alert("Enter the Book Name")
        }
        else if(author==""){
            alert("Enter the Author")

        }
        else if(description==""){
            alert("Enter the Description")

        }
        else if(category==""){
           alert("Enter the Category")

        }
        else if(image==""){
            alert("Enter the Image Link")

        }
        else if(rating==""){
            alert("Enter the Rating")

        }
        else if(price==""){
            alert("Enter the Price")

        }
       
        else{
            axios.post("http://localhost:5140/addbook/",key)
            .then((upddet)=>{
                if(upddet.data.status==='error'){
                    alert(upddet)
                    alert("book not added")
                    console.log("not_added")
                
                }
                else if (upddet.data.status==='success'){
                    alert("book added Successfully!")
                    console.log("success")
                    
                }

            })
        }
    }
    return (
        <>
             <div className="alohomoraDashboard container-fluid ">
        <div className="container text-center title">
            <h3>ALOHOMORA</h3>
            <h5>Unlock the Door to the World of Bibliophiles!</h5>
           
            </div>
            <div className="addbook container text-center w-75 p-5 ">
                    <form  onSubmit={addbook}>  
                        <label>Enter the Book Name</label>
                        <input type="text" placeholder="bname"  id="bname"  /><br/>
                        <label> Enter the Author Name</label>
                       <input type="text" placeholder="author"  id="author" /><br/>
                        <label>Enter the Description </label>
                        <textarea id="description" name="description" rows="7" cols="70"></textarea><br/>
                        <label> Book Category</label>
                        <select id="category">
                            <option>Select the Category</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                        </select>
                        <label> Image URL</label>
                        <input type="text" placeholder="image url"   id="image"  /><br/>
                        <label> Rating</label>
                        <input type="text" placeholder="rating"  id="rating" /><br/>
                        <label> Price</label>
                        <input type="text" placeholder="price" id="price" /><br/>
                       
                    
                       <input type="submit" className="bg-secondary p-2" value="ADD BOOK
                       "/>
                                            </form>
                                       
                                            </div>                    

                    
                  
              

            </div>
        </>
    );
}