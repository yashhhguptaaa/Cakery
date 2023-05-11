import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCakeDetails({ ...cakeDetails, [e.target.name]: e.target.value });
  };
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
                      <div
                        key={cake.id + cake.name}
                        className="all-cakes-cake-body"
                      >
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
                  <p className="add-cake-title-header">Cake Title</p>
                  <input
                    className="add-cake-title-input"
                    value={cakeDetails.name}
                    name="name"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter the cake name 😋"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="add-cake-description-container">
                  <p className="add-cake-description-header">
                    Cake Description
                  </p>
                  <input
                    className="add-cake-description-input"
                    value={cakeDetails.description}
                    name="description"
                    type="text"
                    autoComplete="off"
                    placeholder="Enter the cake description 📝"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="add-cake-price-container">
                  <p className="add-cake-price-header">Cake Price</p>
                  <input
                    className="add-cake-price-input"
                    value={cakeDetails.price}
                    name="price"
                    type="number"
                    min={99}
                    autoComplete="off"
                    placeholder="Enter the cake price 💵"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="add-cake-image-container">
                  <p className="add-cake-image-header">Cake Image</p>
                  <input
                    className="add-cake-image-input"
                    value={cakeDetails.image}
                    name="image"
                    type="url"
                    autoComplete="off"
                    placeholder="Provide the cake image url 📸"
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="add-cake-btn"
                  onClick={() => {
                    const cakeId = addNewCakeInCakery(cakeDetails);
                    navigate(`/cake/${cakeId}`);
                  }}
                >
                  Add Cake
                </button>
              </div>
            );
          }
        }
      })()}
    </div>
  );
};
export default AdminControl;
