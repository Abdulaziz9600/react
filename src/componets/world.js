import "./world.css"
import React from 'react';
import Frame from "../img/Frame.png"
import Frame2 from "../img/Frame2.png"
import Frame3 from "../img/Frame3.png"

const World = () => {
  return (
    <div>
    <div className="container">
    <div className="pt-5 pb-5">
    <strong>Kegiatan Pojok Baca Probolinggo</strong>
    <p className="pb-4">Intip kegiatan yang telah kami selenggarakan </p>
    
    <ul className="d-flex justify-content-center list-unstyled gap-5">
    <li>
      <img src={Frame} />
    </li>
    <li>
      <img src={Frame2} />
    </li>
    <li>
      <img src={Frame3} />
    </li>
    </ul>
    
    </div>
    </div>
    </div>
    );
  };
  
  export default World;