<template>
  <div class="p-1">
    <hr class="m-0" />
    <div class="d-flex justify-content-center">
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
    <div class="tab-content" style="width: inherit">
      <div
        class="tab-pane "
        :class="{ active: activeTab === 'post' }"
      >
        <UserPosts></UserPosts>
      </div>
      <div
        class="tab-pane "
        :class="{ active: activeTab === 'saved' }"
      >
        <UserSaved />
      </div>
      <div
        class="tab-pane "
        :class="{ active: activeTab === 'tagged' }"
      >
        <UserTagged />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import UserPosts from "./UserPosts.vue";
import UserSaved from "./UserSaved.vue";
import UserTagged from "./UserTagged.vue";
export default {
  components: {
    UserPosts,
    UserSaved,
    UserTagged,
  },
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
.nav-item {
  padding: 0.7rem 0;
}
</style>
