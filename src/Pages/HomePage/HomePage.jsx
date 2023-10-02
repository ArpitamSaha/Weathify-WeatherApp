import React, { useState } from "react";
import "./HomePage.scss";
import API_Fetch from "../../Components/API_Fetch";
import { useNavigate } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons'



const HomePage = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const search = (e) => {
    setCity(e.target.value);
    // console.log(city)
  };
  const searchCity = async () => {
    let cityName = city;
    // console.log(cityName);
    if (cityName === " ")
      document.getElementById("").innerHTML = "Please enter a city name 📌";
    else {
      let data = await API_Fetch(cityName);
      if (data.ok) {
        navigate("/DataPage", { state: { cityName } });
      } else
        document.getElementById("error").innerHTML =
          "Please enter a valid city name 📌";
    }
  };

  return (
    <div className="home-container">
        <div className="heading">
            <h2 className="header">
                Enter a city to get forecast
            </h2>
        </div>
      <div className="search-section">
        <div className="input-grp">
          <input
            type="search"
            className="input-search"
            onChange={search}
            placeholder="City"
          />
          <button className="input-btn" id="search-addon" onClick={searchCity}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              beatFade
              size="xl"
              style={{ color: "#1c1d20" }}
            />
          </button>
        </div>
        <div id="error"></div>
      </div>
    </div>

    // <div className="container">
    //   <div className="input-group rounded mx-3">
    //     <div search-btn-grp>
    //       <input
    //         type="search"
    //         className="form-control rounded "
    //         onChange={search}
    //         placeholder="Search"
    //         aria-label="Search"
    //         aria-describedby="search-addon"
    //       />
    //       <button
    //         className="input-group-text border-0 search-btn"
    //         id="search-addon"
    //         onClick={searchCity}
    //       >
    //         Search
    //       </button>
    //     </div>
    //   </div>
    //   <div id="error"></div>
    // </div>
  );
};

export default HomePage;
