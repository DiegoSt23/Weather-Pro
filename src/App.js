import "./sass/main.css";
import { useState } from "react";

// Components
import Header from "./components/header/Header";
import CityCard from "./components/city/CityCard";

// Framer Motion
import { motion } from "framer-motion";

function App() {
  const [query, setQuery] = useState("");
  const [viewStatus, setViewStatus] = useState(true);

  return (
    <div className="main-container">
      <Header setQuery={setQuery} setViewStatus={setViewStatus} />
      {query ? (
        <CityCard
          query={query}
          viewStatus={viewStatus}
          setViewStatus={setViewStatus}
        />
      ) : (
        <div className="welcome-message">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "just", duration: 1 }}
          >
            Welcome!
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "just", duration: 1 }}
          >
            Use the options above to find the current weather and 7 day forecast
            in any city of the world or in your current location.
          </motion.p>
        </div>
      )}
    </div>
  );
}

export default App;
