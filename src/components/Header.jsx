import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = (props) => {
  const handleChange = props.handleChange;
  const searchInput = props.searchInput;
  const resetChange = props.resetChange;

  const navigate = useNavigate()

  return (
    <>
      <h1>Bungeons and Bragons 5E</h1>
      <header className="header">
        <motion.h2 whileHover={{ scale: 1.05 }} whileTap={resetChange}>
          <Link to="/">All Monsters</Link>
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }} className="search" onClick={() => {navigate('/')}}>
          <input
            type="text"
            placeholder="Search monsters..."
            onChange={handleChange}
            value={searchInput}
          />
        </motion.div>

        <div className="about-and-addmonster">
          <motion.h2 whileHover={{ scale: 1.05 }} whileTap={{ opacity: 0 }}>
            <Link to="/about">About</Link>
          </motion.h2>
        </div>
      </header>
    </>
  );
};

export default Header;
