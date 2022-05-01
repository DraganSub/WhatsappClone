import { action, makeObservable, observable, runInAction } from "mobx";
import RegisterService from "../../Common/services/registerService";

class RegisterStore {
  constructor() {
    this.registerService = new RegisterService();

    makeObservable(this, {
      username: observable,
      email: observable,
      password: observable,
      repeatPassword: observable,
      loading: observable,
      imgLink: observable,
      setUsername: action,
      setEmail: action,
      setPassword: action,
      setRepeatPassword: action,
      setLoading: action,
      setImgLink: action,
    });
  }

  // Observable data
  username = "";
  email = "";
  password = "";
  repeatPassword = "";
  loading = false;
  imgLink = "";

  setImgLink = (e) => {
    this.imgLink = e.currentTarget.value;
  };

  setUsername = (e) => {
    this.username = e.currentTarget.value;
  };
  setEmail = (e) => {
    this.email = e.currentTarget.value;
  };
  setPassword = (e) => {
    this.password = e.currentTarget.value;
  };
  setRepeatPassword = (e) => {
    this.repeatPassword = e.currentTarget.value;
  };

  setLoading = (condition) => {
    this.loading = condition;
  };

  onSubmitRegisterForm = (event) => {
    this.setLoading(true);
    runInAction(async () => {
      await this.registerService.onSubmitRegister(
        event,
        this.username,
        this.email,
        this.password,
        this.imgLink
      );
      this.setLoading(false);
    });
  };
}

export default RegisterStore;
