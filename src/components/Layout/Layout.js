import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartPopup from "../CartPopup";
import CakeLogo1 from "../../assets/cake_logo_1.png";
import CakeLogo2 from "../../assets/cake_logo_2.png";
import CakeLogo3 from "../../assets/cake_logo_3.png";
import ShoppingCartIcon from "../../assets/shopping-cart-icon.png";
import AdminIcon from "../../assets/admin-icon.png";
import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();
  const [handleCartClick, setHandleCartClick] = useState(false);
  const clickOnCloseButton = () =>
    setHandleCartClick((handleCartClick) => !handleCartClick);
  return (
    <div className="container">
      <div className="cart-admin-icon-wrapper">
        <div className="cart-icon-wrapper">
          <img
            className="cart-icon"
            src={ShoppingCartIcon}
            onClick={clickOnCloseButton}
          />
          {handleCartClick ? (
            <CartPopup clickOnCloseButton={clickOnCloseButton} />
          ) : null}
        </div>
        <div className="admin-icon-wrapper" onClick={() => navigate("/admin")}>
          <img className="admin-icon" src={AdminIcon} />
        </div>
      </div>
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
            <p className="cake-showcase-title">Classes</p>
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
