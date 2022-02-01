import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
        <li>
          <Link to="/">Terms and Conditions</Link>
        </li>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar section__padding">
      <div className="navbar__logo">
        <Link to="/">
          karya <span>bumi</span>
        </Link>
      </div>
      <div className="navbar__menu">
        <Menu />
      </div>
      <div className="navbar__mobile">
        <Burger
          onClick={() => setToggleMenu(!toggleMenu)}
          isOpen={toggleMenu}
          style={{ fontSize: 12 }}
        />
        <AnimatePresence>
          {toggleMenu && (
            <motion.div
              className="navbar__mobile-container"
              transition={{ ease: "easeInOut", duration: 0.5 }}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{ x: 0 }}
            >
              <Menu />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
