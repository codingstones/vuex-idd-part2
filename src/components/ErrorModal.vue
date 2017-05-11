<template>
  <sweet-modal ref="modal" icon="error" title="Server Fake Error">{{ error }} (Refresh until you get the sessions)
  </sweet-modal>
</template>

<script>
  import * as Vuex from 'vuex';

  export default {
    name: 'error-modal',
    computed: {
      ...Vuex.mapGetters(['error']),
    },
    updated() {
      if (this.error) this.$refs.modal.open();
    },
  };
</script>

<style lang="scss" scoped>
</style>
