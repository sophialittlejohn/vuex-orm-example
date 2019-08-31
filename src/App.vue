<template>
  <div id="app">
    <form @submit.prevent="addItem">
      <input v-model="form.body" />
      <input type="submit" value="Add item" />
    </form>
    <ul>
      <li v-for="item in items" :key="item.$id" v-text="item.body" />
    </ul>
  </div>
</template>

<script>
import Item from "./classes/item";

export default {
  name: "app",
  data() {
    return {
      form: {
        body: ""
      }
    };
  },
  computed: {
    items() {
      return Item.all();
    }
  },
  methods: {
    addItem() {
      Item.insert({ data: this.form });
    }
  }
};
</script>

<style>
</style>
