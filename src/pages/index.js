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
  const date = new Date();
  let hours = date.getHours();
  let status = (hours < 12)? "Good Morning" :
             ((hours <= 16 && hours >= 12 ) ? "Good Afternoon" : ((hours <= 20 && hours >= 16 ) ? "Good Evening" :"Good Night"));

  let welcomeMessage = status;
  const { user, isAuthenticated, loading, isLoading, loginWithRedirect, getIdTokenClaims } = useAuth0();
  const [snapMDRedirectUrl, setSnapMDRedirectUrl] = React.useState('https://myrevivehealth.connectedcare.md/#/patient');
  let [ showNewUserBanner, setShowNewUserBanner ] = React.useState(false);

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
      return <Loader />;
    }

    if(!isAuthenticated) {
      loginWithRedirect();
      return null;
    }

    // get the snapMD SSO redirect URL
    await snapMDSSORequest().then((redirect) => {
      setSnapMDRedirectUrl(redirect);
    });

    // get the created_at value from the id token claims. We use this to show the intro banner
    await getIdTokenClaims().then((c) => {
      const created_at = new Date(c["https://myrevive.health/user_created_at"]);
      const hoursSinceSignup = Math.floor(Math.abs(new Date() - created_at) / 36e5);
      setShowNewUserBanner(hoursSinceSignup <= 24);
    })

  },[isAuthenticated, loading, isLoading, user, loginWithRedirect, snapMDSSORequest, snapMDRedirectUrl ]);

  return isAuthenticated ? (
    <Layout>
    <SEO title="Home" />
    {showNewUserBanner && (
        <Row noGutters className="welcome-banner">
          <Col noGutters xl={12}>
          It’s official: You’re a Reviver! It takes about 24 hours to get all your info into our system so some services may not be available right away, but if you need to be seen by our docs sooner, just let us know at 888-335-8836.
          </Col>
        </Row>
      )}
    <Container fluid>
      <Row>
        <Col xl={12} className="mb-5">
          <Card className="revive-blue-bg image-below-card intro-card border-0 taller-mobile-4 overflowy">
            <Card.Img src="/images/countryside.svg" className="d-sm-none d-md-none d-lg-block" alt="Card image" />
            <Card.Img src="/images/welcome-hero-mobile.svg" className="d-sm-block d-md-block d-lg-none" alt="Card image" />
                <Card.ImgOverlay>
                  <h2 className="bolded">{welcomeMessage}, {(user?.nickname) ? user?.nickname: user?.name }</h2>
                  <Card.Text>
                    What would you like to do today?
                  </Card.Text>
              </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={6} lg={5}>
          <a className="snapmd-sso-trigger" href={snapMDRedirectUrl}>
            <Card className="shadow-sm border-0 mb-5 taller-mobile-2">
              <Card.Img src="/images/virtual-visit.png" alt="Schedule a Virtual Visit" />
              <Card.ImgOverlay>
                <h4 className="bolded">Schedule a Virtual Visit</h4>
              </Card.ImgOverlay>
            </Card>
            </a>
        </Col>
        <Col className="d-md-block d-lg-none" xs={6}>
        <Link to="/wellness#counseling">
            <Card className="shadow-sm border-0 mb-5 taller-mobile-6">
              <Card.Img src="/images/counselor.png" className="d-sm-none d-md-none d-lg-block" alt="Counselor" />
              <Card.Img src="/images/counselor-mobile-1.svg" className="" alt="Counselor" />
              <Card.ImgOverlay>
                <h4 className="bolded">Speak with a Counselor</h4>
              </Card.ImgOverlay>
            </Card>
          </Link>
          </Col>
        <Col xs={12} lg={7}>
          <div className="d-sm-none d-md-none d-lg-block">
            <Link to="/wellness#counseling">
              <Card className="shadow-sm border-0 mb-5 taller-mobile-1">
                <Card.Img src="/images/counselor.png" className="" alt="Counselor" />
                <Card.Img src="/images/counselor-mobile-1.svg" className="d-md-block d-lg-none" alt="Counselor" />
                <Card.ImgOverlay>
                  <h4 className="bolded">Speak with a Counselor</h4>
                </Card.ImgOverlay>
              </Card>
            </Link>
          </div>
          <Row>
        <Col xs={6}>
          <a href="https://revivehealth.ravkoo.com/">
            <Card className="shadow-sm border-0 mb-5 taller-2 taller-mobile-2">
                <Card.Img src="/images/rx.png" alt="Renew Your Prescription" />
                <Card.ImgOverlay>
                  <h4 className="bolded" align="right">Renew your <br />Prescription</h4>
                </Card.ImgOverlay>
              </Card>
          </a>
        </Col>
        <Col xs={6}>
          <a href="https://revive-prod.us.auth0.com/samlp/xv17kE6M9zpyMXOf0RZOUcLA9yUDMJ2w">
            <Card className="shadow-sm border-0 mb-5 taller-2 taller-mobile-2">
                <Card.Img src="/images/benefit-hub.png" alt="Access the Marketplace" />
                <Card.ImgOverlay>
                  <h4 className="bolded">Access the <br />Marketplace</h4>
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