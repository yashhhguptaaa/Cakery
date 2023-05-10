import { useContext } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import CakeDirectoryLogo from "../../assets/cake_logo_2.png";
import { CakeryDataContext } from "../../cake.context";
import "./CakeDirectory.css";

const CakeDirectory = () => {
  const navigate = useNavigate();
  const { cakeDataArray, addThisCakeToMyCart, removeThisCakeFromMyCart } =
    useContext(CakeryDataContext);
  return (
    <div className="cake-directory-container">
      <p className="new-product-title">NEW PRODUCTS</p>
      <div className="cake-directory-logo-wrapper">
        <img
          src={CakeDirectoryLogo}
          className="cake-directory-logo"
          alt="Cakery Logo"
        />
      </div>
      <div className="cake-directory-products">
        {cakeDataArray.length
          ? cakeDataArray.map((cake) => (
              <div className="cake-product-wrapper" key={cake.id}>
                <div
                  className={classNames("glass", "cake-product")}
                  onClick={() => navigate(`/cake/${cake.id}`)}
                >
                  <div className="cake-image-wrapper">
                    <img src={cake.image} className="cake-image" />
                  </div>
                  <p className="cake-title">{cake.name}</p>
                  <p className="cake-price">₹ {cake.price}</p>
                </div>
                <div
                  className="add-to-cart-btn"
                  onClick={() => {
                    if (cake.itemInCart) {
                      removeThisCakeFromMyCart(cake.id);
                    } else {
                      addThisCakeToMyCart(cake.id);
                    }
                  }}
                >
                  {cake.itemInCart ? "Remove" : "Add To Cart"}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default CakeDirectory;
