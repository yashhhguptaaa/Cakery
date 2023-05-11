import { useContext } from "react";
import { CakeryDataContext } from "../../cake.context";
import CloseButtonIcon from "../../assets/close-button.png";
import TrashIcon from "../../assets/trash-icon.ico";
import PartyFaceEmoji from "../../assets/party-emoji.png";
import "./CartPopup.css";

const CartPopup = ({ clickOnCloseButton }) => {
  const { removeThisCakeFromMyCart, clickOnCheckoutButton, cakeInMyCartArray } =
    useContext(CakeryDataContext);

  const isCartEmpty = cakeInMyCartArray.length === 0;
  return (
    <div className="cart-popup-container">
      <div className="close-icon-wrapper" onClick={clickOnCloseButton}>
        <img className="close-icon" src={CloseButtonIcon} />
      </div>
      <div className="cart-popup-cake-list">
        {!isCartEmpty ? (
          cakeInMyCartArray.map((cake) => (
            <div className="cart-popup-cake" key={cake.id + cake.name}>
              <div className="cart-popup-cake-details">
                <div className="cart-popup-cake-image-wrapper">
                  <img
                    loading="lazy"
                    className="cart-popup-cake-image"
                    src={cake.image}
                  />
                </div>
                <p className="cart-popup-cake-title">{cake.name} </p>
                <p>~</p>
                <p className="cart-popup-cake-price">₹ {cake.price}</p>
              </div>
              <div
                className="cart-popup-delete-icon-wrapper"
                onClick={() => removeThisCakeFromMyCart(cake.id)}
              >
                <img className="delete-icon" src={TrashIcon} />
              </div>
            </div>
          ))
        ) : (
          <img src={PartyFaceEmoji} className="party-emoji-face" />
        )}
      </div>

      <p className="total-price">
        {!isCartEmpty
          ? `Total Price: ₹
          ${cakeInMyCartArray.reduce((result, cake) => cake.price + result, 0)}
          only /- `
          : "Buy Yummy Delicious Cake !"}
      </p>

      {!isCartEmpty ? (
        <div
          className="cart-popup-checkout-btn"
          onClick={() => clickOnCheckoutButton()}
        >
          Checkout
        </div>
      ) : null}
    </div>
  );
};
export default CartPopup;
