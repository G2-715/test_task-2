<template>
  <input
    class="card-holder-input"
    :style="{textShadow: value.length ? '0 0 0 #373c43' : '0 0 0 #bec6cf'}"
    :value="value.length ? value : placeholder"
    @keydown.delete.prevent="deleteChar"
    @keypress.prevent="changeValue"
  >
</template>

<script>
export default {
  name: "vCardHolderInput",
  data() {
    return {
      value: "",
      placeholder: "Держатель карты"
    };
  },
  methods: {
    changeValue(event) {
      if (/[a-zA-Z]/.test(event.key) || event.key === " ")
        this.value += event.key.toUpperCase();
    },
    deleteChar() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  },
  filters: {
    upperCase(string) {
      return string.toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.card-holder-input {
  width: 100%;
  outline: none;
  border: 1px solid #e4e9ee;
  color: transparent;
  font-family: "Arial MT";
  font-size: 16px;
  font-weight: 400;
  padding: 11px 13px;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #7bc1f7;
    box-shadow: 0px 0px 8px #7bc1f7;
  }
}
</style>
