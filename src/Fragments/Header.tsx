import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="brand">Kasa</div>
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
