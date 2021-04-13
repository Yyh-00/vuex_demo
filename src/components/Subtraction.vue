<template>
  <div class="app">
     <h3>当前最新的count值为：{{count}}</h3>
    <button @click="handle">-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['supN']),
    handle () {
      this.supN(3)
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="less" scoped>

</style>
