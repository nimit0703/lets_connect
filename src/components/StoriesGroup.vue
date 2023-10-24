<template>
  <div class="fixed-bg">
    <div class="left-story bg-transparent p-4" @click="showPreviousStory" disabled :class="{ 'disabled': currentStoryIndex === 1 }"
>
      <i class="bi bi-caret-left-fill bg-transparent"></i>
    </div>
    <div class="individual-story-container shadow">
      <div class="story">
        <div class="profile-data">
          <img :src="userData?.profile_img" alt="" />
          <p>{{ userData?.userName }}</p>
        </div>
        <img :src="activeStory?.content" alt="" class="main-img" />
      </div>
    </div>
    <div class="right-story bg-transparent p-4" @click="showNextStory" :disabled="currentStoryIndex === stories.length-1">
      <i class="bi bi-caret-right-fill bg-transparent"></i>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import Story from "../classes/Story";
import store from "../stores/store";
import User from "../classes/User";

export default {
  props: {
    stories: {
      type: Array as () => Story[],
      required: true,
    },
    selectedStory: {
      type: Story,
      required: true,
    },
  },
  data() {
    return {
      currentStoryIndex: this.selectedStory.sid,
    };
  },
  created() {
    this.currentStoryIndex = this.selectedStory.sid;
  },
  methods: {
    showPreviousStory() {
      if (this.currentStoryIndex! >1) {
        this.currentStoryIndex!--;
      }
    },
    showNextStory() {
      if (this.currentStoryIndex < this.stories.length - 1) {
        this.currentStoryIndex!++;
      }
    },
  },
  computed: {
    activeStory(): Story | null {
      if (_.isUndefined(this.currentStoryIndex)) {
        this.currentStoryIndex = this.selectedStory.sid;
      }
      const st = _.find(
        this.stories,
        (story) => story.sid == this.currentStoryIndex
      );
      return st || null;
    },
    userData(): User  {
      if (_.isUndefined(this.currentStoryIndex)) {
        this.currentStoryIndex = this.selectedStory.sid;
      }
      const st = _.find(
        this.stories,
        (story) => story.sid == this.currentStoryIndex
      );
      const user = store.getters.getUserById(st?.belongTo);

      return user;
    },
  },
};
</script>

<style scoped>
.fixed-bg {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgb(8, 8, 8);
  justify-content: center;
  align-items: center;
  /* z-index: 999; */
  overflow-y: hidden;
}
.individual-story-container {
  width: 30vw;
  height: 90vh;
  background-color: antiquewhite;
}
.story {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story .main-img {
  width: inherit;
  height: inherit;
  max-width: 30vw;
  max-height: 90vh;
  object-fit: cover;
}
.profile-data{
  position: absolute;
  top: 6vh;
  left: 36vw;
  background-color: transparent;
  display: flex;
}

.profile-data p {
  background: transparent;
  padding-left: 10px;
  margin-top: 5px;
}
.profile-data img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 6vh;
  left: 36vw;
  border: 2px solid orange;
}
</style>
