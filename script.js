"use strict";

import { Moon } from "./node_modules/lunarphase-js/dist/esm/lunarphase-js.js";

/////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL VARIABLES
let todayIndex, openData, meteoData, todayISO, moonData, today;
let isSearchOpen = false;

const locale = navigator.language;

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const weatherCodeMap = new Map([
  [0, { label: "Clear Sky", icon: "01d" }],
  [1, { label: "Mainly Clear", icon: "01d" }],
  [2, { label: "Partly Cloudy", icon: "02d" }],
  [3, { label: "Overcast", icon: "03d" }],
  [45, { label: "Fog", icon: "50d" }],
  [48, { label: "Fog", icon: "50d" }],
  [51, { label: "Light Drizzle", icon: "09d" }],
  [53, { label: "Moderate Drizzle", icon: "09d" }],
  [55, { label: "Heavy Drizzle", icon: "09d" }],
  [56, { label: "Freezing Drizzle", icon: "09d" }],
  [57, { label: "Freezing Drizzle", icon: "096" }],
  [61, { label: "Slight Rain", icon: "10d" }],
  [63, { label: "Moderate Rain", icon: "09d" }],
  [65, { label: "Heavy Rain", icon: "09d" }],
  [66, { label: "Light Freezing Rain", icon: "09d" }],
  [67, { label: "Heavy Freezing Rain", icon: "09d" }],
  [71, { label: "Light Snow", icon: "13d" }],
  [73, { label: "Moderate Snow", icon: "13d" }],
  [75, { label: "Heavy Snow", icon: "13d" }],
  [77, { label: "Snow Grains", icon: "13d" }],
  [80, { label: "Light Rain Showers", icon: "10d" }],
  [81, { label: "Moderate Rain Showers", icon: "09d" }],
  [82, { label: "Heavy Rain Showers", icon: "09d" }],
  [85, { label: "Slight Snow Showers", icon: "13d" }],
  [86, { label: "Heavy Snow Showers", icon: "13d" }],
  [95, { label: "Thunderstorms", icon: "11d" }],
  [96, { label: "Thunderstorms", icon: "11d" }],
  [99, { label: "Thunderstorms", icon: "11d" }],
]);

const moonIconMap = new Map([["New"], ["First Quarter"]]);

/////////////////////////////////////////////////////////////////////////////////////////////////
// DOM ELEMENTS

const body = document.querySelector("body");
const main = document.querySelector("main");

const btnSearch = document.querySelector(".btn-search");
const containerSearch = document.querySelector(".container-search");
const inputSearch = document.querySelector("#input-search");
const btnLocation = document.querySelector(".btn-location");
const labelLocation = document.querySelector(".label-location");
const labelTime = document.querySelector(".label-time");
const labelTimeUTC = document.querySelector(".label-time-utc");
const todayLabel = document.querySelector(".today");
const cardCurrent = document.querySelector(".card-current");
const cardForecast = document.querySelector(".card-forecast");
const cardDetails = document.querySelector(".card-details");
const cardAst = document.querySelector(".card-ast");
const cardSearch = document.querySelector(".card-search");

/////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTIONS

const getWeatherData = async function (lat, lon) {
  try {
    const meteoResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
    );
    if (!meteoResponse.ok)
      throw new Error("Problem getting current weather data from OpenMeteo");
    meteoData = await meteoResponse.json();
    const openResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2365b77577087dbfc79d7061d3559704&units=imperial`
    );
    if (!openResponse.ok)
      throw new Error("Problem getting weather data from OpenWeatherMap");
    openData = await openResponse.json();
    setDate();
    todayIndex = meteoData.daily.time.findIndex((date) => date === todayISO);
    const moonResponse = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}/${todayISO}/?key=G2KTKKSDX2CA79SJTJAYA52LU&include=days&elements=moonrise,moonset&timezone=Z`
    );
    if (!moonResponse.ok) throw new Error("Problem getting moon data");
    moonData = await moonResponse.json();
    displayWeather();
  } catch (err) {
    console.error(err);
  }
};

const displayWeather = function () {
  displayCurrent();
  displayForecast();
  displayDetails();
  displayAst();
  main.style.transform = "translateY(0%)";
  main.style.opacity = "1";
  main.style.visibility = "visible";
  body.style.overflow = "auto";
};

