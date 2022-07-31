import React from 'react';
import "./register.css"
import health2 from "../img/health2.png"
import whatsapp from "../img/logos_whatsapp.png"

const Ragister = () => {
  return (
    <div>
    <div className='container'>
    <div className='d-flex flex-column mb-5'>
    <p className='text-center register-text'>Ingin Membantu <span className='text-success'>Meningkatkan</span> Literasi Anak-Anak Sekitar Kita? </p>
    <p className='text-center'>Percayakan melalui kegiatan kita</p>

    <div className='pt-5 me-auto ms-auto'>
      <button className='register-btn d-block mb-2'>Donasi dengan Kami <img src={health2}/></button>
      <p className='text-center'>Atau</p>
      <button className='contact-btn m-auto mt-2 text-success'>Hubungi Kami <img src={whatsapp}/></button>
    </div>
    
    </div>
    </div>
    </div>
    );
  };
  
  export default Ragister;