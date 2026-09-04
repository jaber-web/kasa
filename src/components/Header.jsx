import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img className="header__logo" src={logo} alt="Kasa" />
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;