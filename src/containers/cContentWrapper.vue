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

  @media (max-width: 1000px) {
    height: 662px;
  }

  @media (max-width: 768px) {
    height: 524px;
    padding: 15px 20px;
  }

  @media (max-width: 768px) {
    height: 599px;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
}
</style>
