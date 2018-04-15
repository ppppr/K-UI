<template>
  <div class="container">
    <k-button
      @click="handleClick"
      size="mini"
      type="danger" >开始搜索</k-button>
    <k-button
      @click="handleClick"
      size="small"
      type="danger" >开始搜索</k-button>
    <k-button
      @click="handleClick"
      type="danger" >开始搜索</k-button>
    <k-button
      @click="handleClick"
      type="primary" >开始搜索</k-button>
    <k-button
      @click="handleClick" >开始搜索</k-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
</style>
