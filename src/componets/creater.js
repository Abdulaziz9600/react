import React from 'react';
import "./creater.css"
import John from "..//img/john.png"
import Mike from "..//img/mike.png"
import Ovals from "..//img/ovals.png"

const Creater = () => {
  return (
    <div className='container'>
    <div className='pt-5 pb-5'>
    <strong className='fw-bold'>Apa Kata Mereka?</strong>
    <p>Mereka yang telah menjadi pengunjung tetap kami</p>
    
    <ul className='list-unstyled d-flex gap-5 pt-4'>
    <li className='creater-card'>
    <p className='creater-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <div className='d-flex gap-4 align-items-center'>
    <img src={John} />
    <div>
    <strong>Guy Hawkins</strong>
    <p>32 Tahun, Karyawan</p>
    </div>
    </div>
    </li>

    <li className='creater-card'>
    <p className='creater-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <div className='d-flex gap-4 align-items-center'>
    <img src={Mike} />
    <div>
    <strong>Brooklyn Simmons</strong>
    <p>20 Tahun, Mahasiswa</p>
    </div>
    </div>
    </li>
    </ul>
    <div className=' text-center me-5 pt-5 fs-4 pb-5'><img  src={Ovals}/></div>
    </div>
    </div>
    );
  };
  
  export default Creater;