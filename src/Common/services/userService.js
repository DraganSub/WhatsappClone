import { getDatabase, onValue, ref } from "@firebase/database";
import FirebaseService from "./firebaseService";

class UserService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  getUser = async (uid) => {
    let result = [];
    try {
      const db = getDatabase();
      const userRef = await ref(db, "users/", uid);
      onValue(userRef, (snapshot) => {
        snapshot.forEach((item) => {
          result.push({ ...item.val() });
        });
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  };
  /*  let items = [];
  const db = getDatabase();
  const userRef = await ref(db, "users/", uid);
  await onValue(userRef, (snapshot) => {
    let el = [];
    snapshot.forEach(async (item) => {
      await el.push({ ...item.val() });
    });
    items = [...el];
    console.log(items);
  });
  const data = await items;
  console.log(data);
  return data; */
}

export default UserService;
