/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "fontsource-roboto/400-normal.css";
import "fontsource-roboto/500-normal.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';

import Sidebar from "./sidebar";
import "../styles/main.scss";

import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: 'GTM-KBDHFS2'
};

TagManager.initialize(tagManagerArgs);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div className="wholesite">
        <Container fluid className="sitewrap">
          <Row noGutters>
            <Sidebar siteTitle={data.site.siteMetadata.title} />
          </Row>
          
          <Row>
            <Col className="col-md-9 ml-sm-auto col-lg-9 px-4 main-content">
              <main>{children}</main>
            </Col>
          </Row>
        </Container>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
