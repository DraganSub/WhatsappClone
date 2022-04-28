import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import FormLayout from "../../Layouts/FormLayouts/FormLayout";

import "./RegisterPage.css";

class RegisterPage extends React.Component {
  render() {
    return (
      <FormLayout formTitle="Sign up">
        <Input
          type="text"
          placeholder="Username"
          className="loginForm--input"
        />
        <Input type="email" placeholder="Email" className="loginForm--input" />
        <Input
          type="password"
          placeholder="Password"
          className="loginForm--input"
        />
        <Input
          type="password"
          placeholder="Repeat password"
          className="loginForm--input"
        />
        <div className="padding--30px">
          <Button btnClass="signInBtn">Sign In</Button>
        </div>
        <p className="formQuestion">
          Already have an account?{" "}
          <Link className="link--noDecor" to="/login">
            Sign Up
          </Link>
        </p>
      </FormLayout>
    );
  }
}

export default RegisterPage;
