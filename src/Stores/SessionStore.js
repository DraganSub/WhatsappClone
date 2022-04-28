import { action, makeObservable, observable } from "mobx";
import FirebaseService from "../Common/services/firebaseService";

class SessionStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    makeObservable(this, {
      authUser: observable,
      setAuthUser: action,
    });
  }
  authUser = null;

  setAuthUser = (authUser) => {
    this.authUser = authUser;
  };

  doSignOut = () => {
    this.authUser = null;
  };
}

export default SessionStore;
