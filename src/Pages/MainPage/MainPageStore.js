import { action, makeObservable, observable } from "mobx";
import FirebaseService from "../../Common/services/firebaseService";
import SessionStore from "../../Stores/SessionStore";

class MainPageStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    this.sessionStore = new SessionStore();

    makeObservable(this, {
      isSettingsActive: observable,
      handleSettingsActive: action,
      handleSettingsActiveInitialState: action,
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
}

export default MainPageStore;
