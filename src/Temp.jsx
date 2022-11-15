import { Abc } from "@mui/icons-material";
import React from "react";
import { useState, useEffect } from "react";

function Temp() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const API_Key = "bab281d79e5f1e9755a68d754cc313e7";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=${API_Key}`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>No Data Found  </p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">Min :{city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
            </div>

            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Temp;
