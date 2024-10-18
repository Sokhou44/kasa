import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logements from "../../assets/data/logements.json"; 
import Footer from "../Footer";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

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

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipments = () => {
    setIsEquipmentsOpen(!isEquipmentsOpen);
  };
  

  return (
    <div className="logement_details">
      {/* Carrousel d'images */}
      <div className="carousel">
        <img
          src={logement.pictures[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn prev" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="carousel-btn next" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
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
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      {/* Hôte */}
      <div className="logement-host">
        <div className="host-info">
          <img src={logement.host.picture} alt={logement.host.name} />
          <p>{logement.host.name}</p>
        </div>
      </div>

      {/* Note */}
      <div className="logement-rating">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
        ))}
      </div>

      <div className="describ-equipement">
        {/* Description (avec liste déroulante) */}
        <div className="logement-description">
          <div className="dropdown-header" onClick={toggleDescription}>
            <h2>Description</h2>
            <span className="chevron">
              <FontAwesomeIcon icon={isDescriptionOpen ? faChevronUp : faChevronDown} />
            </span>
          </div>
          {isDescriptionOpen && <p>{logement.description}</p>}
        </div>

        {/* Équipements (avec liste déroulante) */}
        <div className="logement-equipments">
          <div className="dropdown-header" onClick={toggleEquipments}>
            <h2>Équipements</h2>
            <span className="chevron">
              <FontAwesomeIcon icon={isEquipmentsOpen ? faChevronUp : faChevronDown} />
            </span>
          </div>
          {isEquipmentsOpen && (
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
