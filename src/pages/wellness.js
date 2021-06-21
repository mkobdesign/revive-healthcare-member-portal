import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Loader from "../components/loder";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const Wellness = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  function onMedikeeperClick(e) {
    trackExternalClick('Medikeeper');
  }

  function onLabCorpClick(e) {
    trackExternalClick('LabCorp');
  }

  function trackExternalClick(partner) {
    if (window.gtag) {
      window.gtag('event', 'External Link', {partner: partner});
    }
  }

  useEffect(() => {
    if (isLoading) {
      return <div>Loading ...</div>;
    }

    if (!isAuthenticated) {
      loginWithRedirect();
      return null;
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  return isAuthenticated ? (
    <Layout>
      <SEO title="My Wellness" />
      <Container fluid>
        <Row className="mb-6 d-sm-none d-md-none d-lg-block">
          <Col xl={12} className="mb-5">
            <Card className="border-0">
              <Card.Img src="/images/wellness-hero.png" alt="Wellness" />
              <Card.ImgOverlay>
                <Card.Text className="subtitle-caps">MY WELLNESS</Card.Text>
                <h1>Wellness from the inside, out</h1>
                <Card.Text className="mb-4">
                  Access to your wellness benefits in one easy click.
                </Card.Text>
                <OutboundLink
                  onClick={onMedikeeperClick}
                  href="https://revive-prod.us.auth0.com/samlp/2OmcDoKssQDWU4wtFKStahLQ07nmB2dc"
                  className="btn btn-primary btn-lg"
                >
                  Take your Assessment
                </OutboundLink>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>

        <Row className="d-sm-block d-md-block d-lg-none mb-5">
          <Col md={12} className="my-auto">
            <Card.Img
              src="/images/wellness-hero-mobile.jpg"
              alt="Wellness"
              className="mb-3"
            />
          </Col>

          <Col md={12} className="my-auto">
            <h1>Wellness from the inside, out</h1>
            <Card.Text className="mb-4">
              Access to your wellness benefits in one easy click.
            </Card.Text>
            <OutboundLink
              onClick={onMedikeeperClick}
              href="https://revive-prod.us.auth0.com/samlp/2OmcDoKssQDWU4wtFKStahLQ07nmB2dc"
              className="btn btn-primary btn-lg"
            >
              Take your Assessment
            </OutboundLink>
          </Col>
        </Row>

        <Row className="mb-8">
          <a id="counseling" href="/" className="d-none">
            Counseling
          </a>
          <h2 className="d-sm-block d-md-block d-lg-none mb-5">
            Counseling on Your Time
          </h2>
          <Col md={4} className="my-auto">
            <Card.Img src="/images/your-time.svg" alt="Card image" />
          </Col>
          <Col md={8} className="my-auto">
            <h2 className="d-sm-none d-md-none d-lg-block">
              Counseling on Your Time
            </h2>
            <p className="big mb-4">
              Our specially trained representatives will match you with the
              right counselor for your specific mental health needs.
            </p>
            <Col md={12} className="text-right">
              <span className="text-link">Call 1-844-390-5052 to Schedule</span>
            </Col>
          </Col>
        </Row>

        <Row className="mb-8 revive-light-blue-bg card-ish">
          <Col md={8} className="my-auto">
            <h2>A little help for yourself</h2>
            <Card.Text className="big mb-3">
              Our self-help tools support you from the comfort of your home, or
              office, or anywhere else
            </Card.Text>
            <OutboundLink
              onClick={onMedikeeperClick}
              href="https://revive-prod.us.auth0.com/samlp/2OmcDoKssQDWU4wtFKStahLQ07nmB2dc"
              className="btn btn-light"
            >
              Help Yourself
            </OutboundLink>
          </Col>
          <Col md={4} className="my-auto">
            <Card.Img src="/images/reading2.svg" alt="Reading" />
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <h2 className="extra-large">Jump Start your Health</h2>
            <p className="big mb-5">
              Need an accountability buddy? We got your back. Jump starting your
              health can be as simple as 1,2,3.
            </p>
            <img src="/images/trainer.svg" alt="" />
          </Col>

          <Col md={8}>
            <Row className="mb-5">
              <Col md={2}>
                <span className="step float-right">1</span>
              </Col>
              <Col md={10}>
                <h4>Wellness Assessment</h4>
                <p className="mb-3">
                  Take our Wellness Assessment to better understand where you
                  are at in your health journey.{" "}
                </p>
                <OutboundLink
                  onClick={onMedikeeperClick}
                  href="https://revive-prod.us.auth0.com/samlp/2OmcDoKssQDWU4wtFKStahLQ07nmB2dc"
                  className="text-link text-right"
                >
                  Take the Wellness Assessment &gt;
                </OutboundLink>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={2}>
                <span className="step float-right">2</span>
              </Col>
              <Col md={10}>
                <h4>Biometrics </h4>
                <p className="mb-3">
                  Your height, weight, waist circumference and some basic blood
                  work help evaluate your overall health and will help your
                  health coach craft a plan just for you.
                </p>
                <OutboundLink
                onClick={onLabCorpClick}
                  href="https://revive-prod.us.auth0.com/samlp/Y5AntzZADkjcYzPSW19wOduys1bktCEP"
                  className="text-link text-right"
                >
                  Get your Biometrics &gt;
                </OutboundLink>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col md={2}>
                <span className="step float-right">3</span>
              </Col>
              <Col md={10}>
                <h4>Talk to a Health Coach</h4>
                <p className="mb-3">
                  Get an expert involved to help you understand your Wellness
                  Assessment and biometric results. A health coach is the
                  perfect addition to take your journey to the next level.
                </p>
                <OutboundLink
                  onClick={onLabCorpClick}
                  href="https://revive-prod.us.auth0.com/samlp/Y5AntzZADkjcYzPSW19wOduys1bktCEP"
                  className="text-link text-right"
                >
                  Schedule a Session with a Health Coach &gt;
                </OutboundLink>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="revive-blue-bg card-ish feature">
          <Col md={8}>
            <h2 className="title text-white">Keep your wallet happy too</h2>
            <p className="text-white mb-2">
              Savings on things you use every day, and things you need every
              once in a while. Something for everyone!
            </p>
            <p className="text-white mb-5">
              <i>The ReviveMarketplace powered by BenefitHub</i>
            </p>
            <OutboundLink
              href="https://revive-prod.us.auth0.com/samlp/xv17kE6M9zpyMXOf0RZOUcLA9yUDMJ2w"
              className="btn btn-secondary btn-lg mb-3"
            >
              Start Saving Today
            </OutboundLink>
          </Col>
          <Col md={4}>
            <Card.Img
              src="/images/shopping-lady.png"
              alt="Woman with Shopping Bags"
              className="align-bottom"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  ) : (
    <Loader />
  );
};
export default Wellness;
