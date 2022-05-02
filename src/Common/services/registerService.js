import { set, ref, serverTimestamp } from "@firebase/database";
import FirebaseService from "./firebaseService";

class RegisterService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  onSubmitRegister = async (event, username, email, password, imgLink) => {
    event.preventDefault();
    this.firebaseService
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        const uid = authUser.user.uid;
        return set(ref(this.firebaseService.database, "users/" + uid), {
          uid: uid,
          username: username,
          email: email,
          imgLink: imgLink,
          createdAt: serverTimestamp(),
          whatsappStatus: "New to Whatsapp. Add me!",
          contacts: [],
        });
      });
  };
}

export default RegisterService;
