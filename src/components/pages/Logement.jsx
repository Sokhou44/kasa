import React, { useState } from "react";
import { useParams } from "react-router-dom";
import logements from "../../assets/data/logements.json"; 
import Collapse from "../Collapse"; 
import Footer from "../Footer";  

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const fullName = logement.host.name;
const formattedName = fullName.replace(" ", "\n"); // Pour ajouter un saut de ligne


  return (
    <div className="logement_details">
      {/* Carrousel d'images */}
      <div className="carousel">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        
        {logement.pictures.length > 1 && (
          <>
            <button className="carousel-btn prev" onClick={handlePrevClick}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="carousel-btn next" onClick={handleNextClick}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </>
        )}

        <div className="carousel-index">
          {currentImageIndex + 1}/{logement.pictures.length}
        </div>
      </div>

      {/* Titre et emplacement */}
      <div className="logement-header">
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </div>

      {/* Tags */}
      <div className="logement-tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Hôte */}
      <div className="host-tag">
      <div className="logement-host">
        <div className="host-info">
        <p className="host-name">{formattedName}</p>
        <img src={logement.host.picture} alt={logement.host.name} />
        </div>
      </div>

      {/* Note */}
      <div className="logement-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < logement.rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
      </div>

      {/* Sections Description et Équipements */}
      <div className="describ-equipement">
        <div className="section description">
          <Collapse title="Description" content={logement.description} />
        </div>
        <div className="section equipement">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
