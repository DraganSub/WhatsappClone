import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import FormLayout from "../../Layouts/FormLayouts/FormLayout";
import { inject, observer } from "mobx-react";
import "./RegisterPage.css";
import RegisterStore from "./RegisterStore";
import Spinner from "../../Components/Spinner/Spinner";

class RegisterPage extends React.Component {
  render() {
    const registerStore = this.props.registerStore;

    let registerContent = null;

    if (registerStore.loading) {
      registerContent = <Spinner />;
    } else {
      registerContent = (
        <FormLayout
          formTitle="Sign up"
          onSubmitForm={(e) => registerStore.onSubmitRegisterForm(e)}
        >
          <Input
            type="text"
            placeholder="Username"
            className="loginForm--input"
            value={registerStore.username}
            onChange={(e) => registerStore.setUsername(e)}
          />
          <Input
            type="text"
            placeholder="Img Link"
            className="loginForm--input"
            value={registerStore.imgLink}
            onChange={(e) => registerStore.setImgLink(e)}
          />

          <Input
            type="email"
            placeholder="Email"
            className="loginForm--input"
            value={registerStore.email}
            onChange={(e) => registerStore.setEmail(e)}
          />
          <Input
            type="password"
            placeholder="Password"
            className="loginForm--input"
            value={registerStore.password}
            onChange={(e) => registerStore.setPassword(e)}
          />
          <Input
            type="password"
            placeholder="Repeat password"
            className="loginForm--input"
            value={registerStore.repeatPassword}
            onChange={(e) => registerStore.setRepeatPassword(e)}
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

    return registerContent;
  }
}

export default inject((rootStore) => ({
  registerStore: new RegisterStore(rootStore),
}))(observer(RegisterPage));
