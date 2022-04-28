import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import FormLayout from "../../Layouts/FormLayouts/FormLayout";
import { inject, observer } from "mobx-react";
import "./LoginPage.css";
import LoginStore from "./LoginStore";
import Spinner from "../../Components/Spinner/Spinner";
class LoginPage extends React.Component {
  render() {
    const loginStore = this.props.loginStore;

    let loginContent;
    if (loginStore.loading) {
      loginContent = <Spinner />;
    } else {
      loginContent = (
        <FormLayout
          formTitle="Sign in"
          onSubmitForm={(e) => this.props.loginStore.onSubmitLogin(e)}
        >
          <Input
            type="text"
            placeholder="Email"
            className="loginForm--input"
            value={loginStore.email}
            onChange={(e) => loginStore.setEmail(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="loginForm--input"
            value={loginStore.password}
            onChange={(e) => loginStore.setPassword(e)}
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

    return loginContent;
  }
}

export default inject((rootStore) => ({
  loginStore: new LoginStore(rootStore),
}))(observer(LoginPage));
