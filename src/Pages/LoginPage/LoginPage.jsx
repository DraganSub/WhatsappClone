import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import FormLayout from "../../Layouts/FormLayouts/FormLayout";
import "./LoginPage.css";
class LoginPage extends React.Component {
  render() {
    return (
      <FormLayout formTitle="Sign in">
        <Input type="text" placeholder="Email" className="loginForm--input" />
        <Input
          type="password"
          placeholder="Password"
          className="loginForm--input"
        />
        <div className="padding--30px">
          <Button btnClass="signInBtn">Sign In</Button>
        </div>
        <p className="formQuestion">
          Already have account?{" "}
          <Link className="link--noDecor" to="/register">
            Sign Up
          </Link>
          <br />
          or <br /> sign in with Google
        </p>
      </FormLayout>
    );
  }
}

export default LoginPage;
