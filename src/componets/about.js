import React from 'react';
import "./about.css"
import Mohmmad from "../img/Ellipse24.png"
import Ellipse from "../img/Ellipse.png"


const About = () => {
  return (
    <div className='container'>
    <div className='pt-5'>
    <p className='about-titel text-center fw-bold'>Kenapa Kita <span className='text-success'>Harus</span> Membaca Buku?</p>
    <ul className="d-flex justify-content-center list-unstyled gap-5" >
    <li className="Mohammad-card"><p>“Aku rela dipenjara asalkan <strong>bersama buku</strong> , karena dengan  buku <strong className='text-black'>aku bebas</strong> ”</p>
    <div className='d-flex align-items-center  gap-4'>
      <img src={Mohmmad}/>
      <div className='m-0'>
        <strong className='p-0'>Mohammad Hatta</strong>
        <p>Wakil Presiden Indonesia Pertama</p>
      </div>
    </div>
    </li>
    <li className="Najwa-card" >

    <p>“Cuma perlu <strong>satu buku</strong> untuk jatuh cinta pada membaca, Cari Buku itu! <strong className='text-black'>Mari jatuh cinta!</strong>   ,</p>
    <div className='d-flex align-items-center  gap-4'>
      <img src={Ellipse}/>
      <div className='m-0'>
        <strong className='p-0'>Najwa Shihab</strong>
        <p>Duta Membaca</p>
      </div>
    </div>

    </li>
    </ul>
    
    </div>
    </div>
    );
  };
  
  export default About;