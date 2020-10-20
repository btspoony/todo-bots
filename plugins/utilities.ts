import { Plugin } from '@nuxt/types'
import Vue from 'vue'

declare module 'vue/types/vue' {
  // this.$api inside Vue components
  interface Vue {
    $eventBus: Vue
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$api inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $eventBus: Vue
  }
  // nuxtContext.$api
  interface Context {
  }
}

declare module 'vuex/types/index' {
  // this.$api inside Vuex stores
  interface Store<S> {
    $eventBus: Vue
  }
}

const eventBus = new Vue()

const thePlugin: Plugin = async (context, inject) => {
  inject('eventBus', eventBus)
}

export default thePlugin
