import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const Health = () => (
  <Layout>
    <SEO title="Health" />
    <Container>
      <Row className="mb-5"> 
        <Col xl={12} className="mb-5">
          <Card className="border-0">
                <Card.Img src="/images/wellness-hero.png" alt="Wellness" />
                <Card.ImgOverlay>
                  <Card.Text className="subtitle-caps">
                  MY HEALTH
                </Card.Text>
                    <h1>Putting your health first</h1>
                    <Card.Text className="mb-4">
                     Have a medical question? Ask one of our nurses for those non-urgent things that come up in life.
                    </Card.Text>
                    <Link to="/install" className="btn btn-primary btn-lg">
                      Speak with a Nurse
                    </Link>
                </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
            <Col md={4}>
              <Card.Img src="/images/doctor.svg" alt="Doctor" />
            </Col>
            <Col md={8}>
                  <h2>See a Doctor, Anywhere </h2>
                  <Card.Text className="big mb-3">
                    Schedule a virtual visit with a doctor wherever life takes you. Virtual visits give you the flexibility to see a doctor when you need it most.
                  </Card.Text>
                  <Link to="/install" className="btn btn-outline-info">
                      Schedule a Virtual Visit
                    </Link>
            </Col>
      </Row>

      <Row className="mb-5">
            <Col md={8}>
                  <h2>Your Prescriptions. Now.</h2>
                  <Card.Text className="big mb-3">
                    Fast and easy access to your prescriptions, delivered right to your door.
                  </Card.Text>
                  <Link to="/install" className="btn btn-outline-info">
                      Check your Prescriptions
                    </Link>
            </Col>
            <Col md={4}>
              <Card.Img src="/images/dr-color.svg" alt="Doctor" />
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
              <Card.Img src="/images/medicine.svg" alt="Doctor" />
            </Col>
            <Col md={8}>
                  <h2>Need Some Blood work?</h2>
                  <Card.Text className="big mb-3">
                    Order an at home kit, or go in to have your blood sample taken. Your choice!
                  </Card.Text>
                  <Link to="/install" className="btn btn-outline-info">
                      Get your Blood work
                    </Link>
            </Col>
      </Row>

    </Container>
  </Layout>
);

export default Health;
