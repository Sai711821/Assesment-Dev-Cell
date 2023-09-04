import myImg from "./mainImg.jpg"
import React from 'react';
import { Link } from "react-router-dom";





// Create a functional component for the display webpage
function DisplayPage() {
  return (
    <>
    <h1>WELCOME TO DEVELOPMENT CELL</h1>
    <div className="container text-center ">
  {/* <div className="row">
    <div className="col-12"> */}
    {/* <div class="card mb-3">
  <img src={myImg} class="card-img-top main-img"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">D.Y.PATIL.AKURDI</h5>
    <p class="card-text">A place where ideas are nurtured and creativity 
    thrives, fostering innovation, growth, and endless possibilities for a brighter future.</p>
    <div className="w-100 text-center mt-3 text-white bg-primary mb-3">
                <Link to="/signup" className="text-white">SignUp</Link>
            </div>

    
  </div>
</div> */}

<div class="card mb-3">
  <img class="card-img-top" src={myImg} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">D.Y.PATIL.AKURDI</h5>
    <p class="card-text">A place where ideas are nurtured and creativity 
    thrives, fostering innovation, growth, and endless possibilities for a brighter future.</p>
  
    <div className="w-100 text-center mt-3 text-white bg-primary mb-3">
                <Link to="/signup" className="text-white">SignUp</Link>
            </div>
  </div>
</div>
</div>
    


    </>
  );
}

export default DisplayPage;