import Post from "../../classes/Post";
import Story from "../../classes/Story";
import User from "../../classes/User";

const state = {
  showLoder: false,
  thisUser: {
    uid: 1,
    userName: "nimit_trevadiya",
    colorTheme: "dark",
    email: "nimit@insta.com",
    password: "ab",
    profile_img: "src/assets/user-profile.jpeg",
    followers: [2, 3, 4, 5],
    following: [3, 4, 5, 6],
    hasStories: true,
    stories: [
      {
        sid: 1,
        belongTo: 1,
        content: "https://picsum.photos/id/59/1080",
      },
    ],
    name: "Nimit Trevadiya",
    highlights: [
      {
        hid: 1,
        belongsTo: 1,
        title: "hlTitle",
        hl: [
          {
            sid: 1001,
            belongTo: 1,
            content: "https://picsum.photos/id/51/1080",
          },
          {
            sid: 1002,
            belongTo: 1,
            content: "https://picsum.photos/id/5/1080",
          },
          {
            sid: 1003,
            belongTo: 1,
            content: "https://picsum.photos/id/55/1080",
          },
        ],
      },
      {
        hid: 2,
        belongsTo: 1,
        title: "hlTitle",
        hl: [
          {
            sid: 1004,
            belongTo: 1,
            content: "https://picsum.photos/id/52/1080",
          },
          {
            sid: 1005,
            belongTo: 1,
            content: "https://picsum.photos/id/7/1080",
          },
          {
            sid: 1006,
            belongTo: 1,
            content: "https://picsum.photos/id/56/1080",
          },
        ],
      },
    ],
  },
  users: [],

  posts: [],
};
// comment added

export default state;
