import React, { useState } from "react"
import { Menu } from "../Menu/readermenu";
import axios from "axios";
export function Readerregistration(){
    // const [selectedOption, setSelectedOption] = useState("");
    function formsubmission(event){
        
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var mail=document.getElementById("mail").value
        var phoneno=document.getElementById("phoneno").value
         var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var usertype=document.getElementById("usertype").value

        // const options = [
        //     { value: 'Select', label: 'Select' },
        //     { value: 'Reader', label: 'Reader' },
        //     { value: 'Author', label: 'Author' },
        //   ];
        var key={
            fname:fname,
            lname:lname,
            mail:mail,
            phoneno:phoneno,
            username:username,
            password:password,
            usertype: usertype,
        }
        if(fname==""){
            alert("Enter the First Name")
        }
        else if(lname==""){
            alert("Enter the Last Name")

        }
        else if(phoneno==""){
            alert("Enter the Phone no")

        }
        else if(mail==""){
            alert("Enter the Email-Id")

        }
        else if(username==""){
            alert("Enter the Username")

        }
        else if(password==""){
            alert("Enter the Password")

        }
        else{
            axios.post("http://localhost:5140/userdetails",key)
            .then((userdet)=>{
                if(userdet.data.status==="error"){
                    alert("data not inserted")
                }
                else if(userdet.data.status==="success"){
                    alert("data inserted")
                    window.location.href="/loginform"
                }
            })
        }
    }
    return(
        <>
      
        <div className="container-fluid text-center mainRegistration">
            <div className="container title">
            <h1>ALOHOMORA</h1>
            <h3>Unlock the Door to the World of Bibliophiles!</h3>
            </div>
            <div className="container text-center w-50 p-5 userRegistration">
                    <h3 className="text-decoration-underline">USER REGISTRATION</h3>
                    <form onSubmit={formsubmission}>  
                       
                        <input type="text" placeholder="email" id="mail" /><br/>
                       
                       <input type="text" placeholder="firstname" id="fname" /><br/>
                       
                        <input type="text" placeholder="lastname" id="lname" /><br/>
                      
                        <input type="text" placeholder="phone Number" id="phoneno" /><br/>
                       
                        <select id="usertype" >
                        <option>Select the usertype</option>
                        <option value="Reader">Reader</option>
                        <option value="Author">Author</option>
                        </select><br/>
                     
    
                                    
                       
                        <input type="text" placeholder="Username" id="username" /><br/>
                   
                        <input type="password" placeholder="password" id="password" /><br/>
                        
                     
                       <input type="submit" className="bg-secondary text-white p-2" value="submit"/>
                                            </form>
                         <a href="/loginform" className="text-white b">Already Have Account? Login</a>                   
            </div>                                
        </div>
        </>
    );
}