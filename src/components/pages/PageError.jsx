import React from "react";
import { Link } from "react-router-dom";


const PageError = () => {
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="home-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default PageError;
