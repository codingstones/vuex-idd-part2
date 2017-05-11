<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { SweetModal } from 'sweet-modal-vue';
import { store } from './vuex/store';
import Spinner from './components/Spinner';
import ErrorModal from './components/ErrorModal';

Vue.component('spinner', Spinner);
Vue.component('error-modal', ErrorModal);
Vue.component('sweet-modal', SweetModal);

export default {
  name: 'app',
  store,
};
</script>

<style lang="scss">
  @import './styles/global';
</style>
