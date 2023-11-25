import React from "react";
import { Menualohomora } from "../Menu/alohomoramenu";
export function Alohomora(){
    return(
       
        <>
        <div className="alohomoraDashboard container-fluid ">
        <div className="container text-center title">
            <h3>ALOHOMORA</h3>
            <h5>Unlock the Door to the World of Bibliophiles!</h5>
            <Menualohomora/>
            </div>
            <div className="container text-center homeContent">
               <h1>Hi Bibliophiles!👋 Welcome to ALOHOMORA 🗝️🪄📚</h1>
              <div className="alohomoraContent"> <p >You're on the right place to explore and have a feast of books. Read summaries, ratings, and reviews from other users and experts.Alohomora has both fictional and non-fictional books even a casual readers can enjoy being here.</p></div>
            </div>

        </div>
        </>
    
       
    );
}