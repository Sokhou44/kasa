import React from "react";
import { Link } from "react-router-dom";

const Gallery = ({ logements }) => {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <div key={logement.id} className="gallery-card">
          <Link to={`/logement/${logement.id}`}>
            <img src={logement.cover} alt={logement.title} className="gallery-image" />
            <h2>{logement.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
