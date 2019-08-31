import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import Item from './classes/item'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)

export default new Vuex.Store({
  plugins: [VuexORM.install(database)]
})
