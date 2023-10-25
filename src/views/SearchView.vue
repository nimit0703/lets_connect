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
  created() {
    store.state.showLoder = true;
  },
  mounted() {
    setTimeout(() => {
      store.state.showLoder = false;
    }, 200);
  },
};
</script>
