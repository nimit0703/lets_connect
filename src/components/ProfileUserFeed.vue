<template>
  <div class="profUserFeed feed-container">
    <hr class="m-0" />
    <div>
      <ul class="nav nav-tabs text-secondary" id="myTabs">
        <li
          class="nav-item"
          @click="activateTab('post')"
          :class="{ active: activeTab === 'post' }"
        >
          <a class="nav-link text-white-50" href="#"
            ><i class="bi bi-grid-3x3 text-white-50"></i> Post</a
          >
        </li>
        <li
          class="nav-item"
          @click="activateTab('saved')"
          :class="{ active: activeTab === 'saved' }"
        >
          <a class="nav-link text-white-50" href="#"
            ><i class="bi bi-bookmark-check text-white-50"></i> Saved</a
          >
        </li>
        <li
          class="nav-item"
          @click="activateTab('tagged')"
          :class="{ active: activeTab === 'tagged' }"
        >
          <a class="nav-link text-white-50" href="#">
            <i class="bi bi-person-bounding-box text-white-50"></i> Tagged</a
          >
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div class="tab-pane" :class="{ active: activeTab === 'post' }">post</div>
      <div class="tab-pane" :class="{ active: activeTab === 'saved' }">
        Saved content goes here.
      </div>
      <div class="tab-pane" :class="{ active: activeTab === 'tagged' }">
        Tagged content goes here.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: "post",
    };
  },
  methods: {
    activateTab(tab: string) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.feed-container {
  display: flex;
  border-top: 1px solid rgb(134, 134, 134);
  width: 60vw;
  margin: 0 auto;
  align-items: center;
  color: #fff;
  flex-direction: column;
}

.tab-content {
  border: none;
  border-top: none;
  color: #fff;
}

.tab-pane .active {
  border: none;
}
.nav-tabs .active {
  border-top: 1px solid #fff;
}

.nav-tabs:hover {
  border: none;
}
.nav-tabs {
  --bs-nav-tabs-border-width: none;
  --bs-nav-tabs-border-color: none;
  --bs-nav-tabs-border-radius: 0;
  --bs-nav-tabs-link-hover-border-color: none;
  --bs-nav-tabs-link-active-color: none;
  --bs-nav-tabs-link-active-bg: none;
  --bs-nav-tabs-link-active-border-color: none;
  border-bottom: none;
}
</style>
