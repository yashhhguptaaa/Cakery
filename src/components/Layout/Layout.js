import "./Layout.css";
import CakeLogo1 from "../../assets/cake_logo_1.png";
import CakeLogo2 from "../../assets/cake_logo_2.png";
import CakeLogo3 from "../../assets/cake_logo_3.png";

const Layout = ({ onBack }) => {
  return (
    <div className="container">
      <div className="cake-showcase-wrapper">
        <div className="cake-showcase">
          <div className="cake--showcase-logo">
            <img
              src={CakeLogo1}
              alt="Cakery's Cake Products"
              className="cake-logo"
            />
          </div>
          <div className="cake-showcase-body">
            <p className="cake-showcase-title">Products</p>
            <p className="cake-showcase-description">
              Cakes are bakery products that are rich in sugar, fat and eggs
            </p>
          </div>
        </div>
        <div className="cake-showcase">
          <div className="cake--showcase-logo">
            <img
              src={CakeLogo2}
              alt="Cakery's Cake Logo"
              className="cake-logo"
            />
          </div>
          <div className="cake-showcase-body">
            <p className="cake-showcase-title">Cake Class</p>
            <p className="cake-showcase-description">
              Cake decorating courses available, both online and offline
            </p>
          </div>
        </div>
        <div className="cake-showcase">
          <div className="cake--showcase-logo">
            <img
              src={CakeLogo3}
              alt="Cakery's Cake Logo"
              className="cake-logo"
            />
          </div>
          <div className="cake-showcase-body">
            <p className="cake-showcase-title">Recipes</p>
            <p className="cake-showcase-description">
              Flour, eggs, fat, sugar, salt, a form of liquid, and leavening
              agents
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
