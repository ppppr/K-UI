<template>
  <div class="container">
    <k-tree :data="data1"></k-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: [
        {
          title: 'parent 1',
          expand: true,
          children: [{
            title: 'parent 1-1',
            expand: true,
            children: [
              {
                title: 'leaf 1-1-1'
              },
              {
                title: 'leaf 1-1-2'
              }
            ]
          }, {
            title: 'parent 1-2',
            expand: true,
            children: [
              {
                title: 'leaf 1-2-1'
              },
              {
                title: 'leaf 1-2-1'
              }]
          }]}]
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
