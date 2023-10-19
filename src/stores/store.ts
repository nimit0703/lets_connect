import User from "@/interfaces/User";
import { createStore } from "vuex";

const store = createStore({
  state: {
    thisUser: {
      uid: 1,
      name: "Nimit Trevadiya",
      theme: "dark",
      email: "nimit@insta.com",
      password: "ab",
      profile_img: "src/assets/user-profile.jpeg",
    } as User,
  },
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
