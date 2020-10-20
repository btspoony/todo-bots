
declare module 'vue/types/vue' {
  interface Vue {
    $eventBus: Vue
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $eventBus: Vue
  }
  interface Context {
    $eventBus: Vue
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $eventBus: Vue
  }
}
