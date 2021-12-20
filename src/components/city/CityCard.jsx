import { useState, useEffect } from "react";

// ApiRequest
import { getCityWeather } from "../../services/requests";

// Components
import CityWeather from "./CityWeather";
import CityForecast from "./cityForecast/CityForecast";

// Framer Motion
import { motion } from "framer-motion";

const CityCard = ({ query, viewStatus, setViewStatus }) => {
  const [requestStatus, setRequestStatus] = useState(true);
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [icon, setIcon] = useState("");
  const [description, setDescription] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  useEffect(() => {
    if (query) {
      const func = async () => {
        try {
          const res = await getCityWeather(query);
          setRequestStatus(true);
          setCityName(res.data.name);
          setCountryName(res.data.sys.country);
          setTemp(res.data.main.temp);
          setFeelsLike(res.data.main.feels_like);
          setMaxTemp(res.data.main.temp_max);
          setMinTemp(res.data.main.temp_min);
          setIcon(res.data.weather[0].icon);
          setDescription(res.data.weather[0].description);
          setWind(res.data.wind.speed);
          setHumidity(res.data.main.humidity);
          setLat(res.data.coord.lat);
          setLon(res.data.coord.lon);
          console.log(res);
        } catch (error) {
          setRequestStatus(false);
        }
      };
      func();
    }
  }, [query]);

  const handleChangeView = () => setViewStatus(!viewStatus);

  return (
    <>
      {requestStatus ? (
        <motion.div
          className="city-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "just", duration: 1 }}
        >
          <div className="city-info-container">
            <h2>{cityName}</h2>
            <h3>{countryName}</h3>
          </div>
          {viewStatus ? (
            <CityWeather
              temp={temp}
              feelsLike={feelsLike}
              maxTemp={maxTemp}
              minTemp={minTemp}
              icon={icon}
              description={description}
              wind={wind}
              humidity={humidity}
            />
          ) : (
            <CityForecast lat={lat} lon={lon} />
          )}
          <div className="options">
            {viewStatus ? (
              <h4 onClick={handleChangeView}>7 DAYS FORECAST</h4>
            ) : (
              <h4 onClick={handleChangeView}>BACK</h4>
            )}
          </div>
        </motion.div>
      ) : (
        <div className="error-message-container">
          <p>Please enter a valid city.</p>
        </div>
      )}
    </>
  );
};

export default CityCard;
