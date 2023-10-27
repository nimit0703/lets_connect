import Post from "../../classes/Post";
import Story from "../../classes/Story";
import User from "../../classes/User";

const state= {
    showLoder:false,
    thisUser: new User(
      1,
      "Nimit Trevadiya",
      "dark",
      "nimit@insta.com",
      "ab",
      "src/assets/user-profile.jpeg",
      [26, 27, 28, 29, 30, 31, 32, 33, 34],
      [2,3,4,26, 30, 31, 32, 33, 34],
      true,
      []
    ),
    users: [],

    posts: [],
};
// comment added


export default state;