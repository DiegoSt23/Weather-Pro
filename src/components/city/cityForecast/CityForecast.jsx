import { useState, useEffect } from "react";

// ApiRequests
import { getWeatherForecast } from "../../../services/requests";

// Components
import SingleDayForecast from "./SingleDayForecast";

const CityForecast = ({ lat, lon }) => {
  const [weatherForecast, setWeatherForecast] = useState([]);

  const forecastPerDayList = weatherForecast?.map((item, index) => (
    <SingleDayForecast
      key={index}
      timestamp={item.dt}
      maxTemp={item.temp.max}
      minTemp={item.temp.min}
      description={item.weather[0].description}
      icon={item.weather[0].icon}
    />
  ));

  useEffect(() => {
    if (lat) {
      const func = async () => {
        try {
          const res = await getWeatherForecast(lat, lon);
          setWeatherForecast(res.data.daily);
          console.log(res.data.daily);
        } catch (eror) {}
      };
      func();
    }
  }, [lat, lon]);

  return (
    <div className="forecast-container">
      {weatherForecast.length > 0 && forecastPerDayList}
    </div>
  );
};

export default CityForecast;
