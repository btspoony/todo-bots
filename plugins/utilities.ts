import { Plugin } from '@nuxt/types'
import Vue from 'vue'

const eventBus = new Vue()

const thePlugin: Plugin = async (context, inject) => {
  inject('eventBus', eventBus)
}
export default thePlugin
