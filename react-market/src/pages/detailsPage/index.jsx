import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import data from "../../json/data.json";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style.css";
import { Link } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [save, setSave] = useState([]);

  const lista = [];
  lista.push(data);
  console.log(lista);

  const get = (id) => {
    setSave(lista[0].Products[id]);
  };

  useEffect(() => {
    get(id);
  }, []);

  return (
    <>
      <Card
        style={{
          width: "23rem",
          height: "29rem",
          textAlign: "center",
          marginLeft: "5%",
          padding: "5px 5px 5px 5px",
          marginTop: "4%",
         
        }}
      >
        <Card.Img  variant="top" src={save.img} style={{height:"290px",marginTop:"-5px", padding:"5px 5px 5px 5px"}} />
        <Card.Body>
          <Card.Title>
            <p>{save.name}</p>
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>

        <Card.Body>
          
       
        </Card.Body>
        <Link to={"/HomePage"} style={{ marginLeft: "" }}>
          <Button variant="primary">Go to home</Button>
        </Link>
      </Card>
      <div className="container-details">
        {" "}
        <Card>
          <Card.Header style={{fontWeight:"bold"}}>INFORMATION OF PRODUCT:</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text >{save.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="precioC">
        <Card style={{ width: "15rem", marginLeft: "58%", marginTop: "2%" }}>
          <Card.Body>
            <Card.Title>
              <p>PRICE:</p>
            </Card.Title>
            <Card.Text>{save.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
     
    </>
  );
};

export default DetailPage;

{
  /* <Card className="cardHome">
                    <Card.Img
                      className="cardIMG"
                      variant="top"
                      src={save.img}
                    />

                    <Card.Body>
                      <Card.Title>
                        <p>{save.name}</p>
                      </Card.Title>

                      <Link to={"/HomePage"}><Button variant="primary">Go to details</Button></Link>
                    </Card.Body>
                    <p>PRICE: {save.price}</p>
                  </Card> */
}
