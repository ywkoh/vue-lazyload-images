/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import LazyloadImage from './directive/vue-lazyload-images'

Vue.directive('lazyloadimage', LazyloadImage)

new Vue({
  el: '#app',
  render: h => h(App)
})
