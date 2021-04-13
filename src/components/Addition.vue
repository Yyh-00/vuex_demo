<template>
  <div class="app">
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click='handle'>+1</button>
    <button @click='handle1'>+N</button>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handle () {
      this.$store.commit('add')
    },
    handle1 () {
      this.$store.commit('addN', 3)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
