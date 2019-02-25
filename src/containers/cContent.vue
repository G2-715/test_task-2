<template>
  <div class="c-content">
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
  overflow: hidden;
  width: 640px;
}
</style>