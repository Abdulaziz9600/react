import React from 'react';
import "./footer.css"
import FooterLogo from "../img/footerlogo.svg"
import Instagram from "../img/facebook.svg"
import Feacbook from "../img/instagram.svg"
import Youtube from "../img/youtube.svg"

const Footer = () => {
  return (
    <div>
    <div className='container'>
    
    <div className='pt-5 pb-5'>
    
    <div className='d-flex justify-content-between aligg-items-center'>
    
    <div>
      <div className='d-flex align-items-center gap-3'><img src={FooterLogo}/>
      <p className='fw-bold p-0 m-0'>Pojok Baca Probolinggo</p>
      </div>
      
      <ul className='d-flex align-items-center gap-5 list-unstyled pt-5'>
      <li><img src={Instagram}/></li>
      <li><img src={Feacbook}/></li>
      <li><img src={Youtube}/></li>
      </ul>
      
    </div>


    <ul className='d-flex flex-column gap-4 list-unstyled'>
    <li className='fw-bold'>Kontak</li>
    <li>Email</li>
    <li>Alamat</li>
    <li>Alamat</li>
    </ul>

    <ul className='d-flex flex-column gap-4 list-unstyled'>
    <li className='fw-bold' >Tentang Kami</li>
    <li>Ummm</li>
    <li>Alamat</li>
    </ul>
   
    <ul className='d-flex flex-column gap-4 list-unstyled'>
    <li className='fw-bold'>Galery</li>
    <li>Kegiatan 2018</li>
    <li>Kegiatan 2019</li>
    <li>Kegiatan 2020</li>
    <li>Kegiatan 2021</li>
    </ul>

    </div>
    
    
    <div>
    
    </div>
    </div>
    
    </div>
    </div>
    );
  };
  
  export default Footer;