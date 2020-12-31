import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import logo from "../../static/images/revive-healthcare-logo.png";
import logomobile from "../../static/images/revive-logo-small.svg";

import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col"

const Sidebar = ({ siteTitle }) => (
  <nav className="sidebar flex-column flex-row-md col-md-3 d-flex flex-column flex-1 row-no-gutters">
      <Navbar collapseOnSelect expand="md" variant="light" className="d-flex flex-column flex-1 flex-row-md">
        <Navbar.Brand href="/" className="justify-content-end">
            <img
            src={logo}
            width="141"
            height="64"
            className="d-inline-block align-top d-none d-sm-none d-md-block d-xl-block d-xl-block"
            alt="Revive Healthcare"
          />
          <img
            src={logomobile}
            width="40"
            height="32"
            className="d-inline-block align-top d-none d-sm-block d-md-none d-xl-none d-xl-none"
            alt="Revive Healthcare"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="no-gutters">
          <Col sm={12} className="align-items-stretch d-flex flex-column">
            <ul class="nav align-top d-flex justify-content-end">
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
          </ul>
            <ul class="nav align-bottom d-flex justify-content-end text-right">
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
