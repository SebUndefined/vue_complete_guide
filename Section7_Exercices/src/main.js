import Vue from 'vue'
import App from './App.vue'

export const serverEventBus = new Vue({
  methods:{
    changeServer(server){
      this.$emit('serverWasChange', server)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
