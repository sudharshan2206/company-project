import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Userupdate(){
    var {id} = useParams()
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[mail,setMail]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[usertype,setUsertype]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:5140/singleuser/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setFname(data[0].fname)
            setLname(data[0].lname)
            setMail(data[0].mail)
            setUsername(data[0].username)
            setPassword(data[0].password)
            setUsertype(data[0].usertype)
           
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var mail=document.getElementById("mail").value
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var usertype=document.getElementById("usertype").value
        
        var key={
            fname:fname,
            lname:lname,
            mail:mail,
            usertype:usertype,
            username:username,
            password:password,
            
         
        }
        if(fname==""){
            alert("Enter the First Name")
        }
        else if(lname==""){
            alert("Enter the Last Name")

        }
        else if(mail==""){
            alert("Enter the Email Id")

        }
        else if(username==""){
           alert("Enter the Username")

        }
        else if(password==""){
            alert("Enter the Password")

        }
       
        else{
            axios.put("http://localhost:5140/userupdate/"+id,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    alert("Please login again as the data updated")
                    console.log("success")
                    window.location.href="/"
                }

            })
        }
    }
    return (
        <>
            <div className="container-fluid mainDiv">
                <div className="container text-center w-50 p-5 content">
                    <h1 className="text-decoration-underline">USER PROFILE</h1>
                    <form onSubmit={handleupdate}>  
                        <label>Email-Id</label>
                        <input type="text" placeholder="email"  id="mail" value={mail} /><br/>
                        <label> First Name</label>
                       <input type="text" placeholder="firstname" onChange={(upd)=>setFname(upd.target.value)} id="fname" value={fname}/><br/>
                        <label> Last Name</label>
                        <input type="text" placeholder="lastname" onChange={(upd)=>setLname(upd.target.value)} id="lname" value={lname} /><br/>
                        <label> Username</label>
                        <input type="text" placeholder="username" onChange={(upd)=>setUsername(upd.target.value)} id="username" value={username} /><br/>
                        <label> Password</label>
                        <input type="text" placeholder="password" onChange={(upd)=>setPassword(upd.target.value)}  id="password" value={password} /><br/>
                        <label> Usertype</label>
                        <input type="text" placeholder="usertype"  id="usertype" value={usertype} /><br/>
                       
                    
                       <input type="submit" className="bg-success p-2" value="Update
                       "/>
                                            </form>
                                       
                                            

                    
                     
                </div>

            </div>
        </>
    );
}