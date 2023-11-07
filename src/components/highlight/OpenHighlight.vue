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
                  v-for="(story, index) in stories"
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
import Highlight from "@/classes/Highlight";
import store from "../../stores/store";
import Story from "../../classes/Story";
import _ from "lodash";

export default {
  props: {
    hid: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      default: store.state.thisUser.uid,
    },
  },
  data() {
    return {
      highlights: this.getHighlights(),
      stories: [] as Story[],
      activeStoryIndex: 0,
      userData: store.getters.getUserById(this.userId),
    };
  },
  created() {
    console.log("HighLight open created", this.highlights);
    console.log("HighLight open Prop:Hid", this.hid);
    console.log("HighLight open Prop:userId", this.userId);
    var hl: Highlight = _.find(this.highlights, (hl) => hl.hid === this.hid)!;
    this.stories = hl.hl;
    console.log(this.stories);
    this.setActiveStory();
  },
  computed: {
    activeStory(): Story {
      return this.stories[this.activeStoryIndex];
    },
  },
  methods: {
    changeActiveStory(index: number) {
      this.activeStoryIndex = index;
    },
    showPreviousStory() {
      if (this.activeStoryIndex <= 0) {
        this.closeModal();
        return;
      }
      this.activeStoryIndex--;
    },
    showNextStory() {
      if (this.activeStoryIndex >= this.stories.length -1) {
        this.closeModal();
        return;
      }
      this.activeStoryIndex++;
    },
    setActiveStory() {},
    closeModal() {
      this.$emit("close");
    },
    getHighlights() {
      return store.getters.getHighlightsByUId(this.userId);
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
