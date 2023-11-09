<template>
  <div class="comments">
    <template v-if="allComments.length > 0">
      <div>hello</div>
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
import Comment from "../../../classes/Comment";
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
};
</script>
<style scoped>
div {
  background-color: transparent;
}
.comments {
  display: flex;
  width: 90%;
  height: 550px;
  margin: 5%;
  background-color: rgba(109, 109, 109, 0.025);
}
.cat-animation {
  margin-left: 120px;
  background: transparent;
  height: 400px;
  opacity: 0.5;
}

.empty-text {
    background: transparent;
    margin-left: 120px;
    margin-top: 0;
    font-size: 2rem;
    opacity: 0.5;
    padding: 0;
}
</style>
