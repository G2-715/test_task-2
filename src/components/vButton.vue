<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "vButton"
};
</script>

<style lang="scss" scoped>
.button {
  padding: 12px 30px;
  border: none;
  outline: none;
  border-radius: 20px;
  background-color: #005abf;
  background-image: linear-gradient(
    to top,
    rgba(37, 36, 35, 0.18) 0%,
    rgba(37, 36, 35, 0) 100%
  );
  color: #ffffff;
  font-family: "Open Sans";
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity .2s;

  &:hover {
    opacity: 0.8;
  }
}
</style>
