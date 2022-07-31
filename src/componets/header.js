import "./header.css"
import logo from "../img/Group137.svg"

const Header = () => {
return <div className="site-header">
<div className="container">

  <div className="d-flex  align-items-center " >
    <div className="d-flex  align-items-center w-100 justify-content-between">
      <a href="#"> <img src={logo}/> </a>
      <nav className="d-flex align-items-center">
      <ul className="d-flex align-items-center list-unstyled gap-5 m-0 p-0">
      <li>
        <a className="text-decoration-none text-white" href="">Beranda</a>
      </li>
      <li>
        <a className="text-decoration-none text-white" href="">Koleksi</a>
      </li>
      <li>
        <a className="text-decoration-none text-white" href="">Syarat dan Ketentuan</a>
      </li>
      <li>
        <a className="text-decoration-none text-white" href="">Kontak</a>
      </li>
      </ul>
      </nav>

      <button className="nav-button rounded text-white">Masuk</button>
    </div>
  </div>

</div>

</div>
}

export default Header