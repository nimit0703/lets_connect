<template>
  <div class="d-flex  mt-4 overflow-hidden">
    <div class="profile-img me-3">
      <img :src="user.profile_img" alt="" class="img-fluid" />
    </div>
    <div class="profile-data d-flex flex-column">
      <div class="d-flex justify-content-between">
        <span class="fs-5">{{ user.userName }}</span>
        <button type="button" class="btn btn-secondary  text-nowrap d-none d-lg-block">Edit profile</button>
        <button type="button" class="btn btn-secondary  text-nowrap d-none d-lg-block">View Archive</button>
        <i class="bi bi-gear-wide mt-1 ml-3"></i>
      </div>
      <div class="d-flex mt-3 flex-column flex-lg-row">
        <span class="pe-5">{{ myPostsCount }} posts</span>
        <span class="pe-5" @click="show_followers"
          >{{ followers }} Followers</span
        >
        <span class="pe-5" @click="show_following"
          >{{ following }} Following</span
        >
      </div>
      <div class="d-flex mt-3">
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <div class="d-flex mt-1">
        <i class="bi bi-link-45deg"></i>
        <a
          href="https://nimit0703.github.io/nimit"
          class="link-underline-dark link-secondary link-offset-2 pe-3"
          style="text-decoration: none"
          >nimit0703.github.io/nimit
        </a>
      </div>
    </div>
  </div>
  <HighlightCom
    class="highlight-container"
    :highlights="myHighlights"
  ></HighlightCom>
  <ListModal
    v-show="showList"
    :title="listTitle"
    :list="list"
    @close="closeModal"
  ></ListModal>
</template>

<script lang="ts">
import _ from "lodash";
import store from "../../../stores/store";
import HighlightCom from "../../highlight/HighlightCom.vue";
import ListModal from "../../common/modals/ListModal.vue"
export default {
  components: {
    HighlightCom,
    ListModal,
  },
  data() {
    return {
      showList: false,
      listTitle: "",
      list: [] as number[],
    };
  },
  computed: {
    showList(): boolean {
      return this.showList;
    },
    user() {
      return store.state.thisUser;
    },
    followers() {
      return _.size(this.user.followers);
    },
    following() {
      return _.size(this.user.following);
    },
    myPostsCount() {
      return _.size(store.getters.getMypost());
    },
    myHighlights() {
      return this.user.highlights;
    },
  },
  methods: {
    show_followers() {
      this.listTitle = "Follower";
      this.list = this.user.followers;
      this.showList = true;
      document.body.style.overflow = "hidden";

    },
    closeModal() {
      // Function to close the modal
      this.showList = false;
      document.body.style.overflow = "auto";

    },
    show_following() {
      this.listTitle = "Following";
      this.list = this.user.following;
      this.showList = true;
      document.body.style.overflow = "hidden";

    },
  },
};
</script>

<style scoped>
.profile-img {
  /* width: 300px; */
  /* height: 200px; */
  /* border-radius: 50%; */
}
.profile-img img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 50%;
}

.profile-data {
  width: 600px;
  height: 200px;
}
.btn {
  --bs-btn-padding-x: 1.75rem;
  --bs-btn-padding-y: 0.1rem;
  margin: 0 7px;
}
.highlight-container {
  /* width: 70vw;
  margin: 0 auto;
  padding: 0 6vw;
  height: 145px; */
}
</style>
