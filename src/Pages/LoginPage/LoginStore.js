import { action, makeObservable, observable, runInAction } from "mobx";
import LoginService from "../../Common/services/loginService";

class LoginStore {
  // observable data
  email = "";
  password = "";

  constructor() {
    this.loginService = new LoginService();
    makeObservable(this, {
      email: observable,
      password: observable,
      setEmail: action,
      setPassword: action,
      onSubmitLogin: action,
      onSubmitGoogleLogin: action,
    });
  }

  setEmail = (e) => {
    this.email = e.currentTarget.value;
  };

  setPassword = (e) => {
    this.password = e.currentTarget.value;
  };

  onSubmitLogin = (e) => {
    runInAction(() => {
      this.loginService.onSubmit(e, this.email, this.password);
    });
  };

  onSubmitGoogleLogin = (e) => {
    runInAction(() => {
      this.loginService.onSubmitGoogleLogin(e);
    });
  };
}

export default LoginStore;
