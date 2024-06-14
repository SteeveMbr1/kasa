import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from "../Logo/Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <nav className="nav">
        <ul className="links">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
