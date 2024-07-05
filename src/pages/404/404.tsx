import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./404.scss";

export default function _404() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/404") {
      navigate("/404");
    }
  });

  return <div className="page-404">
        <h1 className="error-number">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink  className="back-link" to="/">Retourner sur la page d’accueil</NavLink>
    </div>;
}
