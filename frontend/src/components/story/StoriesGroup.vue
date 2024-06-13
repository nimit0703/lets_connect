<template>
  <div class="fixed-bg">
    <div class="left-story bg-transparent p-4" @click="showPreviousStory">
      <!-- :disabled="currentStoryIndex === minStoryId" -->
      <i class="bi bi-caret-left-fill bg-transparent"></i>
    </div>
    <div class="individual-story-container shadow">
      <div class="story">
        <div class="user-story-tabs bg-transparent">
          <div class="stick-container">
            <div
              v-for="(story, index) in currentStoriesByUserId"
              :key="story.sid"
              @click="changeActiveStory(index)"
              class="stick"
                :class="{
                  'active-tab': index === activeStoryIndex,
                  'active-stick': index === activeStoryIndex,
                  }"
              ></div>
              <button @click="closeModal" class="cancel-button">
                <i class="bi bi-x"></i>
              </button>
          </div>
        </div>
        <div class="profile-data">
          <img :src="userData?.profile_img" alt="" />
          <p>{{ userData?.userName }}</p>
        </div>
        <img :src="activeStory?.content" alt="" class="main-img" />
      </div>
    </div>
    <div class="right-story bg-transparent p-4" @click="showNextStory">
      <!-- :disabled="currentStoryIndex === maxStoryId" -->
      <i class="bi bi-caret-right-fill bg-transparent"></i>
    </div>
    
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import Story from "../../classes/Story";
import store from "../../stores/store";
import User from "../../classes/User";
import { TransitionGroup } from "vue";

export default {
  props: {
    stories: {
      type: Array as () => Story[],
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    type: {
      default: "story",
    },
  },
  data() {
    const storyIds = this.stories.map((story) => story.sid);
    let userIds = this.stories.map((story) => story.belongTo);
    userIds = [...new Set(userIds)];

    return {
      currentStoriesByUserId: this.getUserStories(this.userId) as Story[],
      currentStoryIndex: 0,
      activeStoryIndex: 0,

      storyIds: storyIds,
      userIds: userIds,
      currentUserIndex: 0,
    };
  },

  created() {
    this.currentUserIndex = _.findIndex(
      this.userIds,
      (id) => id === this.userId
    );
    this.setUserStories();
  },
  unmounted() {
    document.body.style.overflow = "";
  },
  methods: {
    setUserStories() {
      const currentUserId = this.userIds[this.currentUserIndex];
      this.currentStoriesByUserId = this.getUserStories(currentUserId);
      this.currentStoryIndex = 0;
      this.activeStoryIndex = this.currentStoryIndex;
    },
    changeActiveStory(index: number) {
      this.activeStoryIndex = index;
      this.currentStoryIndex = this.currentStoriesByUserId[index].sid;
    },
    showPreviousStory() {
      let currentIndex = this.currentStoryIndex;
      if (currentIndex > 0) {
        this.currentStoryIndex -= 1;
        this.activeStoryIndex = this.currentStoryIndex;
      } else {
        this.showPreviousUserStories();
      }
    },
    showNextStory() {
      // debugger;
      let currentIndex = this.currentStoryIndex;
      let maxStoriesByuser = this.currentStoriesByUserId.length;
      if (currentIndex < maxStoriesByuser - 1) {
        this.currentStoryIndex += 1;
        this.activeStoryIndex = this.currentStoryIndex;
      } else {
        this.showNextUserStories();
      }
    },
    showPreviousUserStories() {
      if (this.currentUserIndex > 0) {
        this.currentUserIndex--;
        this.setUserStories();
      }
    },
    showNextUserStories() {
      if (this.currentUserIndex < this.userIds.length - 1) {
        this.currentUserIndex++;
        this.setUserStories();
      }
    },
    closeModal() {
      this.$emit("close");
    },
    getUserStories(id: number) {
      return store.getters.getStoriesFromUserId(id);
    },
  },
  computed: {
    activeStory(): Story | null {
      return this.currentStoriesByUserId[this.currentStoryIndex] || null;
    },

    userData(): User | null {
      const activeStory = this.activeStory;
      if (activeStory) {
        return store.getters.getUserById(activeStory.belongTo);
      }
      return null;
    },
  },
};
</script>

<style scoped>
.user-story-tabs {
  display: flex;
  justify-content: space-between;
  height: 10px;
  margin-bottom: 10px;
  width: 100%; /* Adjusted to take full width of its container */
}

.stick-container {
  display: flex;
  background: transparent;
  flex: 1;
}
.active-stick {
  height: 5px;
  background-color: rgba(122, 75, 132, 0.6) !important;
  padding: 5px;
  flex: 1;
}
.stick {
  height: 5px;
  background-color: rgba(48, 48, 48, 0.6);
  padding: 5px;
  flex: 1; /* Adjusted to take equal space */
  margin-right: 4px;
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
  flex-direction: column; /* Adjusted to make children stack vertically */
}
.story .main-img {
  width: 100%; /* Adjusted to take full width of its container */
  height: 85%; /* Adjusted height to allow space for story bars */
  max-width: 30vw;
  max-height: 90vh;
  object-fit: cover;
}
.profile-data {
  width: 100%; /* Adjusted to take full width of the story container */
  background-color: transparent;
  display: flex;
  /* justify-content: space-between; Ensure elements are spaced out */
  padding: 0 10px; /* Add some padding for better layout */
}
.profile-data p {
  margin-left: 2vw;
  background: transparent;
  margin-top: 5px;
}
.profile-data img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid orange;

}
.fixed-bg {
  position: fixed;
  left: 0;
  top: 0;
  margin: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(8, 8, 8, 0.297);
  justify-content: center;
  align-items: center;
  z-index: 130;
  overflow: hidden;
  padding: 0;
  backdrop-filter: blur(10px); /* Adjust the blur value as needed */

}
.cancel-button{
  position: fixed;
  right:10vw;
  top:5vh;
}

</style>
