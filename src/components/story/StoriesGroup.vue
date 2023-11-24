<template>
  <div class="fixed-bg">
    <div class="left-story bg-transparent p-4" @click="showPreviousStory">
      <!-- :disabled="currentStoryIndex === minStoryId" -->
      <i class="bi bi-caret-left-fill bg-transparent"></i>
    </div>
    <div class="individual-story-container shadow">
      <div class="story">
        <div class="profile-data">
          <div class="d-flex flex-column bg-transparent">
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
              </div>
            </div>

            <div class="d-flex bg-transparent">
              <img :src="userData?.profile_img" alt="" />
              <p>{{ userData?.userName }}</p>
            </div>
          </div>
        </div>
        <img :src="activeStory?.content" alt="" class="main-img" />
      </div>
    </div>
    <div class="right-story bg-transparent p-4" @click="showNextStory">
      <!-- :disabled="currentStoryIndex === maxStoryId" -->
      <i class="bi bi-caret-right-fill bg-transparent"></i>
    </div>
    <button @click="closeModal" class="cancel-button">
      <i class="bi bi-x"></i>
    </button>
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
    type:{
      default:"story",
    }
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
    this.currentUserIndex = _.findIndex(this.userIds,(id)=>id===this.userId);
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
  width: 27vw;
}

.stick-container {
  display: flex;
  background: transparent;
  flex: 1;
}
.active-stick {
  height: 5px;
  border: 2px solid rgb(28, 28, 28);
  padding: 5px;
  flex: 1;
}
.stick {
  height: 5px;
  background-color: rgba(48, 48, 48, 0.6);
  padding: 5px 10px;
  flex: 10;
  margin-right: 4px;
}
.cancel-button {
  position: absolute;

  left: 62.5vw;
  top: 5vh;
  background: transparent;
  border: none;
}

.cancel-button i {
  background: transparent;
  font-size: 1.8vw;
}
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
  z-index: 999;
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
.profile-data {
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
