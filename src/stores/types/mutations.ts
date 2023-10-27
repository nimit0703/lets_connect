import User from "../../classes/User";
import _ from "lodash";

const mutations = {
  setUsers(state:any, users:User[]) {
    state.users = users;
  },
  likedPost(state: any, postId: number) {
    const likes = _.find(state.posts, (post) => post.id === postId)?.likes;
    likes?.push(state.thisUser.uid);
  },
  dislikedPost(state: any, postId: number) {
    const post = _.find(state.posts, { id: postId });
    if (post) {
      _.remove(post.likes, (like) => like === state.thisUser.uid);
    }
  },
  unfollow(state: any, id: number) {
    _.pull(state.thisUser.following, id);
  },
  follow(state: any, id: number) {
    state.thisUser.following.push(id);
  },
};
// comment added


export default mutations;
