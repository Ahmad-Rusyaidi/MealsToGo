import camelize from "camelize";

export const restaurantRequest = (location) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-30eca/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    console.log(res);
    return res.json();
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
