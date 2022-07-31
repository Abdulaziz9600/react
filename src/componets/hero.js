import "./hero.css"
import health from "../img/Group.svg"
import hero from "../img/Group140.png"

import React from 'react'

function Hero() {
  return (
    <div className='main'>
    <main>
      <div className='container'>
<p className='text-center  hero-name-big'><span className='hero-name'>Pojok Baca</span> Probolinggo</p>

<p className="text-center hero-titel">Pinjam Buku Secara <span className="hero-item">Gratis</span> untuk Masyarakat</p>

<div className="d-flex justify-content-center gap-5">
  <button className="hero-search-button" >Cari Judul Buku <svg className="ps-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg> </button>
  <button className="text-success hero-button d-flex align-items-center ">Donasi dengan Kami <img className="" src={health} alt=""/> </button>
</div>

<img className="pt-5" src={hero} alt=""/>
      </div>
    </main>
    </div>
    

    )
  }
  export default Hero