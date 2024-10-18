import React, { useState } from "react";
import banner from "../../assets/images/bannerAbout.png";
import collapseData from "../../assets/data/collapseData.json";
import Footer from "../Footer";


// Importation des icônes Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour ouvrir/fermer les sous-menus
  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="about">
     
      <img src={banner} alt="Bannière" className="bannerAbout" />

      {/* Boucle sur les données du menu */}
      {collapseData.map((item, index) => (
        <div className="menu-item" key={item.id}>
          <button className="menu-button" onClick={() => toggleSubMenu(index)}>
            {item.title}
            {/* Afficher le chevron en fonction de l'état */}
            <span className="chevron">
              {activeIndex === index ? (
                <FontAwesomeIcon icon={faChevronUp} />
              ) : (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
            </span>
          </button>
          {/* Sous-menu */}
          {activeIndex === index && (
            <div className="sub-menu">
              <div className="sub-item">{item.content}</div>
            </div>
          )}
        </div>
      ))}
       <Footer />
    </div>
  );
};

export default About;

