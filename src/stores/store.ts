import Post from "../classes/Post";
import UserInterface from "@/interfaces/User";
import _ from "lodash";
import { createStore } from "vuex";
import User from "../classes/User";

const store = createStore({
  state: {
    thisUser:new User(1,"Nimit Trevadiya","dark","nimit@insta.com","ab","src/assets/user-profile.jpeg",[2, 3, 4, 5],[3, 4, 5, 6]),
     users:[
      new User(1,"Nimit Trevadiya","dark","nimit@insta.com","ab","src/assets/user-profile.jpeg",[2, 3, 4, 5],[3, 4, 5, 6]),
      new User(2, "John Doe", "light", "john@example.com", "password123", "src/assets/user-profile.jpeg", [1], [3]),
      new User(3, "John Walker", "light", "john@example.com", "password123", "src/assets/user-profile.jpeg", [1], [3]),
      new User(4, "kent Doe", "light", "john@example.com", "password123", "src/assets/user-profile.jpeg", [1], [3]),
      new User(5, "Clark Doe", "light", "john@example.com", "password123", "src/assets/user-profile.jpeg", [1], [3]),
    ],
    posts: [
      new Post(1,`https://picsum.photos/id/${1}/540/540`,2,[1,3,4,5,6,7],{},"captions"),
      new Post(2,`https://picsum.photos/id/${2}/540/540`,4,[5,3,2,1,2],{},"captions"),
      new Post(3,`https://picsum.photos/id/${3}/540/540`,4,[1,3,4,5,6,2,4,3,2,2,3,7],{},"captions"),
      new Post(4,`https://picsum.photos/id/${4}/540/540`,10,[1,3,4,5,6,7],{},"captions"),
      new Post(5,`https://picsum.photos/id/${5}/540/540`,5,[1,3,4,5,6,7],{},"captions"),
    
    ],
  },
  mutations: {
  },
  actions: {},
  getters: {
    getPostsByFollowing:(state)=>()=>{
      const followingIds = state.thisUser.following;
      const posts = _.filter(state.posts, post => followingIds.includes(post.belongsTo))
      return posts;
    },
    getUserById:(state)=>(id:number)=>{
      return _.find(state.users,(user)=>user.uid===id);
    }
  },
});

export default store;
