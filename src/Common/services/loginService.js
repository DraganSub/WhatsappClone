import FirebaseService from "./firebaseService";

class LoginService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  onSubmit = (e, email, password) => {
    e.preventDefault();
    this.firebaseService.doSignInWithEmailAndPassword(email, password);
  };
  onSubmitGoogleLogin = async (event) => {
    event.preventDefault();
    const socialAuthUser = await this.firebaseService.doSignInWithGoogle();
  };
}

export default LoginService;
