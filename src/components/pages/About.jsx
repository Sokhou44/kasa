import React from "react";
import banner from "../../assets/images/bannerAbout.png";
import collapseData from "../../assets/data/collapseData.json";
import Footer from "../Footer";
import Collapse from "../Collapse"; 


const About = () => {
  return (
    <div className="about">
      <img src={banner} alt="Bannière" className="bannerAbout" />

      {/* Utilisation du composant Collapse pour chaque élément */}
      {collapseData.map((item) => (
        <Collapse key={item.id} title={item.title} content={item.content} />
      ))}

      <Footer />
    </div>
  );
};

export default About;
