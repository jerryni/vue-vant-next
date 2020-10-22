<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h2>app v-model value: {{ mValue }}</h2>
  <HelloWorld
    msg="Welcome to Your Vue.js + TypeScript App"
    v-model="mValue"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  components: {
    'HelloWorld': HelloWorld,
  },

  setup() {
    const mValue = ref('app mValue');

    return {
      mValue
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
