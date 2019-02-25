<template>
  <div class="c-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "cContainer"
};
</script>

<style lang="scss" scoped>
.c-container {
  display: flex;
  padding: 80px 20px;
  margin: 0 auto;
  max-width: 1000px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0;
  }
}
</style>

