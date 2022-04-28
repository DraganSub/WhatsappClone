import { action, makeObservable, observable } from "mobx";
import RegisterService from "../../Common/services/registerService";

class RegisterStore {
  // Observable data
  username = "";
  email = "";
  password = "";
  repeatPassword = "";

  constructor() {
    this.registerService = new RegisterService();

    makeObservable(this, {
      username: observable,
      email: observable,
      password: observable,
      repeatPassword: observable,
      setUsername: action,
      setEmail: action,
      setPassword: action,
      setRepeatPassword: action,
    });
  }

  setUsername = (e) => {
    this.username = e.currentTargetValue;
  };
  setEmail = (e) => {
    this.email = e.currentTargetValue;
  };
  setPassword = (e) => {
    this.password = e.currentTargetValue;
  };
  setRepeatPassword = (e) => {
    this.repeatPassword = e.currentTargetValue;
  };

  onSubmitRegisterForm = (event) => {
    this.registerService.onSubmitRegister(
      event,
      this.username,
      this.email,
      this.password
    );
  };
}

export default RegisterStore;
