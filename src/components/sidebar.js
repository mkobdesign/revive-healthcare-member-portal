import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import logo from "../../static/images/revive-healthcare-logo.png";

import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col"

const Sidebar = ({ siteTitle }) => (
  <nav className="sidebar flex-column col-md-3">
      <Navbar collapseOnSelect expand="md" variant="light">
        <Navbar.Brand href="/">
             <img
            src={logo}
            width="141"
            height="64"
            className="d-inline-block align-top"
            alt="Revive Healthcare"
          />
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Col sm={12}>
            <ul class="nav align-top">
            <li class="nav-item">
              <Link to="/" className="nav-link" activeClassName="active-link">
                <img src="./images/icons/grid.svg" alt="" width="24" height="24" title="Dashboard" />
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/health"
                className="nav-link"
                activeClassName="active-link"
              >
                <img src="./images/icons/heart.svg" alt="" width="24" height="24" title="Heart" />
                My Health
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/wellness"
                className="nav-link"
                activeClassName="active-link"
              >
                <img src="./images/icons/umbrella.svg" alt="" width="24" height="24" title="Umbrella" />
                My Wellness
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/financial"
                className="nav-link"
                activeClassName="active-link"
              >
                <img src="./images/icons/dollar.svg" alt="" width="24" height="24" title="dollar" />
                Financial
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/bot"
                className="nav-link"
                activeClassName="active-link"
              >
                <img src="./images/icons/message.svg" alt="" width="24" height="24" title="Message" />
                re:bot<br />
                <span>Your Account Assistant</span>
              </Link>
            </li>
          </ul>
          </Col>
          <Col sm={12}>
            <ul class="nav align-bottom">
              <li class="nav-item">
                <Link to="/help" className="nav-link" activeClassName="active-link">
                  <img src="./images/icons/help-circle.svg" alt="" width="24" height="24" title="Dashboard" />
                  Help
                </Link>
                <a href="#logout" className="nav-link">
                  <img src="./images/icons/log-out.svg" alt="" width="24" height="24" title="Dashboard" />
                  Log Out
                </a>
              </li>
            </ul>
          </Col>
      </Navbar.Collapse>
    </Navbar>
  </nav>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: `Home`,
};

export default Sidebar;