const displayCurrent = function () {
  const html = `<div class="card-column">
    <img
      class="weather-icon"
      src="https://openweathermap.org/img/wn/${
        weatherCodeMap.get(meteoData.current_weather.weathercode).icon
      }@2x.png"
    /><span class="current-conditions">${
      weatherCodeMap.get(meteoData.current_weather.weathercode).label
    }
      </span>
    <span class="temp-range">${Math.round(
      meteoData.daily.temperature_2m_max[todayIndex]
    )} / ${Math.round(
    meteoData.daily.temperature_2m_min[todayIndex]
  )} &deg;F</span>
  </div>
  <div class="card-column">
    <span class="current-temp"
      >${Math.round(
        openData.main.temp
      )}<span class="current-temp-unit"> &deg;F</span></span
    ><span class="feels-like">Feels like: ${Math.round(
      openData.main.feels_like
    )} &deg;F</span>

  </div>`;

  cardCurrent.innerHTML = html;
};

const displayDetails = function () {
  const html = `<div class="detail">
    <span class="material-symbols-outlined detail__icon">
      water_drop
    </span>
    <div class="detail__label">HUMIDITY</div>
    <div class="detail__value">${openData.main.humidity}%</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> air </span>
    <div class="detail__label">WIND</div>
    <div class="detail__value">${Math.round(openData.wind.speed)} mph</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> cloud </span>
    <div class="detail__label">CLOUD COVER</div>
    <div class="detail__value">${openData.clouds.all}%</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> rainy </span>
    <div class="detail__label">PRECIPITATION</div>
    <div class="detail__value">${
      meteoData.daily.precipitation_sum[todayIndex]
    } in</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> visibility </span>
    <div class="detail__label">VISIBILITY</div>
    <div class="detail__value">${Math.round(
      openData.visibility / 1000 / 1.6
    )} mi</div>
  </div>
  <div class="detail">
    <span class="material-symbols-outlined detail__icon"> compress </span>
    <div class="detail__label">PRESSURE</div>
    <div class="detail__value">${
      Math.round(openData.main.pressure * 0.0295 * 100) / 100
    } in</div>
  </div>`;
  cardDetails.innerHTML = html;
};

const displayForecast = function () {
  const forecastDates = meteoData.daily.time.slice(
    todayIndex + 1,
    todayIndex + 6
  );
  const htmlArr = forecastDates.map((date, i) => {
    const html = `<div class="card-forecast__day">
    <strong>${weekdays[new Date(`${date} 00:00:00`).getDay()]}</strong>
    <span>${date.split("-").slice(1, 3).join("/")}</span>
    <img
      class="weather-icon"
      src="https://openweathermap.org/img/wn/${
        weatherCodeMap.get(meteoData.daily.weathercode[todayIndex + i + 1]).icon
      }@2x.png"
    />
    <span>${
      weatherCodeMap.get(meteoData.daily.weathercode[todayIndex + i + 1]).label
    }</span>
    <span>${Math.round(
      meteoData.daily.temperature_2m_max[todayIndex + i + 1]
    )} / ${Math.round(
      meteoData.daily.temperature_2m_min[todayIndex + i + 1]
    )} &deg;F</span>
  </div>`;
    return html;
  });
  cardForecast.innerHTML = "";
  htmlArr.forEach((html) => cardForecast.insertAdjacentHTML("beforeend", html));
};

const getSearchResults = async function (query) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
  );
  const data = await response.json();
  return data;
};

const displaySearchCard = function () {
  cardSearch.style.maxHeight = "30rem";
  cardSearch.style.visibility = "visible";
  cardSearch.style.opacity = "1";
};

const hideSearchCard = function () {
  cardSearch.innerHTML = "";
  cardSearch.style.maxHeight = "0rem";
  cardSearch.style.visibility = "hidden";
  cardSearch.style.opacity = "0";
};

