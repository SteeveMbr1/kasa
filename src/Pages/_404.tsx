import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function _404() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/404") {
      navigate("/404", { replace: true });
    }
  });

  return (
    <div className="404-container">
      <p className="404">404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </p>
    </div>
  );
}
