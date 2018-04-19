<template>
  <div class="k-tree">
    <ul >
      <li>
        <span class="k-tree-arrow"></span>
        <span class="ivu-tree-title">title</span>
        <Tree-node
          v-for="(item, i) in children"
          :key="i"
          :data="item">
          </Tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TreeNode',
  data() {
    return {

    }
  },
}
</script>
