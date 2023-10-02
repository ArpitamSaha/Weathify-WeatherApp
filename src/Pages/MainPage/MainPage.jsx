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
            <div className="temperature">
              <div className="temp-location">
                <h1>
                  {fetchedData.current.temp_c + "\xB0 C"} |{" "}
                  {fetchedData.current.temp_f + "\xB0 F"}
                </h1>
                <h2>
                  Results for :
                  <span>
                    {fetchedData.location.name},{fetchedData.location.region}
                  </span>
                </h2>
              </div>
            </div>
            <div className="temp-icon">
              <img src={path} alt="Forecast" />
            </div>
          </div>

          <div className="add-data">
            <div className="couple-data">
              <div className="couple1">
                <p>
                  Feels Like : {fetchedData.current.feelslike_c + "\xB0  C"} |
                  &nbsp;
                  {fetchedData.current.feelslike_f + "\xB0 F"}
                </p>
                <p>
                  Wind Speed : {fetchedData.current.wind_kph} kmph | &nbsp;
                  {fetchedData.current.wind_mph} mph
                </p>
                <p>Wind Direction : {fetchedData.current.wind_dir} </p>
                <p>Pressure : {fetchedData.current.pressure_mb} mb </p>
              </div>
              <div className="couple2">
                <p>Precipitation : {fetchedData.current.precip_in}</p>
                <p>
                  Visibilty : {fetchedData.current.vis_km} km | &nbsp;
                  {fetchedData.current.vis_miles} m
                </p>
                <p>Wind Degree : {fetchedData.current.wind_degree} </p>
                <p>Humidity : {fetchedData.current.humidity}% </p>
              </div>
            </div>
          </div>
        </div>

        <div className="box-2">
          <div className="weather-forecast">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <svg
                    class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    width="800"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: First slide"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#777"></rect>
                    <text x="50%" y="50%" fill="#555" dy=".3em">
                      First slide
                    </text>
                  </svg>
                </div>
                <div class="carousel-item">
                  <svg
                    class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    width="800"
                    height="400"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Second slide"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#666"></rect>
                    <text x="50%" y="50%" fill="#444" dy=".3em">
                      Second slide
                    </text>
                  </svg>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainPage;
