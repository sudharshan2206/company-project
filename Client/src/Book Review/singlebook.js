import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Singlebook(){
    var {id}=useParams()
    const[bookname,setBookname]=useState('')
    const[image,setImage]=useState('')
    const[description,setDescription]=useState('')
    const[price,setPrice]=useState('')
    const[author,setAuthor]=useState('')
    const[category,setCategory]=useState('')
  

    useEffect(()=>{
        fetch("http://localhost:5140/singlebook/"+id)
        .then(bookdetail=>bookdetail.json())
        .then((singlebook)=>{
            setBookname(singlebook[0].bookname)
            setAuthor(singlebook[0].author)
            setDescription(singlebook[0].description)
            setPrice(singlebook[0].price)
            setCategory(singlebook[0].category)
            setImage(singlebook[0].image)
            
           
        }
    )
    })
    // return(
    //     <>
    //     <h1>{image}</h1>
    //     <h1>{bookname}</h1>
    //     <h1>{author}</h1>
    //     <h1>{description}</h1>
    //     <h1>{price}</h1>
    //     <h1>{category}</h1>
    //     </>
    // );
    return(
                <>
                   
                   <div className="bookReview container-fluid ">
                <div className="container text-center title">
                    <h3>ALOHOMORA</h3>
                    <h5>Unlock the Door to the World of Bibliophiles!</h5>
                   
                    </div>
                   <div className='row  container-fluid'>
                   <div className='col-lg-4 singlecard'>
                       <img src={image}className='img-fluid  singleimage'/>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className='col-lg-6 singlecard'>   
                       <h1>{bookname}</h1>
                       <p className="singledesc" >{description}</p>
                       <p className="singleprice"><span>$</span>{price}</p>
                       {/* <p >{bookid}</p> */}
                       <p className="singlecat">{category}</p>
                      
                        
                       </div>
                   </div>
                   </div>
               </>
               );
           }

// import React, { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";
// export function Singlebook()
// {
//     const [bookdetail,setBookdetail]=useState([]);
//     var {id}=useParams()
//     useEffect(()=>{
//         fetch(" http://localhost:5140/singlebook/"+id)
//         .then(bookdet=>bookdet.json())
//         .then(bookdata=>setBookdetail(bookdata))
        
//     }
//     )
//     return(
//         <>
           
//            <div className="bookReview container-fluid ">
//         <div className="container text-center title">
//             <h3>ALOHOMORA</h3>
//             <h5>Unlock the Door to the World of Bibliophiles!</h5>
           
//             </div>
//            <div className='row dispMain container-fluid'>
//            <div className='col-lg-6 dispimg'>
//                <img src={bookdetail.image}className='img-fluid  dispimage'/>
//             </div>
//             <div className='col-lg-6 dispcontent'>   
//                <h1>{bookdetail.bookname}</h1>
//                <p >{bookdetail.description}</p>
//                <p className="dispprice"><span>$</span>{bookdetail.price}</p>
//                <p >{bookdetail.bookid}</p>
//                <p className="dispcat">{bookdetail.category}</p>
              
                
//                </div>
//            </div>
//            </div>
//        </>
//        );
//    }