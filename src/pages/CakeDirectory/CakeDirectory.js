import classNames from "classnames";
import CakeDirectoryLogo from "../../assets/cake_logo_2.png";
import "./CakeDirectory.css";

const CakeDirectory = () => {
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
        <div className={classNames("glass", "cake-product")}>
          <div className="cake-image-wrapper">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg?quality=90&webp=true&resize=600,545"
              className="cake-image"
            />
          </div>
          <p className="cake-title">Mango Cake</p>
          <p className="cake-price">₹ 200</p>
          <div className="add-to-cart-btn">Add To Cart</div>
        </div>
        <div className={classNames("glass", "cake-product")}>
          <div className="cake-image-wrapper">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg?quality=90&webp=true&resize=600,545"
              className="cake-image"
            />
          </div>
          <p className="cake-title">Mango Cake</p>
          <p className="cake-price">₹ 200</p>
          <div className="add-to-cart-btn">Add To Cart</div>
        </div>
        <div className={classNames("glass", "cake-product")}>
          <div className="cake-image-wrapper">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg?quality=90&webp=true&resize=600,545"
              className="cake-image"
            />
          </div>
          <p className="cake-title">Mango Cake</p>
          <p className="cake-price">₹ 200</p>
          <div className="add-to-cart-btn">Add To Cart</div>
        </div>
        <div className={classNames("glass", "cake-product")}>
          <div className="cake-image-wrapper">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/easy-lemon-layer-cake-hero-e54adca.jpg?quality=90&webp=true&resize=600,545"
              className="cake-image"
            />
          </div>
          <p className="cake-title">Mango Cake</p>
          <p className="cake-price">₹ 200</p>
          <div className="add-to-cart-btn">Add To Cart</div>
        </div>
      </div>
    </div>
  );
};
export default CakeDirectory;
