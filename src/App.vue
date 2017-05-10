<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { store } from './vuex/store';
import Spinner from './components/Spinner';

Vue.component('spinner', Spinner)

export default {
  name: 'app',
  store,
};
</script>

<style lang="scss">
  @import './styles/global';
</style>
