<template>
  <div class="">
    <template v-if="fullStory">
      <div>
        <StoriesGroup
          :stories="getStoriesFromUsers(stories)"
          :userId="getUserIdFromSelectedStory"
          @close="closeStory"
        ></StoriesGroup>
      </div>
    </template>
    <div class="story-container">
      <button @click="showPreviousStories" class="story-button">
        <i class="bi bi-caret-left-fill"></i>
      </button>
      <div class="story-wrapper">
        <transition name="fade" mode="out-in">
          <div :key="activeIndex" class="story">
            <div
              v-for="story in displayedStories"
              :key="story.uid"
              class="individual-story d-flex flex-column"
              @click="openStory(story.stories[0])"
            >
              <img
                :src="story.profile_img"
                alt=""
                class="img-fluid story-img"
              />
              <p>{{ story.userName }}</p>
            </div>
          </div>
        </transition>
      </div>
      <button @click="showNextStories" class="story-button">
        <i class="bi bi-caret-right-fill"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import User from "../../interfaces/User";
import store from "../../stores/store";

import StoriesGroup from "./StoriesGroup.vue";
import _ from "lodash";
import Story from "../../classes/Story";

export default {
  components: {
    StoriesGroup,
  },
  data() {
    return {
      stories: this.usersWithStories() as User[],
      activeIndex: 0,
      storiesPerPage: 7,
      fullStory: false,
      selectedStory: {} as Story,
    };
  },
  created() {},
  computed: {
    displayedStories() {
      const startIndex = this.activeIndex * this.storiesPerPage;
      const endIndex = startIndex + this.storiesPerPage;
      return this.stories.slice(startIndex, endIndex);
    },
    getUserIdFromSelectedStory(): number {
      return this.selectedStory.belongTo;
    },
  },
  methods: {
    usersWithStories() {
      return store.getters.getUsersHavingStories();
    },

    openStory(story: Story) {
      this.selectedStory = story;
      this.fullStory = true;
    },

    closeStory() {
      this.fullStory = false;
    },
    showNextStories() {
      if (
        this.activeIndex <
        Math.ceil(this.stories.length / this.storiesPerPage) - 1
      ) {
        this.activeIndex++;
      }
    },
    showPreviousStories() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    getStoriesFromUsers(users: User[]) {
      const stories = _.flatMap(users, (user) => user.stories);
      const filteredStore = stories.filter(
        (story: Story) => story.belongTo !== store.state.thisUser.uid
      );

      return filteredStore;
    },
  },
};
</script>

<style scoped>
@media (max-width: 650px) {
  .story-container {
    max-width: 40%; /* Make the container full width on smaller screens */
    padding: 0 ; /* Adjust padding for better readability on smaller screens */
  }

  .story-button {
    margin: 0 3px; /* Adjust button margin for smaller screens */
  }

  .individual-story {
    width: 50px; /* Reduce the width of individual stories on smaller screens */
  }

  .individual-story img {
    width: 25px; /* Reduce the size of images for smaller screens */
    height: 25px;
    margin: 0 2px;
  }
}
.story-container {
  display: flex;
  align-items: center;
  width: 800px;
}

.story-button {
  cursor: pointer;
  margin: 0 10px;
  border: none;
}

.story-wrapper {
  flex-grow: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.story {
  display: flex;
}
.individual-story {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
  width: 100px;
}
.individual-story img {
  width: 60px;
  height: 60px;
  margin: 0 5px;
  border-radius: 50%;
  border: 2px solid pink;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
