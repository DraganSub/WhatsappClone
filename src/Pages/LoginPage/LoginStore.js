import { action, makeObservable, observable, runInAction } from "mobx";
import LoginService from "../../Common/services/loginService";

class LoginStore {
  constructor() {
    this.setLoading(true);
    this.loginService = new LoginService();
    makeObservable(this, {
      email: observable,
      password: observable,
      loading: observable,
      setEmail: action,
      setPassword: action,
      onSubmitLogin: action,
      onSubmitGoogleLogin: action,
      setLoading: action,
    });
    this.setLoading(false);
  }

  // observable data
  email = "";
  password = "";
  loading = false;

  setEmail = (e) => {
    this.email = e.currentTarget.value;
  };

  setPassword = (e) => {
    this.password = e.currentTarget.value;
  };

  setLoading = (condition) => {
    this.loading = condition;
  };

  onSubmitLogin = (e) => {
    runInAction(async () => {
      this.setLoading(true);
      await this.loginService.onSubmit(e, this.email, this.password);
      this.setLoading(false);
    });
  };

  onSubmitGoogleLogin = (e) => {
    this.setLoading(true);
    runInAction(async () => {
      await this.loginService.onSubmitGoogleLogin(e);
      this.setLoading(false);
    });
  };
}

export default LoginStore;
