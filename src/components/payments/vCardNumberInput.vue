<template>
  <div class="card-number-input">
    <input
      class="card-number-input__field dark-text"
      type="text"
      v-for="index in 4"
      :key="index"
      :value="cardNumber.slice((index - 1) * 4, index * 4)"
      @keydown.delete.prevent="deleteChar"
      @keypress.prevent="checkThisPart"
      v-focus="cardNumber.length > 4 * (index - 1) && cardNumber.length <= 4 * index"
    >
  </div>
</template>

<script>
export default {
  name: "vCardNumberInput",
  data() {
    return {
      cardNumber: ""
    };
  },
  methods: {
    checkThisPart(event) {
      if (isNaN(parseFloat(event.key)) || this.cardNumber.length >= 16) return;

      this.cardNumber += event.key;
    },
    deleteChar() {
      this.cardNumber = this.cardNumber.slice(0, this.cardNumber.length - 1);
    }
  },
  directives: {
    focus: {
      update(el, binding) {
        if (binding.value) el.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-number-input {
  &__field {
    width: 65px;
    padding: 9px;
    box-sizing: border-box;
    border: 1px solid #e4e9ee;
    background-color: #fff;
    outline: none;
    color: transparent;
    text-shadow: 0 0 0 black;
    text-align: center;

    &:not(:last-child) {
      margin-right: 9px;
    }

    &:focus {
      border: 1px solid #7bc1f7;
      box-shadow: 0px 0px 8px #7bc1f7;
    }
  }
}
</style>
