import { useEffect } from "react";

// Framer Motion
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SingleDayForecast = ({
  timestamp,
  maxTemp,
  minTemp,
  description,
  icon,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const day = new Date(timestamp * 1000)
    .toLocaleDateString("en", { weekday: "long", day: "numeric" })
    .toLocaleUpperCase();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "just",
          duration: 1,
        },
      });
    }
  }, [inView, animation]);

  return (
    <motion.div
      className="forecast-card"
      initial={{ y: 50, opacity: 0 }}
      animate={animation}
      ref={ref}
    >
      <h4>{day}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />
      <p>{description.toUpperCase()}</p>
      <p className="detail">Max: {maxTemp}</p>
      <p className="detail">Min: {minTemp}</p>
    </motion.div>
  );
};

export default SingleDayForecast;
