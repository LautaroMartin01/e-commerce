import { Cartwiget } from "./CartWidget/CartWidget"

export const NavBar = () =>{
  return(
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid position-relative">
      <div className="container">
        <div className="position-absolute top-50 start-0 translate-middle-y">
          <a className="navbar-brand" href="#">
            <img src="/src/lib/icon.png" alt="Bootstrap" width="30" height="24" />
          </a>
          <a className="navbar-brand" href="#">Distribuidora DANALE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Herramientas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Maquinaria</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Vestimenta</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Nuevos ingresos</a>
          </li>
        </ul>
      </div>
      <Cartwiget />
    </div>
  </nav>
  )
}
