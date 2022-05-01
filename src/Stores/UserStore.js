import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import UserService from "../Common/services/userService";

class UserStore {
  constructor() {
    this.userService = new UserService();
    makeObservable(this, {
      user: observable,
      loading: observable,
      setUser: action,
      getUser: action,
      setLoading: action,
      currentUser: computed,
    });
    this.getUser();
  }

  user = [];
  loading = false;

  setLoading = (condition) => {
    this.loading = condition;
  };
  setUser = (user) => {
    this.user = user;
  };

  getUser = async () => {
    this.setLoading(true);
    const { uid } = localStorage.getItem("authUser");
    const userData = await this.userService.getUser(uid);

    runInAction(() => {
      this.setUser(userData);
      this.setLoading(false);
    });
  };

  get currentUser() {
    return this.user.slice(0, 1);
  }
}

export default UserStore;
