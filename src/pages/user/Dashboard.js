import React from 'react';
import "../../styles/Dashboard.css"
import Footer from '../../layouts/Footer';
import mainImg from "../../assets/bussniss.png"
import cardImg from "../../assets/gadsden-1.png"
import icon1 from "../../assets/Complaint.png";
import icon2 from "../../assets/Exterior.png";
import icon3 from "../../assets/Hotel Star.png";
import icon4 from "../../assets/Office.png";
import Navbar from '../../layouts/Navbar';

const Dashboard = () => {
  return (
    
    <>
    <Navbar/>
    <div className="containers">
      <div className="main-img">
      <img src={mainImg} alt="Business Meeting" />
      </div>
      <h3>Our Business</h3>
      <div className="rows">
        {/* Card 1 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 2 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 3 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 4 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
      </div>
      <div className="rows">
        {/* Card 1 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 2 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 3 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 4 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
      </div>

      <div className="rows">
        {/* Card 1 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 2 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 3 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
        {/* Card 4 */}
        <div className="cards">
        <img src={cardImg} alt="Business Meeting" />
          <h5>GardenView Crossing</h5>
          <p>Land: 74 acres</p>
          <p>Riverchange, Pheonix City</p>
        </div>
      </div>
      
      {/* Icon row */}
      <div className="rows">
        <div className="icon-cards">
        <img src={icon1} alt="Business Meeting" />
        </div>
        <div className="icon-cards">
        <img src={icon2} alt="Business Meeting" />
        </div>
        <div className="icon-cards">
        <img src={icon3} alt="Business Meeting" />
        
        </div>
        <div className="icon-cards">
        <img src={icon1} alt="Business Meeting" />
        </div>
        <div className="icon-cards">
        <img src={icon4} alt="Business Meeting" />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Dashboard;
