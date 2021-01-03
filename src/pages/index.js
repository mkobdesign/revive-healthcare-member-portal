import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth0 } from "@auth0/auth0-react";

const IndexPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(()=>{
    if(!isAuthenticated) {
      navigate("/login");
      return null;
    }
  },[isAuthenticated]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  

  return (
    <Layout>
    <SEO title="Home" />
    <Container fluid>
      <Row>
        <Col xl={12} className="mb-5">
          <Card className="revive-blue-bg image-below-card intro-card border-0">
            <Card.Img src="/images/countryside.svg" alt="Card image" />
                <Card.ImgOverlay>
                  <h2>Good morning, Ryan</h2>
                  <Card.Text>
                    What would you like to do today?
                  </Card.Text>
              </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={5}>
          <a href="https://myrevivehealth.sandbox.connectedcare.md/#/patient">
            <Card className="shadow-sm border-0 mb-5">
              <Card.Img src="/images/virtual-visit.png" alt="Schedule a Virtual Visit" />
              <Card.ImgOverlay>
                <h4>Schedule a Virtual Visit</h4>
              </Card.ImgOverlay>
            </Card>
            </a>
        </Col>
        <Col md={12} lg={7}>
          <Link to="/wellness#counseling">
            <Card className="shadow-sm border-0 mb-5">
              <Card.Img src="/images/counselor.png" alt="Counselor" />
              <Card.ImgOverlay>
                <h4>Speak with a Counselor</h4>
              </Card.ImgOverlay>
            </Card>
          </Link>
          <Row>
        <Col xs={6}>
          <a href="https://main.d2b2s0fjal3vo7.amplifyapp.com/auth/login">
            <Card className="shadow-sm border-0 mb-5">
                <Card.Img src="/images/rx.png" alt="Renew Your Prescription" />
                <Card.ImgOverlay>
                  <h4 align="right">Renew your <br />Prescription</h4>
                </Card.ImgOverlay>
              </Card>
          </a>
        </Col>
        <Col xs={6}>
          <a href="https://myrevive.benefithub.com/Account/Login?ReturnUrl=%2f">
            <Card className="shadow-sm border-0 mb-5">
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
  );
};

export default IndexPage