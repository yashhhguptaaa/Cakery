import { useState, useContext } from "react";
import classNames from "classnames";
import { CakeryDataContext } from "../../cake.context";
import TrashIcon from "../../assets/trash-icon.ico";
import SadEmoji from "../../assets/sad_emoji.png";
import "./AdminControl.css";

const Columns = {
  CAKE_PRODUCTS: "Cake Products",
  ADD_NEW_CAKE: "Add New Cake",
};

const AdminControl = () => {
  const [selectedColumn, setSelectedColumn] = useState(Columns.CAKE_PRODUCTS);
  const [cakeDetails, setCakeDetails] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });
  const { cakeDataArray, addNewCakeInCakery, deleteCakeFromCakery } =
    useContext(CakeryDataContext);
  return (
    <div className="admin-control-container">
      <div className="admin-control-columns">
        <p
          className={classNames("admin-control-all-cakes", {
            "selected-column": selectedColumn === Columns.CAKE_PRODUCTS,
          })}
          onClick={() => setSelectedColumn(Columns.CAKE_PRODUCTS)}
        >
          Cake Products
        </p>
        <p
          className={classNames("admin-control-add-cake", {
            "selected-column": selectedColumn === Columns.ADD_NEW_CAKE,
          })}
          onClick={() => setSelectedColumn(Columns.ADD_NEW_CAKE)}
        >
          Add New Cake
        </p>
      </div>
      {(() => {
        switch (selectedColumn) {
          case Columns.CAKE_PRODUCTS: {
            return (
              <>
                <div className="all-cakes-container">
                  {cakeDataArray.length > 0 ? (
                    cakeDataArray.map((cake) => (
                      <div className="all-cakes-cake-body">
                        <div className="all-cakes-cake-details">
                          <div className="all-cakes-cake-image-wrapper">
                            <img
                              className="all-cakes-cake-image"
                              src={cake.image}
                            />
                          </div>
                          <p className="all-cakes-cake-title">{cake.name} </p>
                          <p>~</p>
                          <p className="all-cakes-cake-price">₹ {cake.price}</p>
                        </div>
                        <div
                          className="all-cakes-delete-icon-wrapper"
                          onClick={() => deleteCakeFromCakery(cake.id)}
                        >
                          <img
                            className="all-cakes-delete-icon"
                            src={TrashIcon}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="all-cakes-all-data-deleted">
                      <img src={SadEmoji} className="all-data-deleted-emoji" />
                    </div>
                  )}
                </div>
                <p className="all-cakes-total-price">
                  {cakeDataArray.length > 0
                    ? `Total Price: ₹
          ${cakeDataArray.reduce((result, cake) => cake.price + result, 0)}
          only /- `
                    : "Please Add Yummy Delicious Cake ! I wanna eat"}
                </p>
              </>
            );
          }
          case Columns.ADD_NEW_CAKE: {
            return (
              <div className="add-cake-container">
                <div className="add-cake-title-container">
                  <p className="add-cake-title-header"></p>
                  <input className="add-cake-title-input" />
                  <p className="dd-cake-title-error"></p>
                </div>
                <div className="add-cake-description-container">
                  <p className="add-cake-description-header"></p>
                  <input className="add-cake-description-input" />
                  <p className="dd-cake-description-error"></p>
                </div>
                <div className="add-cake-price-container">
                  <p className="add-cake-price-header"></p>
                  <input className="add-cake-price-input" />
                  <p className="dd-cake-price-error"></p>
                </div>
                <div className="add-cake-image-container">
                  <p className="add-cake-image-header"></p>
                  <input className="add-cake-image-input" />
                  <p className="dd-cake-image-error"></p>
                </div>
                <button>Add Cake</button>
              </div>
            );
          }
        }
      })()}
    </div>
  );
};
export default AdminControl;
