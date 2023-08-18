import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const loginButton = () => {
    if (user.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need to add your info to continue!",
      });
    } else {
      navigate("/HomePage");
    }
  };
  const buttonClear = () => {
    setUser("");
    setPassword("");
  };

  return (
    <>
      <Link to={"/HomePage"}>
        <Button style={{marginTop:"1%", marginLeft:"2%"}}>GO TO PRODUCTS</Button>
      </Link>
      <div className="containerLogin">
        <img className="imgLogo" src={require("../../img2.png")} />
        <h4 id="titleLogin">ADD USER AND PASSWORD FOR LOGIN</h4>
        <form>
          <input
            className="inputsLogin"
            type="text"
            placeholder="USER"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <br />
          <input
            className="inputsLogin"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(i) => setPassword(i.target.value)}
          />
          <br />

          <Button
            className="buttonsLogin"
            variant="primary"
            onClick={loginButton}
          >
            LOGIN
          </Button>
          <Button
            className="buttonsLogin"
            variant="primary"
            onClick={buttonClear}
          >
            CLEAR
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
