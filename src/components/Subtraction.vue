<template>
  <div class="app">
     <h3>当前最新的count值为：{{count}}</h3>
    <button>-1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="less" scoped>

</style>
