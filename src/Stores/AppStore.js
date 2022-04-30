import { onAuthStateChanged } from "@firebase/auth";
import { action, makeObservable, observable } from "mobx";
import RedirectTo from "../Common/Redirect";
import FirebaseService from "../Common/services/firebaseService";
import SessionStore from "./SessionStore";

class AppStore {
  constructor() {
    this.firebaseService = new FirebaseService();
    this.sessionStore = new SessionStore();
    this.setLoading(true);
    this.sessionStore.setRedirect(false);
    this.listener = onAuthStateChanged(
      this.firebaseService.auth,
      async (authUser) => {
        if (authUser) {
          this.sessionStore.setAuthenticated(true);
          localStorage.setItem("authUser", JSON.stringify(authUser));
          await this.sessionStore.setAuthUser(authUser);
          this.setLoading(false);
        } else {
          this.sessionStore.setAuthenticated(false);
          localStorage.removeItem("authUser");
          this.sessionStore.doSignOut();
          this.setLoading(false);
        }
      },
      () => {
        this.setLoading(true);
        localStorage.removeItem("authUser");
        this.sessionStore.doSignOut();
        this.setLoading(false);
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
