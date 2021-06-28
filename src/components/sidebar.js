import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../static/images/revive-healthcare-logo.png";
import logomobile from "../../static/images/revive-logo-small.svg";
import grid from "../../static/images/icons/grid.svg";
import heart from "../../static/images/icons/heart.svg";
import umbrella from "../../static/images/icons/umbrella.svg";
import helpcircle from "../../static/images/icons/help-circle.svg";
import message from '../../static/images/icons/message.svg';
import logout2 from "../../static/images/icons/log-out.svg";

import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";

const Sidebar = ({ siteTitle }) => {

  const { isAuthenticated, logout } = useAuth0();

  return (isAuthenticated && (
    <nav className="sidebar flex-column flex-row-md col-md-3 d-flex flex-column flex-1 row-no-gutters">
      <Navbar collapseOnSelect expand="md" variant="light" className="d-flex flex-column flex-1 flex-row-sm">
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
            <ul className="nav align-top d-flex justify-content-end">
              <li className="nav-item">
                <Link to="/" className="nav-link" activeClassName="active-link">
                  <img src={grid} alt="" width="24" height="24" title="Dashboard" />
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/health"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  <img src={heart} alt="" width="24" height="24" title="Heart" />
                  My Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/wellness"
                  className="nav-link"
                  activeClassName="active-link"
                >
                  <img src={umbrella} alt="" width="24" height="24" title="Umbrella" />
                  My Wellness
                </Link>
              </li>
            </ul>
            <ul className="nav d-flex text-right mt-auto align-items-end">
              <li className="nav-item">
                <Link to="/help" className="nav-link" activeClassName="active-link">
                  <img src={helpcircle} alt="" width="24" height="24" title="Help" />
                    Help
                  </Link>
              </li>
              <li className="nav-item">
                <a href="#logout" className="nav-link" onClick={() => logout()}>
                  <img src={logout2} alt="" width="24" height="24" title="Log Out" />
                    Log Out
                  </a>
              </li>
            </ul>
          </Col>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  ));
};

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: `Home`,
};

export default Sidebar;
