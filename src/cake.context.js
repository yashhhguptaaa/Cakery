import { useState, createContext, useEffect } from "react";
import { fetchCakeDataAPI } from "./mock-utils/mockApi";

const CakeryDataContext = createContext();

const CakeryDataProvider = ({ children }) => {
  const [cakeData, setCakeData] = useState([]);
  const [addToCartItems, setAddToCartItems] = useState([]);
  const [currentCakeId, setCurrentCakeId] = useState("");

  useEffect(() => {
    (async function () {
      const fetchCakeryData = await fetchCakeDataAPI();
      setCakeData([...fetchCakeryData]);
    })();
  }, []);

  const addNewCakeProduct = (cakeDetails) => {
    const cakeId = String(
      cakeDetails.name.split(" ").join("") + (cakeData.length + 1)
    );
    setCakeData((cakeData) => [
      ...cakeData,
      Object.assign(cakeDetails, { itemInCart: false, id: cakeId }),
    ]);

    return cakeId;
  };

  const deleteCakeProduct = (cakeId) => {
    const filteredData = cakeData.filter((cake) => cake.id !== cakeId);
    setCakeData([...filteredData]);

    const filterMyCake = addToCartItems.filter((cake) => cake.id !== cakeId);
    setAddToCartItems([...filterMyCake]);
  };

  const addToCart = (cakeId) => {
    const filterMyCake = cakeData.filter((cake) => cake.id === cakeId);

    setAddToCartItems((addToCartItems) => [...addToCartItems, ...filterMyCake]);

    const filteredData = cakeData.map((cake) => {
      if (cake.id === cakeId) {
        return Object.assign(cake, { itemInCart: true });
      }
      return cake;
    });

    setCakeData([...filteredData]);
  };

  const removeFromMyCart = (cakeId) => {
    const filterMyCake = addToCartItems.filter((cake) => cake.id !== cakeId);
    setAddToCartItems([...filterMyCake]);

    const filteredData = cakeData.map((cake) => {
      if (cake.id === cakeId) {
        return Object.assign(cake, { itemInCart: false });
      }
      return cake;
    });
    setCakeData([...filteredData]);
  };

  const checkoutCakeItems = () => {
    const checkoutString = `Thanks for buying from Cakery 😊
        ${addToCartItems
          .map(({ name, price }) => `${name}: ₹ ${price}`)
          .join("\n")}
          Total Bill: ₹ ${addToCartItems.reduce(
            (sum, item) => sum + item.price,
            0
          )}
    `;
    console.log(checkoutString);

    setAddToCartItems([]);
    const filteredData = cakeData.map((cake) =>
      Object.assign(cake, { itemInCart: false })
    );
    setCakeData([...filteredData]);
  };

  const fetchCakeThroughCakeId = (cakeId) => {
    const filterMyCake = cakeData.filter((cake) => cake.id === cakeId);
    return filterMyCake.length > 0 ? filterMyCake[0] : {};
  };

  return (
    <CakeryDataContext.Provider
      value={{
        cakeDataArray: cakeData,
        cakeInMyCartArray: addToCartItems,
        addNewCakeInCakery: addNewCakeProduct,
        deleteCakeFromCakery: deleteCakeProduct,
        addThisCakeToMyCart: addToCart,
        removeThisCakeFromMyCart: removeFromMyCart,
        clickOnCheckoutButton: checkoutCakeItems,
        fetchCakeThroughCakeId: fetchCakeThroughCakeId(currentCakeId),
        setCurrentCakeId: setCurrentCakeId,
      }}
    >
      {children}
    </CakeryDataContext.Provider>
  );
};

export { CakeryDataContext, CakeryDataProvider };
