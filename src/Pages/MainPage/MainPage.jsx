import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import MainContent from "./MainContent/MainContent";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar";
import { inject, observer } from "mobx-react";
import MainPageStore from "./MainPageStore";
class MainPage extends React.Component {
  render() {
    const mainPageStore = this.props.mainPageStore;
    return (
      <MainLayout>
        <div className="MainPage">
          <div className="MainPage__sidebar">
            <Sidebar
              doSignOut={mainPageStore.signOut}
              handleSettingsOpen={mainPageStore.handleSettingsActive}
              isSettingsActive={mainPageStore.isSettingsActive}
            />
          </div>
          <div className="MainPage__main-content">
            <MainContent />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default inject((rootStore) => ({
  mainPageStore: new MainPageStore(rootStore),
}))(observer(MainPage));
