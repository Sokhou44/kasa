import banner from "../../assets/images/banner.png";  
import Gallery from "../Gallery";  
import logements from "../../assets/data/logements.json";  
import Footer from "../Footer";  

const Home = () => {
  return (
    <div className="home_page">
      
      <div className="banner">
        <img src={banner} alt="Bannière" className="banner-image" />
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>

      {/* Galerie de logements */}
      <div className="gallery-section">
        <Gallery logements={logements} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
console.log("Code exécuté sans erreur");
