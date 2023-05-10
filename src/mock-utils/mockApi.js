import cakeMockData from "./mockData.json";

const fetchCakeDataAPI = async () => {
  const jsonData = new Promise((resolve) => {
    setTimeout(() => resolve(cakeMockData), 200);
  });
  const cakeData = await jsonData;
  return cakeData;
};

export { fetchCakeDataAPI };
