import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Loader from "../components/loder";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { useAuth0 } from "@auth0/auth0-react";


const Health = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [snapMDRedirectUrl, setSnapMDRedirectUrl] = React.useState('https://myrevivehealth.connectedcare.md/#/patient');

  // function to ping the SnapMD SSO Handshake application for SSO
  async function postSnapMDSSOData(url = '', data = {}) {
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&')
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      redirect: 'follow',
      body: formBody
    });
    return response.json();   
  }

  // function to consume the SnapMD SSO process
  function snapMDSSORequest() {
    // ping sso handshake api to get redirect url
    const req = { name: user.name, email: user.email };
    const url = 'https://snapmd.myrevive.health/api/SnapMD/SSOHandshake';
    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);

    return postSnapMDSSOData(url, req);
  }

	useEffect(async ()=>{
		if (isLoading) {
		return <div>Loading ...</div>;
		}

		if(!isAuthenticated) {
		loginWithRedirect();
		return null;
    }
    
    // get the snapMD SSO redirect URL
    await snapMDSSORequest().then((redirect) => {
      setSnapMDRedirectUrl(redirect);
    });
	},[isAuthenticated, isLoading, loginWithRedirect, snapMDSSORequest, snapMDRedirectUrl ]);	
	
	return isAuthenticated ? (
	  <Layout>
    <SEO title="Health" />
    <Container fluid>
      <Row className="mb-5"> 
       <Col xl={12} className="mb-5 d-sm-none d-md-none d-lg-block">
          <Card className="border-0">
                <Card.Img src="/images/hero-health.jpg" alt="Wellness" />
                <Card.ImgOverlay>
                  <Card.Text className="subtitle-caps">
                  MY HEALTH
                </Card.Text>
                    <h1>Putting your health first</h1>
                <Row className="no-gutters">
                  <Col md={6}>
                    <Card.Text className="mb-4">
                    Have a medical question? Ask one of our nurses for those non-urgent things that come up in life.
                    </Card.Text>
                    <span className="text-link">
                    Call 1-888-335-8836 to Speak with a Nurse
                    </span >
                  </Col>
                </Row>
              </Card.ImgOverlay>
          </Card>
        </Col>
        
        <Row className="d-sm-block d-md-block d-lg-none">
          <Col md={12} className="my-auto">
              <Card.Img src="/images/health-mobile-hero.jpg" alt="Woman on Computer" className="mb-3" />
            </Col>

            <Col md={12} className="my-auto">
            <h1>Putting your health first</h1>
                  <Card.Text className="mb-4">
                    Have a medical question? Ask one of our nurses for those non-urgent things that come up in life.
                    </Card.Text>
                    <span className="text-link">
                    Call 1-888-335-8836 to Speak with a Nurse
                    </span>
            </Col>
        </Row>
      </Row>

      <Row className="mb-8">
            <Col md={4} className="my-auto">
            <h2 className="d-none d-sm-block d-md-none d-lg-none mb-5">See a Doctor from the
Comfort of Your Home</h2>
              <Card.Img src="/images/doctor.svg" alt="Doctor" />
            </Col>
            <Col md={8} className="my-auto">
                  <h2 className="d-none d-sm-none d-md-block d-lg-block">See a Doctor from the
Comfort of Your Home</h2>
                  <Card.Text className="big mb-3">
                  Schedule a virtual visit with a doctor wherever life takes you. Virtual visits give you the flexibility to see a doctor when you need it most.
                  </Card.Text>
                  <a href={snapMDRedirectUrl} className="btn btn-outline-info float-right d-sm-block-only float-sm-none-only">
                      Schedule a Virtual Visit
                    </a>
            </Col>
      </Row>

      <Row className="mb-8">
            <Col md={8} className="my-auto">
                  <h2>Refill your prescriptions. Now.</h2>
                  <Card.Img className="d-none d-sm-block d-md-none d-lg-none mt-5 mb-3" src="/images/dr-color.svg" alt="Doctor" />
                  <Card.Text className="big mb-3">
                  Fast and easy access to your prescriptions, delivered right to your door. 
                  </Card.Text>
                  <a href="https://revivehealth.ravkoo.com/" className="btn btn-outline-info d-sm-block-only">
                      Check your Prescriptions
                    </a>
            </Col>
            <Col md={4} className="my-auto">
              <Card.Img className="d-none d-sm-none d-md-block d-lg-block" src="/images/dr-color.svg" alt="Doctor" />
            </Col>
      </Row>

      <Row className="mb-8 revive-light-blue-bg card-ish">
            <Col md={8} className="my-auto">
              
                  <h2>Stay Informed</h2>
                  <Card.Text className="big mb-3">
                  Access our library to learn more about various health conditions.
                  </Card.Text>
                    <a href="https://www.wellRxpremier.com/Revive" className="btn btn-light">
                      Browse Library
                    </a>
            </Col>
            <Col md={4} className="my-auto floaty-img-right">
              <Card.Img src="/images/graphic-reading.svg" alt="Reading" />
            </Col>
      </Row>

      <Row className="mb-5">
            <Col md={4} className="my-auto">
              <Card.Img src="/images/medicine.svg" alt="Doctor" />
            </Col>
            <Col md={8} className="my-auto">
                  <h2>Need Some Blood work?</h2>
                  <Card.Text className="big mb-3">
                    Order an at home kit, or go in to have your blood sample taken. Your choice!
                  </Card.Text>
                  <a href="https://www.pixel.labcorp.com/" className="btn btn-outline-info float-right d-sm-block-only float-sm-none-only">
                      Get your Blood work
                    </a>
            </Col>
      </Row>

    </Container>
  </Layout>
	) : (
    <Loader />
  );
};
export default Health;