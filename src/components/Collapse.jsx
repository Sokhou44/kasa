import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Cette fonction inverse l'état du toggle
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <span className="chevron-icon">
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
