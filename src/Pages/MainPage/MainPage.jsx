import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import MainContent from "./MainContent/MainContent";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar";
const MainPage = () => {
  return (
    <MainLayout>
      <div className="MainPage">
        <div className="MainPage__sidebar">
          <Sidebar />
        </div>
        <div className="MainPage__main-content">
          <MainContent />
        </div>
      </div>
    </MainLayout>
  );
};

export default MainPage;
