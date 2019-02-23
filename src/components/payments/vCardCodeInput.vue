<template>
  <div class="card-code-input">
    <input
      class="gray-text card-code-input__value"
      :style="{textShadow: value.length ? '0 0 0 #373c43' : '0 0 0 #bec6cf'}"
      :value="value.length ? value : placeholder"
      @keydown.delete.prevent="deleteChar"
      @keypress.prevent="changeValue"
      type="text"
    >
    <img
      class="card-code-input__icon"
      src="../../assets/question-circle-regular.svg"
      alt="question-mark"
    >
  </div>
</template>

<script>
export default {
  name: "vCardCodeInput",
  data() {
    return {
      value: "",
      placeholder: "000"
    };
  },
  methods: {
    deleteChar() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    changeValue(event) {
      if (isNaN(parseFloat(event.key)) || this.value.length >= 3) return;

      this.value += event.key;
    }
  }
};
</script>

<style lang="scss" scoped>
.card-code-input {
  position: relative;

  &__value {
    width: 100%;
    padding: 10px 15px 10px 20px;
    outline: none;
    border: 1px solid #e4e9ee;
    box-sizing: border-box;
    color: transparent;

    &:focus {
      border: 1px solid #7bc1f7;
      box-shadow: 0px 0px 8px #7bc1f7;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 9px;
    width: 25px;
    height: 25px;
    transform: translateY(-50%);
  }
}
</style>
