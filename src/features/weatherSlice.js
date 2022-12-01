import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { weatherCodeMap, convertTo12Hr } from "../utils";

const initialState = {
  location: "",
  locale: navigator.language,
  todayIndex: "",
  todayISO: "",
  todayDisplay: "",
  current: {
    min: null,
    max: null,
    iconURL: null,
    label: null,
    temp: null,
    feelsLike: null,
  },
  forecast: [],
  details: {},
  astro: {
    daylightHours: null,
    daylightMins: null,
    sunrise: null,
    sunset: null,
    moonrise: null,
    moonset: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const getMeteoData = async (lat, lon) => {
  const response = await axios(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit&daily=precipitation_sum,temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
  );
  return response.data;
};

const getOpenData = async function (lat, lon) {
  const response = await axios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2365b77577087dbfc79d7061d3559704&units=imperial`
  );
  return response.data;
};

const getAstData = async function (lat, lon) {
  const response = await axios(
    `https://api.ipgeolocation.io/astronomy?apiKey=16a21d468197424994f313e5191e25fb&lat=${lat}&long=${lon}`
  );
  return response.data;
};

export const getWeatherData = createAsyncThunk(
  "weather/getData",
  async ({ lat, lon }, thunkAPI) => {
    try {
      const [meteoData, openData, astData] = await Promise.all([
        getMeteoData(lat, lon),
        getOpenData(lat, lon),
        getAstData(lat, lon),
      ]);
      return { meteoData, openData, astData };
    } catch (error) {
      console.error(error.message);
      return thunkAPI.rejectWithValue(error.response.data.reason);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(
      getWeatherData.fulfilled,
      (state, { payload: { meteoData, openData, astData } }) => {
        state.isLoading = false;
        const todayISO = new Intl.DateTimeFormat("en-CA", {
          timeZone: `${meteoData.timezone}`,
        }).format(new Date());
        state.todayIndex = meteoData.daily.time.findIndex(
          (date) => date === todayISO
        );
        state.todayDisplay = new Intl.DateTimeFormat(state.locale, {
          timeZone: `${meteoData.timezone}`,
          month: "long",
          day: "2-digit",
        }).format(new Date());
        state.todayISO = todayISO;

        // CURRENT
        state.current.min = Math.round(
          meteoData.daily.temperature_2m_max[state.todayIndex]
        );
        state.current.max = Math.round(
          meteoData.daily.temperature_2m_min[state.todayIndex]
        );
        state.current.iconURL = weatherCodeMap.get(
          meteoData.current_weather.weathercode
        ).icon;
        state.current.label = weatherCodeMap.get(
          meteoData.current_weather.weathercode
        ).label;
        state.current.temp = Math.round(openData.main.temp);
        state.current.feelsLike = Math.round(openData.main.feels_like);

        // FORECAST
        state.forecast = Array.from({ length: 5 }).map((_, i) => {
          const index = state.todayIndex + i + 1;
          const date = meteoData.daily.time[index];
          const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
          return {
            date: date.split("-").slice(1, 3).join("/"),
            day: weekdays[new Date(`${date} 00:00:00`).getDay()],
            iconURL: weatherCodeMap.get(meteoData.daily.weathercode[index])
              .icon,
            label: weatherCodeMap.get(meteoData.daily.weathercode[index]).label,
            min: Math.round(meteoData.daily.temperature_2m_min[index]),
            max: Math.round(meteoData.daily.temperature_2m_max[index]),
          };
        });

        // DETAILS
        state.details = {
          humidity: openData.main.humidity,
          wind: Math.round(openData.wind.speed),
          clouds: openData.clouds.all,
          precipitation:
            Math.round(
              meteoData.daily.precipitation_sum[state.todayIndex] *
                0.0393701 *
                10
            ) / 10,
          visibility: Math.round(openData.visibility / 1000 / 1.6),
          pressure: Math.round(openData.main.pressure * 0.0295 * 100) / 100,
        };

        // ASTRO
        const [daylightHours, daylightMins] = astData["day_length"].split(":");
        state.astro = {
          daylightHours,
          daylightMins,
          sunrise: convertTo12Hr(astData.sunrise),
          sunset: convertTo12Hr(astData.sunset),
          moonrise: convertTo12Hr(astData.moonrise),
          moonset: convertTo12Hr(astData.moonset),
        };
      }
    );
    builder.addCase(getWeatherData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = payload;
    });
  },
});

export const { setLocation } = weatherSlice.actions;

export default weatherSlice.reducer;
