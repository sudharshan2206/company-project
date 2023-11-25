import React from "react";
import axios from "axios";
export function Loginform(){
    function loginsubmission(event){
        event.preventDefault()
        var username= document.getElementById("username").value
        var password=document.getElementById("password").value

        var key={
            username:username,
            password:password
        }
        if(username===""){
            alert("Enter the username")
        }
        else if(password===""){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:5140/login",key)
            .then((userdata)=>{
                if(userdata.data.status=='empty_set'){
                    alert("Enter valid username")
                }
                else if(userdata.data.status=='success'){
                    var id= userdata.data.id
                      var usertype=userdata.data.usertype
                      alert(usertype)
                    alert("successfully logged in")
                    if(usertype==='Reader' ){
                        // && userdata.data.usertype=='reader'
                    // var usertype=userdata.data.usertype
                    window.location.href=`/readerdash/${id}`
                    console.log(userdata);
                    }
                  
                    else if (usertype==='Author' ){
                        // && userdata.data.usertype=='author'
                        // var usertype=userdata.data.usertype
                        window.location.href=`/authordash/${id}`
                        }
                }
                else if(userdata.data.status=='invalid_password'){
                    alert("Enter Valid Password")
                }
                else if(userdata.data.status=='both_are_invalid'){
                    alert("Enter Valid username and password")
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
                    <h3 className="text-decoration-underline">USER LOGIN</h3>
                    <form onSubmit={loginsubmission}>              
                    
                        <input type="text" placeholder="Username" id="username" /><br/>
                   
                        <input type="password" placeholder="password" id="password" /><br/>
                        <input type="submit" className="bg-secondary text-white p-2" value="submit"/>
                    </form>
                                         
            </div>                                
        </div>
        
        </>
    );
}