import camelize from "camelize";


export const locationRequest = (searchTerm) => {
  return fetch(
    `http://127.0.0.1:5001/mealstogo-30eca/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    console.log(res);
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
