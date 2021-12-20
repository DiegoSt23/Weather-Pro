const CityWeather = ({
  temp,
  feelsLike,
  maxTemp,
  minTemp,
  icon,
  description,
  wind,
  humidity,
}) => {
  return (
    <div className="city-weather-container">
      <div className="main-details-container">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <h1>{temp} °C</h1>
        <p>{description.toUpperCase()}</p>
      </div>
      <div className="details-container">
        <div className="detail-container">
          <p>Feels like:</p>
          <p>{feelsLike} °C</p>
        </div>
        <div className="detail-container">
          <p>Max:</p>
          <p>{maxTemp} °C</p>
        </div>
        <div className="detail-container">
          <p>Min:</p>
          <p>{minTemp} °C</p>
        </div>
        <div className="detail-container">
          <p>Wind:</p>
          <p>{wind} km/h</p>
        </div>
        <div className="detail-container">
          <p>Humidity:</p>
          <p>{humidity} %</p>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
