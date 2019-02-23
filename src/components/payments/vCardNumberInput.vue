<template>
  <div class="card-number-input">
    <input
      :class="{
        'card-number-input__field': true, 
        'dark-text' : true,
        'invalid': invalid
      }"
      type="text"
      v-for="index in 4"
      :key="index"
      :value="number.slice((index - 1) * 4, index * 4)"
      @keydown.delete.prevent="deleteChar"
      @keypress.prevent="changeValue"
      v-focus="number.length > 4 * (index - 1) && number.length <= 4 * index"
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "vCardNumberInput",
  computed: {
    ...mapState({
      number: state => state.cardNumber,
      invalid: state => state.invalidCardNumber
    })
  },
  methods: {
    ...mapMutations(["ADD_CARD_NUMBER_CHAR", "REMOVE_CARD_NUMBER_CHAR"]),

    changeValue(event) {
      if (!isNaN(parseFloat(event.key)) && this.number.length < 16)
        this.ADD_CARD_NUMBER_CHAR(event.key);
    },
    deleteChar() {
      this.REMOVE_CARD_NUMBER_CHAR();
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
    transition: all .3s;

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
