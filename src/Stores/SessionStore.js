import { action, makeObservable, observable } from "mobx";
import FirebaseService from "../Common/services/firebaseService";

class SessionStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    makeObservable(this, {
      authUser: observable,
      setAuthUser: action,
      setAuthenticated: action,
      authenticated: observable,
      setRedirect: action,
      redirect: observable,
    });
  }
  authUser = null;
  authenticated = false;
  redirect = false;

  setRedirect = (condition) => {
    this.redirect = condition;
  };

  setAuthenticated = (condition) => {
    this.authenticated = condition;
  };

  setAuthUser = (authUser) => {
    this.authUser = authUser;
    this.setRedirect(true);
  };

  doSignOut = () => {
    this.setAuthenticated(false);
    this.setAuthUser(null);
    this.setRedirect(true);
  };
}

export default SessionStore;
