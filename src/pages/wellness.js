import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Wellness = () => (
  <Layout>
    <SEO title="My Wellness" />
    <Container fluid>
      <Row className="mb-5"> 
        <Col xl={12} className="mb-5">
          <Card className="border-0">
                <Card.Img src="/images/wellness-hero.png" alt="Wellness" />
                <Card.ImgOverlay>
                  <Card.Text className="subtitle-caps">
                  MY WELLNESS
                </Card.Text>
                    <h1>Wellness from the inside, out</h1>
                    <Card.Text className="mb-4">
                      Access to your wellness benefits in one easy click.
                    </Card.Text>
                    <Link to="/install" className="btn btn-primary btn-lg">
                      Take your Assessment
                    </Link>
                </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
            <Col md={4}>
              <Card.Img src="/images/your-time.svg" alt="Card image" />
            </Col>
            <Col md={8}>
                  <h2>Counseling on Your Time</h2>
                  <p className="big mb-4">
                    Our specially trained representatives will match you with the right counselor for your specific mental Wellness needs. 
                  </p>
                  <Col md={12} className="text-right text-link">
                    <Link to="/install">
                      Call 1-888-888-8888 to Schedule
                    </Link>
                  </Col>
            </Col>
      </Row>
      
      <Row className="mb-5">
          <Card className="border-0 revive-light-blue-bg">
            <Col md={8}>
              <Card.Body>
                  <h2>Stay Informed</h2>
                  <Card.Text className="big mb-3">
                    Access our library to learn more about how you can take control of your well-being.
                  </Card.Text>
                    <Link to="/install" className="btn btn-light">
                      Browse Library
                    </Link>
              </Card.Body>
            </Col>
            <Col md={4}>
              <Card.Img src="/images/graphic-reading.svg" alt="Reading" />
            </Col>
        </Card>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <h2 className="extra-large">Jump Start your Health</h2>
          <p className="big mb-5">Need an accountability buddy? We got your back. Jump starting your health can be as simple as 1,2,3.</p>
          <img src="/images/trainer.svg" alt=""/>
        </Col>

        <Col md={8}>
          <Row className="mb-5">
            <Col md={2}>
              <span className="step">1</span>
            </Col>
            <Col md={10}>
              <h4>Health Risk Assessment (HRA)</h4>
              <p className="mb-3">Take our HRA to better understand where you are at in your health journey. </p>
              <a href="/" className="text-link text-right">Take the HRA ></a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={2}>
              <span className="step">2</span>
            </Col>
            <Col md={10}>
              <h4>Biometrics</h4>
              <p className="mb-3">Your height, weight, waist circumference and some basic blood work help evaluate your overall health and will help your health coach craft a plan just for you.</p>
              <a href="/" className="text-link text-right">Get your Biometrics ></a>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={2}>
              <span className="step">2</span>
            </Col>
            <Col md={10}>
              <h4>Talk to a Health Coach</h4>
              <p className="mb-3">Get an expert involved to help you understand your HRA and biometric results. A health coach is the perfect addition to take your journey to the next level.</p>
              <a href="/" className="text-link text-right">Schedule a Session with a Health Coach ></a>
            </Col>
          </Row>
        </Col>
      </Row>

    </Container>
  </Layout>
);

export default Wellness;
