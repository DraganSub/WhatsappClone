import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import MainContent from "./MainContent/MainContent";
import "./MainPage.css";
import Sidebar from "./Sidebar/Sidebar";
import { inject, observer } from "mobx-react";
import MainPageStore from "./MainPageStore";
import Spinner from "../../Components/Spinner/Spinner";
class MainPage extends React.Component {
  componentDidUpdate() {
    if (this.props.mainPageStore.userStore.user.length === 0) {
      this.props.mainPageStore.checkForUser();
    }
  }

  render() {
    const mainPageStore = this.props.mainPageStore;
    const { currentUser, loading } = mainPageStore.userStore;

    return (
      <MainLayout>
        <div className="MainPage">
          {loading ? <Spinner /> : null}
          <div className="MainPage__sidebar">
            <Sidebar
              currentUser={currentUser}
              doSignOut={mainPageStore.signOut}
              handleSettingsOpen={mainPageStore.handleSettingsActive}
              isSettingsActive={mainPageStore.isSettingsActive}
            />
          </div>
          <div className="MainPage__main-content">
            <MainContent currentUser={currentUser} />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default inject((rootStore) => ({
  mainPageStore: new MainPageStore(rootStore),
}))(observer(MainPage));
