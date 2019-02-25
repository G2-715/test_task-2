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

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
