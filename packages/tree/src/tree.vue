<template>
  <div class="container">
    <tree-node
      v-for="(item, index) in data"
      :data="item"
      :key="index"/>
    <div v-if="isEmpty">暂无数据</div>
  </div>
</template>

<script>
import TreeNode from './tree-node'
export default {
  name: 'k-tree',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TreeNode
  },
  data() {
    return {
    }
  },
  computed: {
    isEmpty() {
      return this.data.length === 0
    }
  },
  mounted () {
    console.log(this.data)
  }
}
</script>
