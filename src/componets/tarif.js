import "./tarif.css"
import Oval from "../img/circle.png"

import React from 'react';

const Tarif = () => {
  return (
    <div className="pt-5 pb-5">
    <div className="container">
    <ul className="pt-5 d-flex justify-content-around gap-5">
    <li className="d-flex align-items-center gap-4">
    <img src={Oval}/>
    <div>
      <strong className="fs-5 fw-bolder">500+</strong>
      <p>Judul Buku</p>
    </div>
    </li>
    
    <li className="d-flex align-items-center gap-4">
    <img src={Oval}/>
    <div>
      <strong className="fs-5 fw-bolder">500+</strong>
      <p>Judul Buku</p>
    </div>
    </li>


    <li className="d-flex align-items-center gap-4">
    <img src={Oval}/>
    <div>
      <strong className="fs-5 fw-bolder">500+</strong>
      <p>Judul Buku</p>
    </div>
    </li>

    </ul>
    </div>
    </div>
    )
  };
  
  export default Tarif;