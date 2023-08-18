import React, { useContext, useState } from "react";

import "./style.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import { FormContext } from "../../context/FormContext";
import CarouselHome from "../../components/Carousel";

const HomePage = () => {
  const { lista } = useContext(FormContext);

  const pageZise = 6;
  const [page, setPage] = useState(0);

  return (
    <>
    <CarouselHome/>
      <div className="containerHome">
        {lista[0].Products.slice(
          page * pageZise,
          page * pageZise + pageZise
        ).map((product) => {
          return (
            <div className="homePageC">
              <Link
                to={`/detailsPage/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className="cardHome" style={{ width: "23.2rem" }}>
                  <Card.Img
                    className="cardIMG"
                    variant="top"
                    src={product.img}
                    style={{ width: "23rem" }}
                  />

                  <Card.Body style={{ margin: "4px", fontWeight: "bold" }}>
                    <Card.Title>
                      <p>{product.name}</p>
                    </Card.Title>
                    <p>PRICE: {product.price}</p>
                    <Button className="buttonHome" variant="primary">
                      Go to details
                    </Button>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
      <Footer />
    </>
  );
};

export default HomePage;
