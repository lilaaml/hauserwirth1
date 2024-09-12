import { NavLink } from "react-router-dom";
import './Components.css'

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex flex-column">
        <div className="header mt-1 mb-2 container-fluid text-center">
          <a href="/">Hauser & Wirth</a>
        </div>
        <div className="navlink container-fluid">
          <ul className="navbar-nav d-flex justify-content-center">
            <li className="nav-item">
              <NavLink to="/artists" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>artists</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/exhibitions" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>exhibitions</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fairs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>fairs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>ursula</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>news</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>events</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>learning</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>publishers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>locations</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
