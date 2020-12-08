import React, { Component } from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

class Feature extends Component (subtitle, title, buttontext, link) {
    render() {
        <Row>
        <Col xl={12} className="mb-5">
          <Card className="text-white text-center border-0">
            <Card.Img src="/images/feature.svg" alt="Feature" />
            <Card.ImgOverlay>
              <Card.Text className="subtitle-caps">
                {this.subtitle}
              </Card.Text>
              <h2>{this.title}</h2>
              <a href={this.link} class="btn btn-secondary">{this.buttontext}</a>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    }
}

export default Feature