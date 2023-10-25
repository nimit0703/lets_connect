<template>
  <div>
    <SearchCom></SearchCom>
  </div>
</template>

<script lang="ts">
import store from "../stores/store";
import SearchCom from "../components/SearchCom.vue";

export default {
  components: {
    SearchCom,
  },
  mounted() {
    console.log("search mounted");
    store.state.showLoder = false;
  },
  beforeUnmount() {
    console.log("search unmounted");
    store.state.showLoder = true;
  },
};
</script>
