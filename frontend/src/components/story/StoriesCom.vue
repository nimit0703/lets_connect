<template>
  <div>
    <template v-if="fullStory">
      <div>
        <StoriesGroup
          :stories="getStoriesFromUsers(stories)"
          :userId="getUserIdFromSelectedStory"
          @close="closeStory"
        ></StoriesGroup>
      </div>
    </template>
    <div class="d-flex container-fluid">
      <div class="story-wrapper" ref="storyWrapper">
        <div class="stories-scroll container">
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="30"
            :loop="false"
            class="mySwiper"
            >
              <swiper-slide  
                v-for="story in stories"
                @click="openStory(story.stories[0])"
                :key="story.uid"
                class="individual-story d-flex flex-column">
                <img
                  :src="story.profile_img"
                  alt=""
                  class="img-fluid story-img"
                />
                <p class="d-none d-md-block">{{ story.userName }}</p>
              </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import User from "../../interfaces/User";
import store from "../../stores/store";
import StoriesGroup from "./StoriesGroup.vue";
import _ from "lodash";
import Story from "../../classes/Story";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
import 'swiper/css/pagination';

export default {
  components: {
    StoriesGroup,
    Swiper,
    SwiperSlide
  },
  setup() {
      return {
      };
    },
  data() {
    return {
      stories: this.usersWithStories() as User[],
      fullStory: false,
      selectedStory: {} as Story,
    };
  },
  computed: {
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
      const storyWrapper = this.$refs.storyWrapper as HTMLElement;
      storyWrapper.scrollLeft += storyWrapper.clientWidth;
    },
    showPreviousStories() {
      const storyWrapper = this.$refs.storyWrapper as HTMLElement;
      storyWrapper.scrollLeft -= storyWrapper.clientWidth;
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
.story-wrapper {
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */
  max-width: 900px;
}

.story-wrapper::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.stories-scroll {
  display: flex;
}

.individual-story {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
  width: 100px;
  margin-right: 10px;
}

.individual-story img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid pink;
  margin: 10px 10px;
}

.story-button {
  cursor: pointer;
  border: none;
}

@media (max-width: 650px) {
  .story-button {
    margin: 0;
    padding: 0;
  }

  .individual-story {
    width: 50px;
  }

  .individual-story img {
    width: 50px;
    height: 50px;
    margin: 10px 10px;
  }
}
</style>
