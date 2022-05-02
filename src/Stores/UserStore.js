import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import UserService from "../Common/services/userService";

class UserStore {
  constructor() {
    this.userService = new UserService();
    makeObservable(this, {
      user: observable,
      loading: observable,
      users: observable,
      searchText: observable,
      currentContact: observable,
      messageContent: observable,
      currentMessagesList: observable,

      setUser: action,
      getUser: action,
      setLoading: action,
      setUsers: action,
      setSearchText: action,
      setCurrentContact: action,
      setMessageContent: action,
      receiveNewMessage: action,
      setCurrentMessagesList: action,
      getMessagesFromUser: action,
      sendNewMsg: action,
      setMessageContentIntitialState: action,

      currentUser: computed,
      filteredUsers: computed,
      filteredMessages: computed,
    });
    this.getUser();
    this.getUsers();
  }

  user = [];
  users = [];
  messageContent = "";
  loading = false;
  searchText = "";
  currentContact = [];
  currentMessagesList = [];

  setCurrentMessagesList = (messages) => {
    this.currentMessagesList = messages;
  };

  setSearchText = (event) => {
    this.searchText = event.target.value;
  };

  setCurrentContact = (contact) => {
    this.currentContact = contact;
  };

  setMessageContent = (event) => {
    this.messageContent = event.target.value;
  };

  setLoading = (condition) => {
    this.loading = condition;
  };
  setUser = (user) => {
    this.user = user;
  };

  setUsers = (users) => {
    this.users = users;
  };

  setMessageContentIntitialState = () => {
    this.messageContent = "";
  };

  sendNewMessage = async (uid, contactId, contactData) => {
    return await this.userService.sendNewMessage(
      uid,
      contactId,
      contactData,
      this.messageContent
    );
  };

  receiveNewMessage = async (uid, contactId, contactData) => {
    return await this.userService.receiveNewMessage(
      uid,
      contactId,
      contactData,
      this.messageContent
    );
  };

  getUser = async () => {
    this.setLoading(true);
    const { uid } = JSON.parse(localStorage.getItem("authUser"));
    const userData = await this.userService.getUser(uid);

    runInAction(() => {
      this.setUser(userData);
      this.setLoading(false);
    });
  };

  getUsers = async () => {
    this.setLoading(true);
    const users = await this.userService.getUsers();
    runInAction(() => {
      this.setUsers(users);
      this.setLoading(false);
    });
  };

  getCurrentContact = async (uid) => {
    const user = await this.userService.getUserById(uid);
    runInAction(() => {
      this.setCurrentContact(user);
    });
  };

  sendNewMsg = async (uid, contactId, contactData) => {
    await this.sendNewMessage(uid, contactId, contactData);
    console.log();
    if (uid !== contactId) {
      await this.receiveNewMessage(uid, contactId, contactData);
    }
    this.setMessageContentIntitialState();
    await this.getMessagesFromUser(uid, contactId);
  };

  getMessagesFromUser = async (uid, contactId) => {
    this.setLoading(true);
    const data = await this.userService.getMessagesForUser(uid, contactId);
    runInAction(() => {
      this.setCurrentMessagesList(data);
      this.setLoading(false);
    });
  };

  get filteredMessages() {
    return this.currentMessagesList.slice();
  }

  get filteredUsers() {
    const search = this.searchText.toLowerCase();
    const filteredUsers = this.users.slice();
    return filteredUsers.filter((user) =>
      user.username.toLowerCase().includes(search)
    );
  }

  get currentUser() {
    return this.user;
  }
}

export default UserStore;
