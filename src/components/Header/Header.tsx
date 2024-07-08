import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="container">
        <div className=" header">
            <Logo/>
            <nav className="nav">
                <NavLink className="nav-btn" to="/">Accueil</NavLink>
                <NavLink className="nav-btn" to="/a-propos">À propos</NavLink>
            </nav>
        </div>
    </header>
  );
}
