<template>
  <div class="">
    <template v-if="fullStory">
      <div class="">
        <StoriesGroup
          :stories="highlights"
          :userId="getUserIdFromSelectedStory"
          :type="'highlight'"
          @close="closeStory"
        ></StoriesGroup>
      </div>
    </template>
    <div class="d-flex">
      <div
        class="dflex flex-column justify-content-center align-items-center me-4"
        v-for="hl in highlights"
        @click="openHighlight(hl)"
      >
        <div
          class="highlight-border border border-secondary border-hover-primary d-flex justify-content-center align-items-center"
        >
          <img :src="hl.content" alt="" class="img-fluid highlight-img" />
        </div>
        <div class="mt-2">
          <p class="m-0 text-center">{{ hl.sid }}</p>
        </div>
      </div>
      <div class="dflex flex-column justify-content-center align-items-center">
        <div
          class="highlight-border border border-secondary border-hover-primary d-flex justify-content-center align-items-center"
        >
          <i class="bi bi-plus-lg m-auto"></i>
        </div>
        <div class="mt-2">
          <p class="m-0 text-center">New</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import Story from "../classes/Story";
import StoriesGroup from "./StoriesGroup.vue";

export default {
  props: {
    highlights: {
      type: Array as () => Story[],
      required: true,
    },
  },
  component: {
    StoriesGroup,
  },
  data() {
    return {
      highlight: store.state.thisUser.stories,
      fullStory: false,
      selectedHighlight: {} as Story,
    };
  },
  methods: {
    openHighlight(story: Story) {
      this.selectedHighlight = story;
      this.fullStory = true;
    },
    closeStory() {
      this.fullStory = false;
    },
  },
  computed: {
    getUserIdFromSelectedStory(): number {
      return this.selectedHighlight.belongTo;
    },
  },
  components: { StoriesGroup },
};
</script>

<style scoped>
.highlight-border {
  height: 98px;
  width: 98px;
  border-radius: 50%;
  /* margin-right: 30px; */
  padding: 1px;
}

.highlight-border i {
  display: flex;
  font-size: 4.4vw;
  width: 90px;
  color: rgb(81, 81, 81);
  border-radius: 61%;
  height: 90px;
  background-color: rgba(141, 141, 141, 0.249);
  justify-content: center;
  align-items: center;
}
.highlight-border img {
  height: 90px;
  width: 90px;
  border-radius: 50%;
  opacity: 0.7;
}
.border-hover-primary:hover {
  border-color: #ffffff !important; /* Apply Bootstrap's primary color on hover */
}
</style>
