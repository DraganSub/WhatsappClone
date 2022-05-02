import { getDatabase, onValue, ref, set } from "@firebase/database";
import FirebaseService from "./firebaseService";

class UserService {
  constructor() {
    this.firebaseService = new FirebaseService();
  }

  getUserById = async (uid) => {
    let result = [];
    try {
      const db = getDatabase();
      const userRef = await ref(db, `users/${uid}`);
      onValue(userRef, (snapshot) => {
        result.push({ ...snapshot.val() });
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  sendNewMessage = async (userUid, contactUid, contactData, messageContent) => {
    try {
      const db = getDatabase();
      const userRef = ref(db, `users/${userUid}/contacts/${contactUid}`);

      let messagesL = [];

      onValue(userRef, (snapshot) => {
        messagesL.push(...snapshot.val().messages);
      });

      return set(userRef, {
        email: contactData.email,
        username: contactData.username,
        uid: contactData.uid,
        messages: [
          ...messagesL,
          {
            messageContent: messageContent,
            messageStatus: "not seen",
            user: userUid,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  getMessagesForUser = async (uid, contactId) => {
    const db = getDatabase();
    let messages = [];
    const userRef = ref(db, `users/${uid}/contacts/${contactId}/messages`);
    onValue(userRef, (snapshot) => {
      snapshot.forEach((snap) => {
        messages.push({ ...snap.val() });
      });
    });

    return messages;
  };

  receiveNewMessage = async (
    userUid,
    contactUid,
    contactData,
    messageContent
  ) => {
    try {
      const db = getDatabase();
      const receiverRef = ref(db, `users/${contactUid}/contacts/${userUid}`);
      let receiverMsg = [];
      onValue(receiverRef, (snapshot) => {
        receiverMsg.push(...snapshot.val().messages);
      });
      return set(receiverRef, {
        email: contactData.email,
        username: contactData.username,
        uid: contactData.uid,
        messages: [
          ...receiverMsg,
          {
            messageContent: messageContent,
            messageStatus: "not seen",
            user: userUid,
          },
        ],
      });
    } catch (error) {
      console.log(error);
    }
  };

  getUser = async (uid) => {
    let result = [];
    try {
      const db = getDatabase();
      const userRef = await ref(db, `users/${uid}`);
      onValue(userRef, (snapshot) => {
        result.push({ ...snapshot.val() });
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  };

  getUsers = async () => {
    let data = [];
    try {
      const db = getDatabase();
      const userRef = await ref(db, "users");
      onValue(userRef, (snapshot) => {
        snapshot.forEach((item) => {
          data.push({ ...item.val() });
        });
      });
    } catch (error) {
      console.log(error.message);
    }
    return data;
  };
}

export default UserService;
