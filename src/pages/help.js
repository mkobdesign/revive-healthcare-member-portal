import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Container from "react-bootstrap/Container";
import Layout from "../components/layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import SEO from "../components/seo";
import { useAuth0 } from "@auth0/auth0-react";

const Help = () => {
  const { isAuthenticated, isLoading } = useAuth0();

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
    <SEO title="Help" />
    <Container>
       <Row className="mb-5"> 
        <Col md={7} className="mb-5">
            <Card.Text className="subtitle-caps">
              Help
            </Card.Text>
            <h1>Got Questions? We Got Answers.</h1>
            <Card.Text className="mb-4">
              Our customer service team is available to help 24/7, and we will get back to you as quickly as possible.
            </Card.Text>
                
        </Col>
        <Col md={4}>
          <Card.Img src="/images/the-team.svg" alt="team" />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col sm={12} md={6}>
          <a href="mailto:help@revive-healthcare.com?subject=Help with Revive Health" rel="noreferrer" target="_blank">
            <Card
              bg="info"
              text="white"
              className="mb-2 text-center"
            >
              <Card.Body>
                <h3><img src="./images/icons/mail.svg" alt="" width="24" height="24" title="dollar" className="mb-1" /> <br />Email Us</h3>
                <Card.Text>
                  help@revive-healthcare.com
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col sm={12} md={6}>
          <a href="tel:18883358836" target="_blank" rel="noreferrer">
            <Card
              bg="info"
              text="white"
              className="mb-2 text-center"
            >
              <Card.Body>
              <h3>
                <img src="./images/icons/phone.svg" alt="" width="24" height="24" title="dollar" className="mb-1" /> <br />
                Call Us
              </h3>
                <Card.Text>
                  tel: 888-335-8836
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  </Layout>
  );
};

export default Help;