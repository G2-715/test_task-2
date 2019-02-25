<template>
  <div class="card-code-input">
    <input
      :class="{
        'gray-text': true,
        'card-code-input__value': true,
        'invalid': invalid,
        'placeholder': !value
      }"
      type="text"
      :value="value ? value : placeholder"
      @keydown.delete.prevent="removeChar"
      @keypress.prevent="addChar"
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
import { isNumber } from "../../helpers";

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
      invalid: state => state.invalid.CardCode
    })
  },
  methods: {
    ...mapMutations(["CHANGE_CARD_CODE", "SET_VALID_CARD_CODE"]),

    addChar({ key }) {
      if (isNumber(key) && this.value.length < 3) {
        this.CHANGE_CARD_CODE(this.value + key);
        if (this.invalid) this.SET_VALID_CARD_CODE();
      }
    },

    removeChar() {
      this.CHANGE_CARD_CODE(this.value.slice(0, -1));
      if (this.invalid) this.SET_VALID_CARD_CODE();
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
    transition: all 0.2s;
    text-shadow: 0 0 0 #373c43;

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
