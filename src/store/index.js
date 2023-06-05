import Vue from 'vue'
import Vuex from 'vuex'
import props from './props'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    props
  }
})

export default store
