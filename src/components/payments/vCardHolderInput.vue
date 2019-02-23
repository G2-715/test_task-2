<template>
  <input
    :class="{
      'card-holder-input': true,
      'invalid': invalid
    }"
    :style="{textShadow: value.length ? '0 0 0 #373c43' : '0 0 0 #bec6cf'}"
    :value="value.length ? value : placeholder"
    @keydown.delete.prevent="deleteChar"
    @keypress.prevent="changeValue"
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
    ...mapMutations([
      "ADD_CARD_HOLDER_CHAR",
      "REMOVE_CARD_HOLDER_CHAR"
    ]),

    changeValue(event) {
      if (/[a-zA-Z]/.test(event.key) || event.key === " ")
        this.ADD_CARD_HOLDER_CHAR(event.key.toUpperCase());
    },
    deleteChar() {
      this.REMOVE_CARD_HOLDER_CHAR();
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
  transition: all .3s;

  &:focus {
    border: 1px solid #7bc1f7 !important;
    box-shadow: 0px 0px 8px #7bc1f7;
  }
}
</style>
