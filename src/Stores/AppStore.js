import { onAuthStateChanged } from "@firebase/auth";
import { action, makeObservable, observable } from "mobx";
import FirebaseService from "../Common/services/firebaseService";
import SessionStore from "./SessionStore";

class AppStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    this.sessionStore = new SessionStore();
    this.listener = onAuthStateChanged(
      this.firebaseService.auth,
      async (authUser) => {
        this.setLoading(true);
        localStorage.setItem("authUser", JSON.stringify(authUser));
        await this.sessionStore.setAuthUser(authUser);
        this.setLoading(false);
      },
      () => {
        localStorage.removeItem("authUser");
        this.sessionStore.doSignOut();
      }
    );

    makeObservable(this, {
      setLoading: action,
      loading: observable,
    });
  }

  loading = false;

  setLoading = (condition) => {
    this.loading = condition;
  };
}

export default AppStore;
