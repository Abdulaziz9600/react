// const main = () =>{
//   return {


//   }
// }

import Hero from "../componets/hero"
import About from "../componets/about"
import Tarif from "../componets/tarif"
import Creater from "../componets/creater"
import World from "../componets/world"
import Ragister from "../componets/ragister"
import Footer from "../componets/footer"
import Lastfooter from "../componets/lastfooter"

import React from 'react'

function Main() {
  return (
    <div className="App">
    <Hero/>
    <About/>
    <Tarif/>
    <Creater/>
    <World/>
    <Ragister/>
    <Footer/>
    <Lastfooter/>
    </div>
    )
  }
  
  export default Main