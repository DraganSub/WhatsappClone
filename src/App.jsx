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
import Spinner from "./Components/Spinner/Spinner";
import { Navigate } from "react-router";

class App extends React.Component {
  render() {
    let appPage;
    const { loading } = this.props.appStore;
    const authUser = localStorage.getItem("authUser");

    if (loading) {
      return (appPage = <Spinner />);
    }
    if (authUser) {
      appPage = (
        <Routes>
          <Route
            path="/"
            element={authUser ? <MainPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={authUser ? <Navigate to="/" /> : <RegisterPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      );
    } else {
      appPage = (
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/"
            element={authUser ? <MainPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={authUser ? <Navigate to="/" /> : <RegisterPage />}
          />
        </Routes>
      );
    }

    return appPage;
  }
}

export default inject((rootStore) => ({
  appStore: new AppStore(rootStore),
}))(observer(App));
