import React, { useEffect } from "react";
import { Link } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Loader from "../components/loder";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth0 } from "@auth0/auth0-react";

const IndexPage = () => {
  const { user, isAuthenticated, loading, isLoading, loginWithRedirect } = useAuth0();

  useEffect(()=>{
    if (isLoading) {
      return <Loader />;
    }

    if(!isAuthenticated) {
      loginWithRedirect();
      return null;
    }
  },[isAuthenticated, loading, isLoading, loginWithRedirect ]);

  return isAuthenticated ? (
    <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col xl={12} className="mb-5">
          <Card className="revive-blue-bg image-below-card intro-card border-0 taller-mobile-4">
            <Card.Img src="/images/countryside.svg" className="d-sm-none d-md-none d-lg-block" alt="Card image" />
            <Card.Img src="/images/welcome-hero-mobile.svg" className="d-sm-block d-md-block d-lg-none" alt="Card image" />
                <Card.ImgOverlay>
                  <h2>Good morning, {user?.firstName}</h2>
                  <Card.Text>
                    What would you like to do today?
                  </Card.Text>
              </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={6} lg={5}>
          <a href="https://myrevivehealth.sandbox.connectedcare.md/#/patient">
            <Card className="shadow-sm border-0 mb-5 taller-mobile-2">
              <Card.Img src="/images/virtual-visit.png" alt="Schedule a Virtual Visit" />
              <Card.ImgOverlay>
                <h4>Schedule a Virtual Visit</h4>
              </Card.ImgOverlay>
            </Card>
            </a>
        </Col>
        <Col className="d-md-block d-lg-none" xs={6}>
        <Link to="/wellness#counseling">
            <Card className="shadow-sm border-0 mb-5 taller-mobile-4">
              <Card.Img src="/images/counselor.png" className="d-sm-none d-md-none d-lg-block" alt="Counselor" />
              <Card.Img src="/images/counselor-mobile-1.svg" className="" alt="Counselor" />
              <Card.ImgOverlay>
                <h4>Speak with a Counselor</h4>
              </Card.ImgOverlay>
            </Card>
          </Link>
          </Col>
        <Col xs={12} lg={7}>
          <Col className="d-sm-none d-md-none d-lg-block">
            <Link to="/wellness#counseling">
              <Card className="shadow-sm border-0 mb-5 taller-mobile-1">
                <Card.Img src="/images/counselor.png" className="" alt="Counselor" />
                <Card.Img src="/images/counselor-mobile-1.svg" className="d-md-block d-lg-none" alt="Counselor" />
                <Card.ImgOverlay>
                  <h4>Speak with a Counselor</h4>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </Col>
          <Row>
        <Col xs={6}>
          <a href="https://main.d2b2s0fjal3vo7.amplifyapp.com/auth/login">
            <Card className="shadow-sm border-0 mb-5 taller-mobile-2">
                <Card.Img src="/images/rx.png" alt="Renew Your Prescription" />
                <Card.ImgOverlay>
                  <h4 align="right">Renew your <br />Prescription</h4>
                </Card.ImgOverlay>
              </Card>
          </a>
        </Col>
        <Col xs={6}>
          <a href="https://myrevive.benefithub.com/Account/Login?ReturnUrl=%2f">
            <Card className="shadow-sm border-0 mb-5 taller-mobile-2">
                <Card.Img src="/images/benefit-hub.png" alt="Access the Marketplace" />
                <Card.ImgOverlay>
                  <h4>Access the <br />Marketplace</h4>
                </Card.ImgOverlay>
              </Card>
          </a>
        </Col>
      </Row>
      </Col>
      </Row>
    </Container>
  </Layout>
  ) : (
    <Loader />
  );
};

export default IndexPage