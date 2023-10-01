import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import { useLocation } from "react-router-dom";
import API_Fetch from "../../Components/API_Fetch";

const conditions = require("../../Components/WeatherCondition.json");

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState([]);
  const location = useLocation();
  const cityName = location.state.cityName;
  const fetchData = async () => {
    const response = await API_Fetch(cityName);
    setFetchedData(await response.json());
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // let temp = fetchedData.current.temp_c;
  if (loading) {
    console.log(fetchedData);
    console.log(fetchedData.current.is_day);
    let code = conditions.filter((obj) => obj.code === fetchedData.current.condition.code);
    const icon = code[0].icon;
    let path = "";
    fetchedData.current.is_day=== 1 ? (path = `Icons/day/${icon}.png`) : (path = `Icons/night/${icon}.png`);

    return (
      <div className="container">
        <div className="box-1">
          <div className="current-temp">
            <div className="temperatures">
              <h2 id="temperature">
                {fetchedData.current.temp_c} C | {fetchedData.current.temp_f} F 
              </h2>
            </div>
            <div className="temp-icon">
              <img src={path} alt="Forecast" />
            </div>
          </div>

          <div className="feels-like">
            <p>
              Feels Like : {fetchedData.current.feelslike_c} |{" "}
              {fetchedData.current.feelslike_f}{" "}
            </p>
            <p>Precipitation : {fetchedData.current.precip_in}</p>
            <p>Wind Speed : {fetchedData.current.vis_km} </p>
            <p>Wind Direction : {fetchedData.current.wind_dir} </p>
            <p>Wind Degree : {fetchedData.current.wind_degree} </p>
            <p>Pressure : {fetchedData.current.pressure_mb} </p>
            <p>Humidity : {fetchedData.current.humidity} </p>
          </div>
        </div>

        <div className="box-2">
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  }
};

export default MainPage;
