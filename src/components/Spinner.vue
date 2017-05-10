<template>
  <div v-if="loading" class="session-list__loader animated fadeIn">
    <div class="loader-inner ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'spinner',
    computed: {
      ...Vuex.mapGetters(['loading']),
    },
  };
</script>

<style lang="scss" scoped>
</style>
