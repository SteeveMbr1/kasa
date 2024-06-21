import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./404.scss";

export default function _404() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/404") {
      navigate("/404", { replace: true });
    }
  });

  return (
    <div className="page-404">
        <p className="error-404">404</p>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <p><NavLink  className="back-home" to="/">Retourner sur la page d’accueil</NavLink></p>
    </div>
  );
}
