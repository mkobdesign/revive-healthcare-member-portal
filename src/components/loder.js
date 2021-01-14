import React from "react";
import logo from "../../static/images/revive-healthcare-logo.png";

const Loader = () => (
    <div className="site-loader">
        <img
            src={logo}
            className="d-inline-block align-top"
            alt="Lotus Logo"
          />
    </div>
);

export default Loader;
