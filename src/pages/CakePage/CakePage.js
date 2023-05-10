import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CakeryDataContext } from "../../cake.context";
import "./CakePage.css";

const CakePage = () => {
  const { cakeId } = useParams();
  const {
    fetchCakeThroughCakeId,
    removeThisCakeFromMyCart,
    addThisCakeToMyCart,
  } = useContext(CakeryDataContext);
  const [cakeDetails, setCakeDetails] = useState({});
  useEffect(() => {
    if (cakeId) {
      const fetchedCakeDetails = fetchCakeThroughCakeId(cakeId);
      setCakeDetails(Object.assign({}, fetchedCakeDetails));
    }
  }, [cakeId]);

  return (
    <>
      {Object.keys(cakeDetails).length > 0 ? (
        <div className="cake-page-container">
          <div className="cake-page-details">
            <div className="cake-page-image-container">
              <img src={cakeDetails.image} className="cake-page-image" />
            </div>
            <p className="cake-page-title">{cakeDetails.name}</p>
            <p className="cake-page-description">{cakeDetails.description}</p>
            <div
              className="cake-page-add-to-cart-btn"
              onClick={() => {
                if (cakeDetails.itemInCart) {
                  removeThisCakeFromMyCart(cakeDetails.id);
                } else {
                  addThisCakeToMyCart(cakeDetails.id);
                }
              }}
            >
              {cakeDetails.itemInCart ? "Remove" : "Add To Cart"}
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
export default CakePage;
