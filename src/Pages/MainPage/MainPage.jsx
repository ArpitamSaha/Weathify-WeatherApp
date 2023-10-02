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
    let code = conditions.filter(
      (obj) => obj.code === fetchedData.current.condition.code
    );
    const icon = code[0].icon;
    let path = "";
    fetchedData.current.is_day === 1
      ? (path = `Icons/day/${icon}.png`)
      : (path = `Icons/night/${icon}.png`);

    return (

      // Upper Box 

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

      {/* Lower Box */}

        <div className="box-2">
          <div className="card mb-4 gradient-custom rounded">
            <div className="card-body my-4">
              <h5 className="text-center pb-4">Hourly Forecast</h5>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div
                  className="carousel-inner px-2"
                  style={{ fontWeight: "600" }}
                >
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-around ">
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[1].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">00:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[1].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">01:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[2].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">02:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[3].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">03:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[4].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">04:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[5].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">05:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[6].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">06:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[7].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">07:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[8].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">08:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[9].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">09:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[10].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">10:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[11].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">11:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className="d-flex justify-content-around">
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[12].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">12:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[13].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">13:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[14].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">14:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[15].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">15:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[16].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">16:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[17].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">17:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[18].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">18:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[19].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">19:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[20].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">20:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[21].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">21:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[22].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">22:00</p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          {fetchedData.forecast.forecastday[0].hour[23].temp_c +
                            "\xB0" +
                            "C"}
                        </p>
                        <p className="mb-0">23:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  style={{ marginLeft: "-7%" }}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  style={{ marginRight: "-7%" }}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainPage;
