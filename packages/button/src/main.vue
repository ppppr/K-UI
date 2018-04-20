<template>
  <button
    class="k-button"
    @click="handleClick"
    :class="[
      type ? 'k-button-' + type : '',
      size ? 'k-button-' + size : ''
    ]"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'k-button',
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    size: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

