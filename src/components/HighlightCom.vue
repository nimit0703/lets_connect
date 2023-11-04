<template>
  <div class="">
    <template v-if="fullStory">
      <div class="">
        <StoriesGroup
          :stories="getAllHighlightedStories"
          :userId="getUserIdFromSelectedStory"
          :type="'highlight'"
          @close="closeStory"
        ></StoriesGroup>
      </div>
    </template>
    <div class="d-flex">
      <div
        class="dflex flex-column justify-content-center align-items-center me-4"
        v-for="highlight in highlights"
        @click="openHighlight(highlight)"
        >
        <div
          class="highlight-border border border-secondary border-hover-primary d-flex justify-content-center align-items-center"
        >
          <img :src="highlight.hl[0].content" alt="" class="img-fluid highlight-img" />
        </div>
        <div class="mt-2">
          <p class="m-0 text-center">{{ highlight.title }}</p>
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
import Highlight from "../classes/Highlight";

export default {
  props: {
    highlights: {
      type: Array as () => Highlight[],
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
      selectedHighlight: {} as Highlight,
    };
  },
  methods: {
    openHighlight(highlight:Highlight) {
      this.selectedHighlight = highlight;
      this.fullStory = true;
    },
    closeStory() {
      this.fullStory = false;
    },
  },
  computed: {
    getUserIdFromSelectedStory(): number {
      return this.selectedHighlight.belongsTo;
    },
    getAllHighlightedStories():Story[]{
      return []
    }
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
