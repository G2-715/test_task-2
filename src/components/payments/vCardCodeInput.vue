<template>
  <div class="card-code-input">
    <input
      :class="{
        'gray-text': true,
        'card-code-input__value': true,
        'invalid': invalid
      }"
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
import { mapState, mapMutations } from "vuex";

export default {
  name: "vCardCodeInput",
  data() {
    return {
      placeholder: "000"
    };
  },
  computed: {
    ...mapState({
      value: state => state.cardCode,
      invalid: state => state.invalidCardCode
    })
  },
  methods: {
    ...mapMutations(["ADD_CARD_CODE_CHAR", "REMOVE_CARD_CODE_CHAR"]),

    changeValue(event) {
      if (!isNaN(parseFloat(event.key)) && this.value.length < 3)
        this.ADD_CARD_CODE_CHAR(event.key);
    },
    deleteChar() {
      this.REMOVE_CARD_CODE_CHAR();
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
    transition: all .2s;

    &:focus {
      border: 1px solid #7bc1f7 !important;
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
