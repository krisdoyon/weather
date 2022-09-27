"use strict";

const body = document.querySelector("body");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const printWeather = function (data) {
  // console.log(`Current weather for ${data.name}`);
  console.log(`------------------------------------------------`);
  console.log(`${`Latitude:`.padEnd(20, " ")} ${data.coord.lat}`);
  console.log(`${`Longitude:`.padEnd(20, " ")} ${data.coord.lon}`);
  console.log(
    `${`Description:`.padEnd(20, " ")} ${data.weather[0].description}`
  );
  console.log(
    `${`Temperature:`.padEnd(20, " ")} ${Math.round(data.main.temp)}`
  );
  console.log(
    `${`Feels like:`.padEnd(20, " ")} ${Math.round(data.main.feels_like)}`
  );
  console.log(`${`Humidity:`.padEnd(20, " ")} ${data.main.humidity}%`);
  console.log(`${`Wind:`.padEnd(20, " ")} ${data.wind.speed} mph`);
  console.log(
    `${`Max temp today:`.padEnd(20, " ")} ${Math.round(data.main.temp_max)}`
  );
  console.log(
    `${`Min temp today:`.padEnd(20, " ")} ${Math.round(data.main.temp_min)}`
  );
  console.log(
    `${`Sunrise:`.padEnd(20, " ")} ${new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date(data.sys.sunrise * 1000))}`
  );
  console.log(
    `${`Sunset:`.padEnd(20, " ")} ${new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date(data.sys.sunset * 1000))}`
  );
};

const getWeather = async function () {
  const position = await getPosition();
  const { latitude: lat, longitude: lng } = position.coords;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2365b77577087dbfc79d7061d3559704&units=imperial`
  );
  const data = await response.json();
  console.log(data);
  printWeather(data);
};

// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?lat=41.9844&lon=-72.3163&appid=2365b77577087dbfc79d7061d3559704`
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// getWeather();

// const getAPOD = async function () {
//   console.log("Getting Data...");
//   const response = await fetch(
//     `https://api.nasa.gov/planetary/apod?api_key=8Ax0gw0J0UnSTvYQoPYviSDZJQR5gCFDCXi6nelr&count=1&thumbs=True`
//   );
//   console.log("Got response...");
//   const [data] = await response.json();
//   console.log("Converted to JSON...");
//   const imgEl = document.createElement("img");
//   console.log("Created image...");
//   imgEl.src = data.url;
//   console.log("Set image src...");
//   body.append(imgEl);
//   console.log("Inserted image...");
// };

// getAPOD();

const generateRandomCoords = function () {
  return {
    lat: Math.round((Math.random() - 0.5) * 180 * 10) / 10,
    lng: Math.round((Math.random() - 0.5) * 360 * 10) / 10,
  };
};

const generateRandomUSCoords = function () {
  return {
    lat: 30 + Math.round(Math.random() * 18 * 10) / 10,
    lng: -70 - Math.round(Math.random() * 50 * 10) / 10,
  };
};

const getRandomWeather = async function () {
  try {
    const { lat, lng } = generateRandomUSCoords();
    console.log(lat, lng);

    const geoResponse = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );
    if (!geoResponse.ok)
      throw new Error(
        `***Problem with geocoding location (${geoResponse.status})`
      );
    console.log(geoResponse);
    const geoData = await geoResponse.json();
    console.log(`Getting weather data for ${geoData.city}, ${geoData.region}`);
    console.log(geoData);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2365b77577087dbfc79d7061d3559704&units=imperial`
    );
    if (!response.ok)
      throw new Error(`***Problem getting weather data (${response.status})`);
    const data = await response.json();
    console.log(data);
    printWeather(data);
  } catch (err) {
    console.error(err);
  }
};

getRandomWeather();

// Search location
