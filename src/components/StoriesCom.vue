<template>
  <div class="story-container">
    <button @click="showPreviousStories" class="story-button"><i class="bi bi-caret-left-fill"></i></button>
    <div class="story-wrapper">
      <transition name="fade" mode="out-in">
        <div :key="activeIndex" class="story">
          <div
            v-for="story in displayedStories"
            :key="story.uid"
            class="individual-story d-flex flex-column"
          >
          <img :src="story.profile_img" alt="" class="img-fluid story-img">
          <p>{{story.userName}}</p>

          </div>
        </div>
      </transition>
    </div>
    <button @click="showNextStories" class="story-button"><i class="bi bi-caret-right-fill"></i></button>
  </div>
</template>

<script lang="ts">
import User from '@/interfaces/User';
import store from '../stores/store';

export default {
  data() {
    return {
      stories: [] as User[], 
      activeIndex: 0, 
      storiesPerPage: 7, 
    };
  },
  created() {
    this.stories = this.usersWithStories;
  },
  computed: {
    displayedStories() {
      const startIndex = this.activeIndex * this.storiesPerPage;
      const endIndex = startIndex + this.storiesPerPage;
      return this.stories.slice(startIndex, endIndex);
    },
    usersWithStories() {
      return store.getters.getUsersHavingStories();
    },
  },
  methods: {
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
  },
  
};
</script>

<style scoped>
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
