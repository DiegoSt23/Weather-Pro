import { useState } from "react";

// Components
import ResponsiveSearchBar from "./responsiveSearchBar/ResponsiveSearchBar";

// Framer Motion
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ setQuery, setViewStatus }) => {
  const [value, setValue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const handleModalOpen = () => {
    modalOpen ? close() : open();
  };

  const handleSetQuery = (e) => {
    e.preventDefault();
    if (value) {
      setQuery(value);
      setViewStatus(true);
    }
  };

  return (
    <header className="header">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "just", duration: 1 }}
      >
        WeatherApp
      </motion.h1>
      {modalOpen ? (
        <AiOutlineClose
          className="responsive-search-icon"
          onClick={handleModalOpen}
        />
      ) : (
        <BsSearch
          className="responsive-search-icon"
          onClick={handleModalOpen}
        />
      )}
      <motion.form
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "just", duration: 1 }}
      >
        <input
          value={value}
          type="text"
          placeholder="Search for any city in the world"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSetQuery}>
          <BsSearch />
        </button>
      </motion.form>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <ResponsiveSearchBar
            modalOpen={modalOpen}
            handleClose={close}
            setQuery={setQuery}
            setViewStatus={setViewStatus}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
