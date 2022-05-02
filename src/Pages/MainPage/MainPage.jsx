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
    if (
      this.props.mainPageStore.userStore.user.length === 0 &&
      this.props.mainPageStore.userStore.users.length === 0
    ) {
      this.props.mainPageStore.checkForUser();
    }
  }

  render() {
    const mainPageStore = this.props.mainPageStore;
    const { currentUser, loading, filteredUsers, currentContact } =
      mainPageStore.userStore;
    let contactId = "";
    currentContact.map((contact) => {
      return (contactId = contact.uid);
    });
    let currentUserUid = "";

    currentUser.map((contact) => {
      return (currentUserUid = contact.uid);
    });

    let contactInfo;
    currentContact.map((contact) => {
      return (contactInfo = contact);
    });

    return (
      <MainLayout>
        <div className="MainPage">
          {loading ? <Spinner /> : null}
          <div className="MainPage__sidebar">
            <Sidebar
              currentUser={currentUser}
              currentUserId={currentUserUid}
              currentContactId={contactId}
              doSignOut={mainPageStore.signOut}
              handleSettingsOpen={mainPageStore.handleSettingsActive}
              isSettingsActive={mainPageStore.isSettingsActive}
              isNewMessageActive={mainPageStore.isNewMsgWindowActive}
              handleMessageOpen={mainPageStore.handleMessageActive}
              users={filteredUsers}
              getUsers={mainPageStore.userStore.getUsers}
              search={mainPageStore.userStore.search}
              changeSearch={mainPageStore.userStore.setSearchText}
              goToContact={mainPageStore.userStore.getCurrentContact}
              getMessagesForUser={mainPageStore.userStore.getMessagesFromUser}
              filteredMessages={mainPageStore.userStore.filteredMessages}
            />
          </div>
          <div className="MainPage__main-content">
            <MainContent
              currentContact={mainPageStore.userStore.currentContact}
              messageContent={mainPageStore.userStore.messageContent}
              setMessageContent={mainPageStore.userStore.setMessageContent}
              sendNewMessage={mainPageStore.userStore.sendNewMsg}
              currentContact={currentContact}
              uid={currentUserUid}
              currentMessageList={mainPageStore.userStore.filteredMessages}
              contactId={contactId}
              getMessagesForUser={mainPageStore.userStore.getMessagesFromUser}
              contact={contactInfo}
            />
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default inject((rootStore) => ({
  mainPageStore: new MainPageStore(rootStore),
}))(observer(MainPage));