const renderSearchResults = function (query) {
  cardSearch.innerHTML = "";

  getSearchResults(query).then((data) => {
    if (!data.length) {
      const html = `<div class="no-results">No matching results. <br/> Please try again.</div>`;
      cardSearch.insertAdjacentHTML("beforeend", html);
      return;
    }

    data.forEach((result) => {
      const html = `<button class="btn btn-search-result" data-lat="${result.lat}" data-lon="${result.lon}" data-label="${result.display_name}">
        ${result.display_name}</button>
      `;
      cardSearch.insertAdjacentHTML("beforeend", html);
    });
  });
};

const getCurrentPosition = async function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const handleLocationClick = async function () {
  try {
    const position = await getCurrentPosition();
    const { latitude: lat, longitude: lon } = position.coords;
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await response.json();
    labelLocation.textContent = data.display_name;
    getWeatherData(lat, lon);
  } catch (err) {
    alert("Could not get your location.");
  }
};

const setDate = function () {
  const now = new Date();
  todayISO = new Intl.DateTimeFormat("en-CA", {
    timeZone: `${meteoData.timezone}`,
  }).format(now);
  const today = new Intl.DateTimeFormat(locale, {
    timeZone: `${meteoData.timezone}`,
    month: "long",
    day: "2-digit",
  }).format(now);
  todayLabel.textContent = today;
};

/////////////////////////////////////////////////////////////////////////////////////////////////
// EVENT HANDLERS

document.addEventListener("click", function (e) {
  !e.target.classList.contains("card-search") &&
    !e.target.closest(".container-search") &&
    hideSearchCard();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && document.activeElement === inputSearch) {
    btnSearch.click();
  }
});

containerSearch.addEventListener("click", function (e) {
  if (e.target.closest(".btn-location")) {
    handleLocationClick();
    hideSearchCard();
  } else if (e.target.classList.contains("btn-search")) {
    inputSearch.value || alert("Please enter a search term");
    if (!inputSearch.value) return;
    renderSearchResults(inputSearch.value);
    displaySearchCard();
    isSearchOpen = true;
  } else return;
});

cardSearch.addEventListener("click", function (e) {
  const clicked = e.target.closest(".btn-search-result");
  if (!clicked) return;
  getWeatherData(clicked.dataset.lat, clicked.dataset.lon);
  labelLocation.textContent = clicked.dataset.label;
  hideSearchCard();
  inputSearch.value = "";
});

const displayAst = function () {
  const dayLength = (openData.sys.sunset - openData.sys.sunrise) / 60 / 60;
  const html = `
  <h3 class="heading-ast">SUN</h3>
    <h3 class="heading-ast">MOON</h3>
    <span class="icon-ast icon-sun">☀️</span>
    <span class="icon-ast icon-moon">${Moon.lunarPhaseEmoji()}</span>
    <div class="flex-column">
      <strong>Daylight</strong>
      <span class="ast-info"> ${Math.trunc(dayLength)} hr, ${Math.round(
    (dayLength % Math.trunc(dayLength)) * 60
  )} min</span>
    </div>
    <div class="flex-column">
      <strong>Phase</strong>
      <span class="ast-info">${Moon.lunarPhase()}</span>
    </div>
    <div class="flex-column">
      <span class="ast-info"><strong>Rise:</strong> ${new Intl.DateTimeFormat(
        locale,
        {
          timeZone: `${meteoData.timezone}`,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      ).format(new Date(openData.sys.sunrise * 1000))}</span>
      <span class="ast-info"><strong>Set:</strong> ${new Intl.DateTimeFormat(
        locale,
        {
          timeZone: `${meteoData.timezone}`,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      ).format(new Date(openData.sys.sunset * 1000))}</span>
    </div>
    <div class="flex-column">
      <span class="ast-info"><strong>Rise: </strong>${new Intl.DateTimeFormat(
        locale,
        {
          timeZone: `${meteoData.timezone}`,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      ).format(
        new Date(todayISO + `T` + moonData.days[0].moonrise + "Z")
      )}</span>
      <span class="ast-info"><strong>Set: </strong>${new Intl.DateTimeFormat(
        locale,
        {
          timeZone: `${meteoData.timezone}`,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }
      ).format(
        new Date(todayISO + `T` + moonData.days[0].moonset + "Z")
      )}</span>
    </div>`;
  cardAst.innerHTML = html;
};
