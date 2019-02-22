<template>
  <div class="c-aside">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cAside"
}
</script>

<style lang="scss" scoped>
.c-aside {
  width: 320px;
  float: left;
}
</style>
