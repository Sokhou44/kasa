import React, { useState } from "react";


const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Cette fonction inverse l'état du toggle
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <p>
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
      {/* Si l'état isOpen est vrai, le contenu est affiché */}
      {isOpen && (
        <div className="collapse__dropdown__content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
