import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          style={{ fontSize: 10 }}
        />
        {toggleMenu && (
          <div className="navbar__mobile-container">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
