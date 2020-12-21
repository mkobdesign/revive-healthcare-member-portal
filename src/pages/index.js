import React from "react"
import { Link } from "gatsby";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
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
        <Col md={12} lg={6}>
          <Link to="/">
            <Card className="shadow-sm border-0 mb-5">
              <Card.Img src="/images/dr2.svg" alt="Dr" />
              <Card.ImgOverlay>
                <h4>Schedule a Virtual Visit</h4>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Col>
        <Col md={12} lg={6}>
          <Link to="/install">
            <Card className="shadow-sm border-0 mb-5">
              <Card.Img src="/images/counselor.svg" alt="Counselor" />
              <Card.ImgOverlay>
                <h4>Speak with a Counselor</h4>
              </Card.ImgOverlay>
            </Card>
          </Link>
          <Row>
        <Col sm={12} md={6}>
          <Link to="/install">
            <Card className="shadow-sm border-0 mb-5">
                <Card.Img src="/images/drug.svg" alt="Counselor" />
                <Card.ImgOverlay>
                  <h4 align="right">Renew your <br />Prescription</h4>
                </Card.ImgOverlay>
              </Card>
          </Link>
        </Col>
        <Col sm={12} md={6}>
          <Link to="/install">
            <Card className="shadow-sm border-0 mb-5">
                <Card.Img src="/images/marketplace.svg" alt="Marketplace" />
                <Card.ImgOverlay>
                  <h4>Access the <br />Marketplace</h4>
                </Card.ImgOverlay>
              </Card>
          </Link>
        </Col>
      </Row>
        </Col>
      </Row>
      <Row>
        <Col xl={12} className="mb-n2 mr-n3 d-flex flex-column justify-content-center align-items-center">
          <Card className="text-white text-center border-0 feature">
            <Card.Img src="/images/feature.svg" alt="Feature" />
            <Card.ImgOverlay>
            <div class="col-xs-12 d-flex align-items-center flex-column">
              <Card.Text className="subtitle-caps">
                December Feature
              </Card.Text>
              <h2 className="title">Keep a clear head this holiday season</h2>
              <div class="col-xs-12 col-xs-offset-0 mx-auto col-sm-offset-3 col-sm-6">
                <a href="/" class="btn btn-secondary btn-lg btn-block">Redeem Your Headspace Discount</a>
              </div>
              </div>
              
              
              
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
