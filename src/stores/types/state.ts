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
      [2, 3, 4, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      true,
      []
    ),
    users: [],

    posts: [
      new Post(
        1,
        `https://picsum.photos/id/${1}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        2,
        `https://picsum.photos/id/${2}/540/540`,
        4,
        [5, 3, 2, 1, 2],
        {},
        "captions"
      ),
      new Post(
        3,
        `https://picsum.photos/id/${3}/540/540`,
        4,
        [1, 3, 4, 5, 6, 2, 4, 3, 2, 2, 3, 7],
        {},
        "captions"
      ),
      new Post(
        4,
        `https://picsum.photos/id/${4}/540/540`,
        10,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        5,
        `https://picsum.photos/id/${5}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        6,
        `https://picsum.photos/id/${6}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        7,
        `https://picsum.photos/id/${7}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        8,
        `https://picsum.photos/id/${8}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        9,
        `https://picsum.photos/id/${9}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
      new Post(
        10,
        `https://picsum.photos/id/${10}/540/540`,
        1,
        [1, 3, 4, 5, 6, 7],
        {},
        "captions"
      ),
    ],
};
// comment added


export default state;