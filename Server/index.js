const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const mysql = require("mysql")
const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))
let databaseconnection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"N@ndhu0514",
    database:"alohomora"

})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database connected")
    }
})

// insert data in userdetail table from registration
connect.post('/userdetails',(request,response)=>{
    let{fname,lname,mail,phoneno,username,password,usertype}=request.body
    let sql='insert into userdetail(fname,lname,mail,phoneno,username,password,usertype) values(?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[fname,lname,mail,phoneno,username,password,usertype],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
// insert data in bookdetail table from addbook
connect.post('/addbook',(request,response)=>{
    let{bname,author,description,category,rating,image,price}=request.body
    let sql='insert into bookdetail(bookname,author,description,category,rating,image,price) values(?,?,?,?,?,?,?)'
    databaseconnection.query(sql,[bname,author,description,category,rating,image,price],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("ok")
        }
    })
})

// single data fetch for reader
connect.get('/reader/:id',(request,response)=>{
    let {id} = request.params
    let sql='select * from userdetail where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})
// single data fetch for author
connect.get('/author/:id',(request,response)=>{
    let {id} = request.params
    let sql='select * from userdetail where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})

// login Page
connect.post('/login',(request,response)=>{
    let {username,password}=request.body
    let sql='select * from userdetail where username=?'
    databaseconnection.query(sql,[username],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
       else if(result.length>0){
        var dbusername=result[0].username
        var dbpassword=result[0].password
        var id = result[0].id
        var usertype=result[0].usertype
                  
        if(dbusername===username && dbpassword===password ){
            // && usertype=="reader"|| usertype=="author"
            response.send({"status":"success","id":id,"usertype":usertype
            // "usertype":usertype
        })
            // if(usertype=="reader" || usertype=="author")
            // {
            //     response.send({"status":"success","usertype":usertype})
            // }
        }
        else{
            response.send({"status":"invalid_password"})
        }
        }
        else{
            response.send({"status":"both_are_invalid"})
        }
    })

})
// Bookreview page => get all the details of the books added
connect.get('/bookreview',(request,response)=>{
    let sql='select * from bookdetail'
    databaseconnection.query(sql,(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
           
        }
       
    })
})
// Single book Review 
connect.get('/singlebook/:bookid',(request,response)=>{
    let {bookid} = request.params
    let sql='select * from bookdetail where bookid=?'
    databaseconnection.query(sql,[bookid],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
         
        }
        
    })
})
// update book detail
connect.put('/bookupdate/:bookid',(request,response)=>{
    let {bookid}=request.params
    let {bookname,author,description,category,rating,image,price} = request.body
    let sql='update bookdetail set bookname=?,author=?,description=?,category=?,rating=?,image=?,price=? where bookid=?'
    databaseconnection.query(sql,[bookname,author,description,category,rating,image,price,bookid],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","bookid":bookid})
            console.log("ok")
        }
    })
})
// delete the book
connect.post('/delete',(request,response)=>{
    let bookid = request.body.bookid  
    let sql='delete from bookdetail where bookid=?'
    databaseconnection.query(sql,[bookid],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
            console.log("okay")
        }
    })
})
// single data for user update
connect.get('/singleuser/:id',(request,response)=>{
    let {id} = request.params
    let sql='select * from userdetail where id=?'
    databaseconnection.query(sql,[id],(error,result)=>{
        if(error) {
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
        
    })
})


// update  profile
connect.put('/userupdate/:id',(request,response)=>{
    let {id}=request.params
    let {fname,lname,mail,username,password,usertype} = request.body
    let sql='update userdetail set fname=?,lname=?,mail=?,username=?,password=?,usertype=? where id=?'
    databaseconnection.query(sql,[fname,lname,mail,username,password,usertype,id],(error,result)=>{
        if(error){
            response.send({"status":"not_updated"})
            console.log(error)
        }
        else{
            response.send({"status":"success","usertype":usertype})
            console.log("ok")
        }
    })
})
// database connection
connect.listen(5140,()=>{
    console.log("your server is running in port 5140")
})