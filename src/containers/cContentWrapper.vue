<template>
  <div class="c-content-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "cContentWrapper"
}
</script>

<style lang="scss" scoped>
.c-content-wrapper {
  padding: 45px 45px 45px 30px;
  background-color: #f7f8f8;
}
</style>
