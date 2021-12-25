import { useState, useEffect } from "react";

// Components
import Backdrop from "./Backdrop";

// useWindowDimensions
import useWindowDimensions from "../../../customHooks/useWindowDimensions/useWindowDimensions";

// Framer Motion
import { motion } from "framer-motion";

// Icons
import { BsSearch } from "react-icons/bs";

const ResponsiveSearchBar = ({ handleClose, setQuery, setViewStatus }) => {
  const [value, setValue] = useState("");
  const { width } = useWindowDimensions();

  const dropIn = {
    hidden: {
      x: "100vh",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 35,
        stiffness: 300,
      },
    },
    exit: {
      x: "100vh",
      opacity: 0,
    },
  };

  const handleSetSearch = (e) => {
    e.preventDefault();
    if (value) {
      setQuery(value);
      setViewStatus(true);
      handleClose();
    }
  };

  useEffect(() => {
    if (width > 576) {
      handleClose();
    }
  }, [width, handleClose]);

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="responsive-search-bar"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <form>
          <input
            type="text"
            placeholder="Enter the city"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleSetSearch}>
            <BsSearch />
          </button>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default ResponsiveSearchBar;
