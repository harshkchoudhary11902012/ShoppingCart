import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span>Equipment World</span>
        <div>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
