import React from "react";
import banner from "../../assets/images/bannerAbout.png";
import collapseData from "../../assets/data/collapseData.json";
import Footer from "../Footer";
import Collapse from "../Collapse"; 

const About = () => {
  return (
    <div className="about">
      <img src={banner} alt="Bannière" className="bannerAbout" />

      {/* Utilisation du Collapse */}
      {collapseData.map((item) => (
        <div className="menu-item" key={item.id}>
          <Collapse title={item.title} content={item.content} />
        </div>
      ))}
      
      <Footer />
    </div>
  );
};

export default About;
