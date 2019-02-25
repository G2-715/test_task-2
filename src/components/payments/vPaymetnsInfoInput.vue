<template>
  <span
    :class="{
      'payments-info-input': true,
      'dark-text': true,
      'invalid-info': invalid,
      'placeholder': !value
    }"
    contenteditable="true"
    @keydown.delete.prevent="removeChar"
    @keypress.prevent="addChar"
  >
    {{ value ? value : placeholder }}
  </span>
</template>

<script>
import { isNumber } from "../../helpers.js";

export default {
  name: "vPaymetnsInfoInput",
  props: {
    value: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      required: true
    },
    invalid: {
      type: Boolean,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    addChar({ key }) {
      if (isNumber(key) && this.value.length < this.maxLength)
        this.$emit("change", this.value + key);
    },
    removeChar() {
      if (this.value) 
        this.$emit("change", this.value.slice(0, -1));
    }
  }
};
</script>

<style lang="scss" scoped>
.payments-info-input {
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  transition: border 0.3s;
  border-bottom: 1px solid transparent;
  color: transparent;
  text-shadow: 0 0 0 #373c43;

  &:focus {
    border-bottom: 1px solid #666;
  }
}
</style>
