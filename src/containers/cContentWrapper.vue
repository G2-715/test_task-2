<template>
  <div class="c-content-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name: "cContentWrapper"
};
</script>

<style lang="scss" scoped>
.c-content-wrapper {
  padding: 45px 45px 45px 30px;
  background-color: #f7f8f8;
  height: 584px;
  transition: all 0.2s;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>
