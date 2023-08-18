import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./style.css";
import { FormContext } from "../../context/FormContext";

const AddProduct = () => {
  const { lista } = useContext(FormContext);
  console.log();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const prueba = lista[0].Products;
  const data = prueba.length;

  const aux = {
    id: data,
    name: name,
    img: image,
    price: price,
    description: description,
  };

  const Add = () => {
    if (name === "" || price === "" || image === "" || description === "") {
      alert("Empty");
    } else {
      lista[0].Products.push(aux);
      console.log(lista);
    }
  };
  return (
    <>
      <div id="containerAdd12">
      <img className="imgLogo2" src={require("../../img2.png")} />
        <form style={{ textAlign: "center", marginTop: "7%" }}>
          <input
            className="inputsAddP"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <input
            className="inputsAddP"
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br /> <br />
          <input
            className="inputsAddP"
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <br />
          <input
            className="inputsAddP"
            type="text"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br /> <br />
          <Button variant="primary" onClick={Add}>
            Add your product
          </Button>
          <Link to={"/HomePage"}>
            <Button style={{ margin: "10px" }} variant="primary">
              Go back to home
            </Button>
          </Link>
        </form>
      </div>

      <Card style={{ width: "24rem", marginLeft: "5%", marginTop: "-20%" }}>
        <Card.Body>
          <Card.Title>
            ¡Here you can add your product to our marketplace!
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Requeriments to add product:
          </Card.Subtitle>
          <Card.Text>
            You need to put a name, a price, upload a image and put a
            description in the white spaces and this is all!
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default AddProduct;
