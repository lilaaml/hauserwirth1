import { NavLink } from "react-router-dom";
import './Components.css'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex flex-column">
        <div className="header container-fluid text-center">
          <a href="/">Hauser & Wirth</a>
        </div>
        <div className="navlink container-fluid">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <NavLink to="/artists" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>artists</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/exhibitions" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>exhibitions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fairs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>fairs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <header className="header">
    //   <nav className="nav container">
    //     <a href="/">Hauser & Wirth</a>
    //   </nav>
    // </header>
  )
}

export default Navbar
