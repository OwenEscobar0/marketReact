import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div>
        {" "}
        <Card
          style={{
            width: "25rem",
            width: "22rem",
            marginTop: "2%",
            marginLeft: "55%",
            fontWeight: "bold",
          }}
        >
          <Card.Img
            variant="top"
            src="https://www.pioneerdj.com/-/media/pioneerdj/images/products/all-in-one-system/opus-quad/opus-quad_prm_frontangle_221223.png"
          />
          <Card.Body>
            <Card.Text>Some products you can find:</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>- Speakers</ListGroup.Item>
            <ListGroup.Item>- PC</ListGroup.Item>
            <ListGroup.Item>- Mixers</ListGroup.Item>
            <ListGroup.Item>- Headphones</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        {" "}
        <Card
          style={{
            width: "18rem",
            height: "20rem",
            marginTop: "-30%",
            marginLeft: "4%",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
            ¿When we start?
            </Card.Title>
            <Card.Subtitle style={{ fontWeight: "bold", marginTop: "10%" }}>
              We are a small market East 2023.
            </Card.Subtitle>
            <Card.Text style={{ marginTop: "15%" }}>
            Very proud we present our brand "Electronic State", We started a year ago and we still have a long way to go.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        {" "}
        <Card
          style={{
            width: "18rem",
            height: "20rem",
            marginTop: "-19%",
            marginLeft: "30%",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>
              ¡Products for all the djs!
            </Card.Title>
            <Card.Subtitle style={{ fontWeight: "bold", marginTop: "10%" }}>
              Start your musical life with us
            </Card.Subtitle>
            <Card.Text style={{ marginTop: "15%" }}>
              Send us a message to give to you all the information of our
              products, we have the most competitive prices in the market.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Link to={"/HomePage"}>
        <Button variant="primary" style={{marginLeft:"2%", marginTop:"2%"}}>Go back home</Button>
      </Link>
    </>
  );
}

export default AboutUs;
