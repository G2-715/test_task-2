<template>
  <div class="card-number-input">
    <input
      v-for="i in 4"
      :key="i"
      :class="{
        'card-number-input__field': true, 
        'dark-text' : true,
        'invalid': invalid,
        'placeholder': !getNumberPart(i)
      }"
      type="text"
      @keydown.delete.prevent="removeChar"
      @keypress.prevent="addChar"
      :value="getNumberPart(i) ? getNumberPart(i) : placeholder"
      v-focus="isRightLength(i)"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { isNumber } from "../../helpers";

export default {
  name: "vCardNumberInput",
  data() {
    return {
      number: "",
      placeholder: "0000"
    };
  },
  computed: {
    ...mapState({
      invalid: state => state.invalidCardNumber
    })
  },
  methods: {
    ...mapMutations(["CHANGE_CARD_NUMBER", "SET_VALID_CARD_NUMBER"]),

    getNumberPart(index) {
      return this.number.slice((index - 1) * 4, index * 4);
    },

    isRightLength(index) {
      return this.number.length > 4 * (index - 1) && this.number.length <= 4 * index;
    },

    addChar({ key }) {
      if (isNumber(key) && this.number.length < 16) {
        this.number += key;
        this.CHANGE_CARD_NUMBER(this.number);
        if (this.invalid) this.SET_VALID_CARD_NUMBER();
      }
    },
    removeChar() {
      if (this.number) {
        this.number = this.number.slice(0, -1);
        this.CHANGE_CARD_NUMBER(this.number);
        if (this.invalid) this.SET_VALID_CARD_NUMBER();
      }
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
    transition: all 0.3s;

    &:not(:last-child) {
      margin-right: 9px;
    }

    &:focus {
      border: 1px solid #7bc1f7 !important;
      box-shadow: 0px 0px 8px #7bc1f7;
    }
  }
}
</style>
