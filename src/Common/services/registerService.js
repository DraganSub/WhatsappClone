import { set, ref, serverTimestamp } from "@firebase/database";
import FirebaseService from "./firebaseService";

class RegisterService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  onSubmitRegister = async (event, username, email, password) => {
    event.preventDefault();
    /*     const authUser =
      await this.firebaseService.doCreateUserWithEmailAndPassword(
        email,
        password
      );
    this.firebaseService.set(
      ref(this.firebaseService.database, "users/" + authUser.user.uid),
      {
        uid: authUser.user.uid,
        username: username,
        email: email,
        createdAt: serverTimestamp(),
      } );*/
    this.firebaseService
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        const uid = authUser.user.uid;
        return set(ref(this.firebaseService.database, "users/" + uid), {
          uid: uid,
          username: username,
          email: email,
          createdAt: serverTimestamp(),
        });
      });
  };
}

export default RegisterService;
