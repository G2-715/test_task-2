<template>
  <input
    :class="{
      'card-holder-input': true,
      'invalid': invalid,
      'placeholder': !value
    }"
    :value="value ? value : placeholder"
    @keydown.delete.prevent="removeChar"
    @keypress.prevent="addChar"
  >
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "vCardHolderInput",
  data() {
    return {
      placeholder: "Держатель карты"
    };
  },
  computed: {
    ...mapState({
      value: state => state.cardHolder,
      invalid: state => state.invalidCardHolder
    })
  },
  methods: {
    ...mapMutations(["CHANGE_CARD_HOLDER", "SET_VALID_CARD_HOLDER"]),

    addChar({ key }) {
      if (/[a-zA-Z ]/.test(key)) {
        let copyValue = this.value;
        
        if (key === " ") copyValue = copyValue.trim();

        this.CHANGE_CARD_HOLDER(copyValue + key.toUpperCase());
        if (this.invalid) this.SET_VALID_CARD_HOLDER();
      }
    },

    removeChar() {
      if (this.value) {
        this.CHANGE_CARD_HOLDER(this.value.slice(0, -1));
        if (this.invalid) this.SET_VALID_CARD_HOLDER();
      }
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
  transition: all 0.3s;
  text-shadow: 0 0 0 #373c43;

  &:focus {
    border: 1px solid #7bc1f7 !important;
    box-shadow: 0px 0px 8px #7bc1f7;
  }
}
</style>
