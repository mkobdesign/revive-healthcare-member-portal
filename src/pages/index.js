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
import { OutboundLink } from "gatsby-plugin-google-gtag";
import loadFive9SocialWidget from "../components/load-five9-social-widget";

const IndexPage = () => {
  const date = new Date();
  let hours = date.getHours();
  let status =
    hours < 12
      ? "Good Morning"
      : hours <= 16 && hours >= 12
      ? "Good Afternoon"
      : hours <= 20 && hours >= 16
      ? "Good Evening"
      : "Good Night";

  let welcomeMessage = status;
  const {
    user,
    isAuthenticated,
    loading,
    isLoading,
    loginWithRedirect,
    getIdTokenClaims,
    logout
  } = useAuth0();
  const [cadenceRedirectUrl, setCadenceRedirectUrl] = React.useState(
    "https://revive.cadencehealth.us/login"
  );
  let [showNewUserBanner, setShowNewUserBanner] = React.useState(false);

  function cadenceUrlClick(e) {
    trackExternalClick('Cadence');
    logout({ federated: true, redirectUrl: cadenceRedirectUrl });
  }

  function onWellRxClick() {
    trackExternalClick('WellRX');
  }

  function onBenefitHubClick() {
    trackExternalClick('BenefitHub');
  }

  function trackExternalClick(partner) {
    if (window.gtag) {
      window.gtag('event', 'External Link', {partner: partner});
    }
  }

     

  useEffect(() => {
    async function processPage() {
      if (isLoading) {
        return <Loader />;
      }

      if (!isAuthenticated) {
        await loginWithRedirect();
        return null;
      }

      var options = {
        "rootUrl": "https://app.five9.com/consoles/",
        "type": "chat",
        "title": "Revive Health Chat",
        "tenant": "Complete Call Solutions",
        "profiles": "Revive Chat",
        "showProfiles": false,
        "autostart": true,
        "theme": "flagship.css",
        "surveyOptions": {
            "showComment": true,
            "requireComment": false
        },
        "fields": {
            "name": {
                "value": "",
                "show": true,
                "label": "Name"
            },
            "email": {
                "value": "",
                "show": true,
                "label": "Email"
            }
        },
        "playSoundOnMessage": true,
        "allowCustomerToControlSoundPlay": true,
        "showEmailButton": true,
        "hideDuringAfterHours": false,
        "useBusinessHours": true,
        "showPrintButton": false,
        "allowUsabilityMenu": true,
        "enableCallback": false,
        "callbackList": "",
        "allowRequestLiveAgent": false
      };
      loadFive9SocialWidget(() => {
          // window.Five9SocialWidget.addWidget(options); This loads the new chat feature.. Uncomment when we deploy..
      }); 

      await getIdTokenClaims().then(async (c) => {
        // get the created_at value from the id token claims. We use this to show the intro banner
        const created_at = new Date(
          c["https://myrevive.health/user_created_at"]
        );
        const hoursSinceSignup = Math.floor(
          Math.abs(new Date() - created_at) / 36e5
        );
        setShowNewUserBanner(hoursSinceSignup <= 24);

        // set the cadence SSO url
        const metadata = c["https://myrevive.health/user_metadata"];
        if (!!metadata.cadence_redirect_url) {
          console.log('setting cadence url to ' + metadata.cadence_redirect_url);
          setCadenceRedirectUrl(metadata.cadence_redirect_url);
        } else {
          console.log('cadence url not set...');
        }
      });
    }

    processPage();

  }, [
    isAuthenticated,
    loading,
    isLoading,
    user,
    getIdTokenClaims,
    loginWithRedirect,
    logout
  ]);

  return isAuthenticated ? (
    <Layout>
      <SEO title="Home" />
      {showNewUserBanner && (
        <Row noGutters className="welcome-banner">
          <Col noGutters xl={12}>
            It’s official: You’re a Reviver! It takes about 24 hours to get all
            your info into our system so some services may not be available
            right away, but if you need to be seen by our docs sooner, just let
            us know at 888-335-8836.
          </Col>
        </Row>
      )}
      <Container fluid>
        <Row>
          <Col xl={12} className="mb-5">
            <Card className="revive-blue-bg image-below-card intro-card border-0 taller-mobile-4 overflowy">
              <Card.Img
                src="/images/countryside.svg"
                className="d-sm-none d-md-none d-lg-block"
                alt="Card image"
              />
              <Card.Img
                src="/images/welcome-hero-mobile.svg"
                className="d-sm-block d-md-block d-lg-none"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <h2 className="bolded">
                  {welcomeMessage},{" "}
                  {user?.nickname ? user?.nickname : user?.name}
                </h2>
                <Card.Text>What would you like to do today?</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6} lg={5}>
            <OutboundLink className="snapmd-sso-trigger" href={cadenceRedirectUrl} onClick={cadenceUrlClick}>
              <Card className="shadow-sm border-0 mb-5 taller-mobile-2">
                <Card.Img
                  src="/images/virtual-visit.png"
                  alt="Schedule a Virtual Visit"
                />
                <Card.ImgOverlay>
                  <h4 className="bolded">Schedule a Virtual Visit</h4>
                </Card.ImgOverlay>
              </Card>
            </OutboundLink>
          </Col>
          <Col className="d-md-block d-lg-none" xs={6}>
            <Link to="/wellness#counseling">
              <Card className="shadow-sm border-0 mb-5 taller-mobile-6">
                <Card.Img
                  src="/images/counselor.png"
                  className="d-sm-none d-md-none d-lg-block"
                  alt="Counselor"
                />
                <Card.Img
                  src="/images/counselor-mobile-1.svg"
                  className=""
                  alt="Counselor"
                />
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
                  <Card.Img
                    src="/images/counselor.png"
                    className=""
                    alt="Counselor"
                  />
                  <Card.Img
                    src="/images/counselor-mobile-1.svg"
                    className="d-md-block d-lg-none"
                    alt="Counselor"
                  />
                  <Card.ImgOverlay>
                    <h4 className="bolded">Speak with a Counselor</h4>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </div>
            <Row>
              <Col xs={6}>
                <OutboundLink href="https://www.wellrxpremier.com/Revive/health-conditions" onClick={onWellRxClick}>
                  <Card className="shadow-sm border-0 mb-5 taller-2 taller-mobile-2">
                    <Card.Img
                      src="/images/concern.png"
                      alt="Have a Health Concern?"
                    />
                    <Card.ImgOverlay>
                      <h4 className="bolded" align="right">
                        Have a health <br />
                        concern?
                      </h4>
                      <p align="right">Learn More &gt;</p>
                    </Card.ImgOverlay>
                  </Card>
                </OutboundLink>
              </Col>
              <Col xs={6}>
                <OutboundLink href="https://revive-prod.us.auth0.com/samlp/xv17kE6M9zpyMXOf0RZOUcLA9yUDMJ2w" onClick={onBenefitHubClick}>
                  <Card className="shadow-sm border-0 mb-5 taller-2 taller-mobile-2">
                    <Card.Img
                      src="/images/benefit-hub.png"
                      alt="Access the Marketplace"
                    />
                    <Card.ImgOverlay>
                      <h4 className="bolded">
                        Access the <br />
                        Marketplace
                      </h4>
                    </Card.ImgOverlay>
                  </Card>
                </OutboundLink>
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

export default IndexPage;
