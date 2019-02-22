<template>
  <div class="c-content">
    <span>CONTENT</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cContent"
}
</script>

<style lang="scss" scoped>
.c-content {
  width: 640px;
  float: right;
}
</style>