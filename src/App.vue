<template>
  <div id="app">
    <Addition></Addition>
    <p>------------------------------------</p>
    <Subtraction></Subtraction>
  </div>
</template>

<script>
import Addition from '@/components/Addition.vue'
import Subtraction from '@/components/Subtraction.vue'

export default {
  name: 'App',
  components: {
    Addition,
    Subtraction
  }
}
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
