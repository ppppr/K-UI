<template>
  <div class="page">
    <v-hello message="my component library"></v-hello>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  created () {
    console.log(this)
  }
}
</script>