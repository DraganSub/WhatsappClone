import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MainPage from "./Pages/MainPage/MainPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import { inject, observer } from "mobx-react";
import AppStore from "./Stores/AppStore";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
class App extends React.Component {
  render() {
    const { authUser } = this.props.appStore.sessionStore;
    let appPage;
    if (authUser !== null) {
      appPage = (
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      );
    } else {
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>;
    }
    return appPage;
  }
}

export default inject((rootStore) => ({
  appStore: new AppStore(rootStore),
}))(observer(App));
