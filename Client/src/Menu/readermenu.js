import React from "react";
export function Menureader(){
    return(
        <>
        <nav class="navbar navbar-expand-lg  bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">ALOHOMORA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      
        
        <li class="nav-item">
          <a class="nav-link" href="/bookreview">Book Review</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/loginform">Log Out</a>
        </li>
     

        
        
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}