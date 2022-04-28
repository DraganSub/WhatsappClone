import FirebaseService from "./firebaseService";

class RegisterService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  onSubmitRegister = async (event, username, email, password) => {
    event.preventDefault();
    const authUser =
      await this.firebaseService.doCreateUserWithEmailAndPassword(
        email,
        password
      );

    console.log(authUser);
    console.log(authUser.user.id);
  };
}

export default RegisterService;
