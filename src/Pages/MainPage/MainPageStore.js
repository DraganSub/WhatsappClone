import { action, makeObservable, observable } from "mobx";
import FirebaseService from "../../Common/services/firebaseService";
import SessionStore from "../../Stores/SessionStore";
import UserStore from "../../Stores/UserStore";

class MainPageStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    this.sessionStore = new SessionStore();
    this.userStore = new UserStore();
    makeObservable(this, {
      isSettingsActive: observable,
      handleSettingsActive: action,
      handleSettingsActiveInitialState: action,
      checkForUser: action,
    });
  }

  isSettingsActive = false;

  handleSettingsActive = () => {
    this.isSettingsActive = !this.isSettingsActive;
  };
  handleSettingsActiveInitialState = () => {
    this.isSettingsActive = false;
  };

  signOut = async () => {
    await this.firebaseService.doSignOut();
    this.sessionStore.doSignOut();
    this.sessionStore.setAuthenticated(false);
    this.handleSettingsActiveInitialState();
  };

  checkForUser = () => {
    const userStore = this.userStore;
    if (userStore.user.length === 0) {
      userStore.getUser();
    }
  };
}

export default MainPageStore;
