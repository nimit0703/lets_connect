<template>
  <div class="comments">
    <template v-if="allComments.length > 0">
      <div v-for="(comment, index) in allComments" :key="index">
        <div class="d-flex my-2 align-items-center">
          <div class="user-img">
            <img
              :src="getUserimg(comment.belongTo)"
              alt="x"
              class="user-img-sm"
            />
          </div>
          <div class="user-comment ps-3">
            <div class="comment-text">
              <span class="ps-2 text-bold"
                ><strong>{{ getUserName(comment.belongTo) }}</strong></span
              >
              <span class="ps-2">{{ comment.text }}</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="comment-likes ps-3">{{ getLength(comment.likes) }} likes</div>
              <div class="cmt-translation ps-3">see translation</div>
            </div>
          </div>
          <span class="ms-auto pe-3">
            <i class="bi bi-heart"></i>
          </span>
        </div>
        <template v-if="comment.threads != null">
          <div class="thread">
            <span>___</span>
            <span>view replies({{ 1 }})</span>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div
        class="d-flex flex-column align-items-center justify-content-center center"
      >
        <iframe
          src="https://lottie.host/?file=a1548b83-9261-4ff2-89dc-2355de4df320/7h3QsJV0Db.json"
          class="cat-animation"
        ></iframe>
        <p class="empty-text">no comments, yet</p>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import store from "../../../stores/store";
import Comment from "../../../classes/Comment";
import User from "../../../classes/User";
import _ from "lodash";
export default {
  name: "CommentsCard",
  props: {
    allComments: {
      type: Array as () => Comment[],
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {},
  created() {
    console.log("commentscard created", this.allComments);
  },
  methods: {
    getUserimg(id: number): string {
      const user = store.getters.getUserById(id) as User;
      return user.profile_img;
    },
    getUserName(id: number): string {
      const user = store.getters.getUserById(id) as User;
      return user.userName;
    },
    getLength(arr:[number]){
      return _.size(arr);
    }
  },
};
</script>
<style scoped>
div {
  background-color: transparent;
}
.comments {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 430px;
  margin: 5%;
  background-color: rgba(109, 109, 109, 0.025);
  border-top: 0.5px solid #4d4d4d;
  padding-top: 5px;
  border-bottom: 0.5px solid #4d4d4d;
  overflow-x: hidden;
}
.cat-animation {
  margin-left: 70px;
  background: transparent;
  height: 300px;
  opacity: 0.5;
}

.empty-text {
  background: transparent;
  margin-left: 70px;
  margin-top: 0;
  font-size: 2rem;
  opacity: 0.5;
  padding: 0;
}
.user-img-sm {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid red;
}
.comment-likes {
  font-size: 0.9rem;
  color: gray;
}
.cmt-translation {
  font-size: 0.9rem;
  color: gray;
}
.thread {
  display: flex;
  font-size: 0.9rem;
  color: gray;
  margin-left: 90px;
}
.thread span {
  font-size: 0.9rem;
  color: gray;
}
</style>
