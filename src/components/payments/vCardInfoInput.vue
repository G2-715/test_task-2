<template>
  <input
    type="text"
    :class="{
      'card-info-input': true,
      'dark-text': true,
      'invalid-bottom': invalid
    }"
    :style="{
      borderBottom: value ? '1px solid transparent' : '1px solid #000',
      width: value ? (value.length + 1) * 8.7 + 'px' : '40px'
    }"
    :value="value"
    @keydown.delete.prevent="deleteChar"
    @keypress.prevent="changeValue"
  >
</template>

<script>
export default {
  name: "vCardInfoInput",
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
    }
  },
  methods: {
    changeValue(event) {
      if (isNaN(parseFloat(event.key)) || this.value.length > this.maxLength)
        return;

      this.$emit("change", event.key);
    },
    deleteChar() {
      this.$emit("remove");
    }
  }
};
</script>

<style lang="scss" scoped>
.card-info-input {
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  height: 100%;
  transition: all .3s;

  &:focus {
    border-bottom: 1px solid #7bc1f7 !important;
    box-shadow: inset 0px -2px 5px -4px rgba(123,193,247,1);
  }
}
</style>
