import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image"

import logo from "../../static/images/revive-healthcare-logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <Container>
      <Navbar collapseOnSelect expand="xl" variant="light">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="141"
            height="64"
            className="d-inline-block align-top"
            alt="Lotus Logo"
          />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>
            <Link
              to="/install"
              className="nav-link"
              activeClassName="active-link"
            >
              Install
            </Link>
            <a
              href="https://github.com/DecliningLotus/gatsby-lotus-starter"
              className="nav-link"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>
);

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
};

Sidebar.defaultProps = {
  siteTitle: `Home`,
};

export default Sidebar;
